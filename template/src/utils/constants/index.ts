import { getCountries, getCountryCallingCode } from "libphonenumber-js";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export const NAMELENGTH = 30;
export const SORTNAMELENGTH = 3;
export const WORKSPACELENGTH = 63;
export const POSTALCODELENGTH = 10;
export const alphaNumeric = /^[a-zA-Z0-9 ]+$/;
export const onlyAlphabet = /^[A-Za-z\s]+$/;
export const COMPANYNAMELENGTH=100;

export const OnlyAllowLetters = (event: any) => {
  const allowedKeys = [
    "Backspace",
    "ArrowLeft",
    "ArrowRight",
    "Delete",
    "Tab",
    " ",
  ];

  if (!allowedKeys.includes(event.key) && !/^[a-zA-Z]$/.test(event.key)) {
    event.preventDefault();
  }
};

export const OnlyAllowNumbers = (event: KeyboardEvent) => {
  const allowedKeys = ["Backspace", "ArrowLeft", "ArrowRight", "Delete", "Tab"];

  if (!allowedKeys.includes(event.key) && !/^\d$/.test(event.key)) {
    event.preventDefault();
  }
};

export const capitalizeFirstLetterOfEachWord = (text: string) => {
  return text
    ?.split(" ")
    ?.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    ?.join(" ");
};
export function sanitizeStringWithUnderscores(input: any): string {
  if (typeof input !== "string") return "";

  // Trim leading/trailing spaces and collapse multiple spaces
  const trimmed = input.trim().replace(/\s+/g, " ");

  // If it's still empty after trim
  if (trimmed.length === 0) return "";

  // If it's a single word (no spaces), return as-is
  if (!trimmed.includes(" ")) return trimmed;

  // Replace spaces with underscores
  return trimmed.replace(/ /g, "_");
}

/**
 * Format a shared date to "Today", "X days ago", or "In X days".
 * @param sharedAt A date string or null.
 * @returns A formatted string like "Today", "2 days ago", "In 3 days", or "N/A".
 */
export function formatSharedDate(sharedAt: string | null): string {
  if (!sharedAt) return "-";

  const date = new Date(sharedAt);
  const now = new Date();

  if (isNaN(date.getTime())) return "-";

  // Normalize both dates to midnight for accurate day comparison
  const startOfToday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );
  const startOfShared = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );

  const msInDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.round(
    (startOfToday.getTime() - startOfShared.getTime()) / msInDay
  );

  if (diffDays === 0) return "Today";
  if (diffDays > 0) return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
  return `In ${Math.abs(diffDays)} day${Math.abs(diffDays) > 1 ? "s" : ""}`;
}
export const formatTime = (time: any) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

type MaskType = "email" | "sms";

export function maskData(value: string, type: MaskType): string {
  if (!value) return "";

  if (type === "email") {
    const [name, domain] = value.split("@");
    if (!name || !domain) return value;

    const visibleChar = 2;
    const maskedName =
      "*".repeat(Math.max(0, name.length - visibleChar)) +
      name.slice(-visibleChar);
    return `${maskedName}@${domain}`;
  }

  if (type === "sms") {
    const digits = "9876549889";
    //value.replace(/\D/g, ""); // remove non-digits
    if (digits.length < 3) return "*".repeat(digits.length);

    const maskedLength = digits.length - 3;
    return "*".repeat(maskedLength) + " " + digits.slice(-3);
  }

  return value;
}

export const getCurrencySymbol = (currencyCode: string): string => {
  const code = currencyCode?.toUpperCase();

  const currencyMap: { [key: string]: string } = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    INR: "₹",
    JPY: "¥",
    CNY: "¥",
    KRW: "₩",
    RUB: "₽",
    AUD: "A$",
    CAD: "C$",
    CHF: "CHF",
    SGD: "S$",
    AED: "د.إ",
    BRL: "R$",
    ZAR: "R",
    NGN: "₦",
    THB: "฿",
    MYR: "RM",
    IDR: "Rp",
    PHP: "₱",
    TRY: "₺",
    VND: "₫",
  };

  return currencyMap[code] || currencyCode;
};

export const capitalizeFirstLetter = (text: string): string => {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
};
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

