"use server";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function approveCarListing(carId: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("pending_cars")
    .select()
    .eq("user_id", carId)
    .single();
  if (error) return { error: "Car not found" };

  const { user_id, name, brand, images, year, location, price } = data;

  // Insert into the main cars table
  const { error: insertError } = await supabase.from("cars").insert({
    id: user_id,
    name,
    brand,
    image_url: images[0],
    images,
    year,
    location,
    price_per_day: price,
    status: "available",
  });

  if (insertError) return { error: insertError.message };

  // Delete from pending_cars
  await supabase.from("pending_cars").delete().eq("user_id", carId);

  // Get current stats and update approved count
  const { data: currentStats } = await supabase
    .from("listing_stats")
    .select("approved")
    .eq("listing_Id", 1)
    .single();

  if (currentStats) {
    await supabase
      .from("listing_stats")
      .update({ approved: (currentStats.approved || 0) + 1 })
      .eq("listing_Id", 1);
  }

  revalidatePath("/admin");
  return { success: true };
}

export async function rejectCarListing(carId: string) {
  const supabase = await createClient();

  // Delete from pending_cars
  const { error } = await supabase
    .from("pending_cars")
    .delete()
    .eq("user_id", carId);

  if (error) return { error: error.message };

  // Get current stats and update rejected count
  const { data: currentStats } = await supabase
    .from("listing_stats")
    .select("rejected")
    .eq("listing_Id", 1)
    .single();

  if (currentStats) {
    await supabase
      .from("listing_stats")
      .update({ rejected: (currentStats.rejected || 0) + 1 })
      .eq("listing_Id", 1);
  }

  revalidatePath("/admin");
  return { success: true };
}
