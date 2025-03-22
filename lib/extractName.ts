function extractDocumentName(url: string): string | null {
  try {
    const decodedUrl = decodeURIComponent(url); // Decode URL-encoded characters
    const parts = decodedUrl.split("/"); // Split by "/"
    return parts.pop() ?? null; // Get the last part (filename)
  } catch (error) {
    console.error("Invalid URL", error);
    return null;
  }
}

export function extractCleanDocumentName(url: string): string | null {
  const fileName = extractDocumentName(url);
  if (!fileName) return null;

  return fileName.replace(/^\d+-/, ""); // Remove leading numbers followed by "-"
}

