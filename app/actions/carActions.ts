"use server";
import { uploadFile } from "@/lib/uploadFile";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function submitCarListing(formData: FormData) {
  const supabase = createClient();
  const user = await (await supabase).auth.getUser();
  if (!user) return { error: "User not authenticated" };

  // Extract text fields
  const name =
    typeof formData.get("name") === "string" ? formData.get("name") : "";
  const brand =
    typeof formData.get("brand") === "string" ? formData.get("brand") : "";
  const yearValue = formData.get("year");
  const year = typeof yearValue === "string" ? parseInt(yearValue, 10) : 0;
  const locationValue = formData.get("location");
  const location = typeof locationValue === "string" ? locationValue : "";
  const priceValue = formData.get("price");
  const price = typeof priceValue === "string" ? parseFloat(priceValue) : 0;

  if (!name || !brand || !year || !location || !price) {
    return { error: "All fields are required" };
  }

  // Handle files
  const images = formData.getAll("images") as File[];
  const documents = formData.getAll("documents") as File[];

  if (!images.length || !documents.length) {
    return { error: "Please upload at least one image and document" };
  }

  try {
    // Upload images and documents to Supabase Storage
    const uploadedImages = await Promise.all(
      images.map((file) => uploadFile(file, "car-images"))
    );
    const uploadedDocuments = await Promise.all(
      documents.map((file) => uploadFile(file, "car-documents"))
    );

    // Insert into car_listings table
    const { error } = await (await supabase).from("pending_cars").insert({
      name,
      brand,
      year,
      location,
      price,
      images: uploadedImages,
      documents: uploadedDocuments,
    });

    if (error) console.error(error);
    revalidatePath("/list-your-car");
    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: (err as Error).message };
  }
}