export const removeImagesFromHTML = (htmlContent: any) => {
  const tempElement = document.createElement("div");
  tempElement.innerHTML = htmlContent;

  const images: any = tempElement.getElementsByTagName("img");
  while (images.length > 0) {
    images[0].parentNode.removeChild(images[0]);
  }
  return tempElement.innerHTML;
};

export function getClinicAdminLoginUrl(workspace: string) {
  const isLocalhost = window.location.hostname.includes("localhost");
  const protocol = isLocalhost ? "http" : "https";
  const port = isLocalhost ? ":3000" : "";
  const domain = isLocalhost
    ? `${workspace}.localhost`
    : `${workspace}.fusion.dreamstechnologies.com`;

  return `${protocol}://${domain}${port}/clinic-admin/login`;
}

export function getWorkspaceNameFromCurrentUrl(): string | null {
  try {
    const hostname = window.location.hostname; // e.g. "test-ws.localhost"
    const parts = hostname.split(".");

    if (parts.length === 2 && parts[1] === "localhost") {
      // Development case: use subdomain before 'localhost'
      return parts[0];
    }

    if (parts.length >= 3) {
      // Production case: use first part as subdomain
      return parts[0];
    }

    console.warn("Unexpected hostname format:", hostname);
    return null;
  } catch (err) {
    console.error("Failed to extract workspace name:", err);
    return null;
  }
}

export function getCountryFromCallingCode(code: any) {
  const countries = getCountries(); // All country codes like ['US', 'IN', ...]

  // Find first country that matches the calling code
  return countries
    .find((country) => getCountryCallingCode(country) === String(code))
    ?.toLocaleLowerCase();
}

export function getTotalFromArray(
  values: (string | number)[] | undefined | null
): number {
  if (!Array.isArray(values) || values.length === 0) return 0;

  return values.reduce((total: any, val) => {
    const num = Number(val);
    return isNaN(num) ? total : total + num;
  }, 0);
}
export function formatDate(input: string | null | undefined): string {
  try {
    if (!input || typeof input !== "string") return "";

    const date = new Date(input);

    // Check for invalid date
    if (isNaN(date.getTime())) return "";

    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  } catch {
    return "";
  }
}

export function formatDateToDayMonthYear(
  dateString: string | null | undefined
): string {
  if (!dateString || typeof dateString !== "string") return "";

  const date = new Date(dateString);

  // Check if date is valid
  if (isNaN(date.getTime())) return "";

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  const formatted = date.toLocaleDateString("en-GB", options); // e.g., "01 May 1992"
  const [day, monthShort, year] = formatted.split(" ");

  const monthMap: Record<string, string> = {
    Jan: "January",
    Feb: "February",
    Mar: "March",
    Apr: "April",
    May: "May",
    Jun: "June",
    Jul: "July",
    Aug: "August",
    Sep: "September",
    Oct: "October",
    Nov: "November",
    Dec: "December",
  };

  const fullMonth = monthMap[monthShort];
  if (!fullMonth) return "";

  return `${day} ${fullMonth} ${year}`;
}

export function formatPhoneNumberWithParens(phone: string): string {
  try {
    const parsed = parsePhoneNumberFromString(phone);
    if (!parsed || !parsed.isValid()) return phone;

    // For US/Canada, add parentheses using national format + country code
    if (parsed.country === "US" || parsed.country === "CA") {
      return `+${parsed.countryCallingCode} ${parsed.formatNational()}`;
    }

    // For others, keep international format without parentheses
    return parsed.formatInternational();
  } catch {
    return phone;
  }
}

export const dataURLtoFile = (dataUrl: any, filename: any) => {
  const arr = dataUrl.split(",");
  const mime = arr[0].match(/:(.*?);/)?.[1] || "image/png";
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
};
type DataItem = {
  code: string;
  [key: string]: any;
};

export function filterByMatchingCodes(
  dataArray: DataItem[] | null | undefined,
  codeArray: string[] | null | undefined
): DataItem[] {
  if (!Array.isArray(dataArray) || !Array.isArray(codeArray)) {
    return [];
  }

  // Use a Set for O(1) lookup if the codeArray is large
  const codeSet = new Set(codeArray.filter((code) => typeof code === "string"));

  return dataArray.filter(
    (item) =>
      item &&
      typeof item === "object" &&
      typeof item.code === "string" &&
      codeSet.has(item.code)
  );
}
