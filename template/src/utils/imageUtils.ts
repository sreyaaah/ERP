
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

export const getImageUrl = (url: string | null | undefined): string | null => {
  if (typeof url !== 'string') return null;
  const trimmedUrl = url.trim();

  // If it's a full URL, check if it's a localhost URL that needs to be switched to the production backend
  if (trimmedUrl.startsWith("http")) {
    if (trimmedUrl.includes("localhost:5000")) {
      return trimmedUrl.replace("http://localhost:5000", BACKEND_URL);
    }
    return trimmedUrl;
  }

  if (trimmedUrl.startsWith("/")) return `${BACKEND_URL}${trimmedUrl}`;
  return `${BACKEND_URL}/${trimmedUrl}`;
};
