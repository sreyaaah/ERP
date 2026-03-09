export const EUROPE_CURRENCIES = [
  { name: "Euro", code: "EUR", symbol: "€" },
  { name: "Pound Sterling", code: "GBP", symbol: "£" },
  { name: "Swiss Franc", code: "CHF", symbol: "CHF" },
  { name: "Norwegian Krone", code: "NOK", symbol: "kr" },
  { name: "Swedish Krona", code: "SEK", symbol: "kr" },
  { name: "Danish Krone", code: "DKK", symbol: "kr" },
  { name: "Polish Złoty", code: "PLN", symbol: "zł" },
  { name: "Czech Koruna", code: "CZK", symbol: "Kč" },
];
export const AMERICA_CURRENCIES = [
  { name: "US Dollar", code: "USD", symbol: "$" },
  { name: "Canadian Dollar", code: "CAD", symbol: "$" },
  { name: "Mexican Peso", code: "MXN", symbol: "$" },
  { name: "Brazilian Real", code: "BRL", symbol: "R$" },
  { name: "Argentine Peso", code: "ARS", symbol: "$" },
];
export const MIDDLE_EAST_CURRENCIES = [
  { name: "UAE Dirham", code: "AED", symbol: "د.إ" },
  { name: "Saudi Riyal", code: "SAR", symbol: "﷼" },
  { name: "Qatari Riyal", code: "QAR", symbol: "﷼" },
  { name: "Kuwaiti Dinar", code: "KWD", symbol: "KD" },
];
export const OCEANIA_CURRENCIES = [
  { name: "Australian Dollar", code: "AUD", symbol: "$" },
  { name: "New Zealand Dollar", code: "NZD", symbol: "$" },
];
export const INDIA_SOUTH_ASIA_CURRENCIES = [
  { name: "Indian Rupee", code: "INR", symbol: "₹" },
  { name: "Sri Lankan Rupee", code: "LKR", symbol: "Rs" },
  { name: "Bangladeshi Taka", code: "BDT", symbol: "৳" },
  { name: "Pakistani Rupee", code: "PKR", symbol: "₨" },
];
const OTHER_EUROPE = EUROPE_CURRENCIES.filter(c => c.code !== "EUR");
const OTHER_AMERICA = AMERICA_CURRENCIES.filter(c => c.code !== "USD");
const OTHER_OCEANIA = OCEANIA_CURRENCIES.filter(c => c.code !== "AUD");
const OTHER_INDIA = INDIA_SOUTH_ASIA_CURRENCIES.filter(c => c.code !== "INR");

export const ALL_SELECTED_CURRENCIES = [
  ...INDIA_SOUTH_ASIA_CURRENCIES.filter(c => c.code === "INR"),
  ...AMERICA_CURRENCIES.filter(c => c.code === "USD"),
  ...OCEANIA_CURRENCIES.filter(c => c.code === "AUD"),
  ...EUROPE_CURRENCIES.filter(c => c.code === "EUR"),
  ...MIDDLE_EAST_CURRENCIES,
  ...OTHER_INDIA,
  ...OTHER_AMERICA,
  ...OTHER_OCEANIA,
  ...OTHER_EUROPE,
];
