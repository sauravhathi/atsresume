import { getLanguage } from "language-flag-colors";

// Fallback locales for client-side when fs is not available
const fallbackLocales = ["en", "fr"];

// Default locale is always 'en'
export const defaultLocale = "en";
export const locales = fallbackLocales;

// Generate localeEmojis dynamically using language-flag-colors
export const localeEmojis: Record<string, string> = locales.reduce((acc, locale) => {
  const lang = getLanguage(locale);
  acc[locale] = lang?.flag?.emoji || "";
  return acc;
}, {});