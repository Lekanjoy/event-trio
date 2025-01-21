"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function signupAction(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const fullName = formData.get("name") as string;
  const phoneNumber = formData.get("phone") as string;

  const inputData = {
    email,
    password,
  };

  const { data, error } = await supabase.auth.signUp(inputData);

  if (error) {
    console.log(error);
    redirect("/error");
  }

  // Save newly registered user to database
  const { error: userTableError } = await supabase
    .from("users")
    .insert([{id: data.user?.id, name: fullName, phone: phoneNumber }]);

  if (userTableError) {
    console.log(userTableError);    
    redirect("/error");
  }

  revalidatePath("/sign-up", "layout");
  redirect("/sign-up?message=Check your email to continue sign in process");
}

export async function signInWithGoogleAction() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect(data.url);
}
