"use server";
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
  const imagesValue = formData.get("images");
  const documentsValue = formData.get("documents");

  let images: string[] = [];
  let documents: string[] = [];

  try {
    if (typeof imagesValue === "string") {
      images = JSON.parse(imagesValue);
    }

    if (typeof documentsValue === "string") {
      documents = JSON.parse(documentsValue);
    }
  } catch (error) {
    console.error("Error parsing file URLs:", error);
    return { error: "Invalid file data format" };
  }

  if (!images.length || !documents.length) {
    return { error: "Please upload at least one image and document" };
  }

  try {
    // Convert file paths to public URLs
    const imageUrls = await Promise.all(
      images.map(async (filePath) => {
        const { data } = (await supabase).storage
          .from("car-images")
          .getPublicUrl(filePath);
        return data.publicUrl;
      })
    );

    const documentUrls = await Promise.all(
      documents.map(async (filePath) => {
        const { data } = (await supabase).storage
          .from("car-documents")
          .getPublicUrl(filePath);
        return data.publicUrl;
      })
    );

    // Insert into car_listings table with public URLs
    const { error } = await (await supabase).from("pending_cars").insert({
      name,
      brand,
      year,
      location,
      price,
      images: imageUrls,
      documents: documentUrls,
    });

    if (error) console.error(error);
    revalidatePath("/list-your-car");
    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: (err as Error).message };
  }
}
