"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function loginAction(formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.error(error);    
    revalidatePath("/login", "layout");
    redirect(`/login?message=${error?.message}`);
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function logoutUser() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();
  if (error) {
    redirect("/error");
  }

  redirect("/login");
}

export async function getUser() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    return null
  }
  return data
}
