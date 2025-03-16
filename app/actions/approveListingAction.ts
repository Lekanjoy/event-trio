import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function approveCarListing(carId: string) {

    const supabase = createClient()
    const { data, error } = await (await supabase).from('pending_cars').select().eq('id', carId).single();
    if (error) return { error: 'Car not found' };
  
    const { user_id, name, brand, images, year, location, price } = data;
  
    // Insert into the main cars table
    const { error: insertError } = await (await supabase).from('cars').insert({
      user_id, name, brand, images, year, location, price
    });
  
    if (insertError) return { error: insertError.message };
  
    // Delete from car_listings
    await (await supabase).from('pending_cars').delete().eq('id', carId);
  
    revalidatePath('/admin');
    return { success: true };
  }
  