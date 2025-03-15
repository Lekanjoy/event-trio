import { createClient } from "@/utils/supabase/server";

export async function uploadFile(
  file: File,
  bucket: "car-images" | "car-documents"
) {
  const supabase = createClient();
  const filePath = `${Date.now()}-${file.name}`;

  const { error } = await (await supabase).storage
    .from(bucket)
    .upload(filePath, file);

  if (error) throw new Error(error.message);

  // ✅ Get the public URL
  const publicURL = (await supabase).storage.from(bucket).getPublicUrl(filePath)
    .data.publicUrl;

  return publicURL; // Return the full public URL
}
