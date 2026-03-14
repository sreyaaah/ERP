
const BACKEND_URL = "http://localhost:5000";

export const getImageUrl = (url: string | null | undefined): string | null => {
  if (typeof url !== 'string') return null;
  const trimmedUrl = url.trim();
  if (trimmedUrl.startsWith("http")) return trimmedUrl;
  if (trimmedUrl.startsWith("/")) return `${BACKEND_URL}${trimmedUrl}`;
  return `${BACKEND_URL}/${trimmedUrl}`;
};
