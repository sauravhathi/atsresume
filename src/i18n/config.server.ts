import { getLanguage } from "language-flag-colors";
import fs from "fs";
import path from "path";

// Try to dynamically extract locales from translation files, fallback to hardcoded
let localeList: string[];

try {
  const messagesDir = path.join(process.cwd(), "src", "messages");
  const messageFiles = fs.readdirSync(messagesDir);
  localeList = messageFiles
    .filter((file) => file.endsWith(".json"))
    .map((file) => file.replace(".json", ""));
} catch {
  // Fallback for client-side or build-time when fs is not available
  localeList = ["en", "fr"];
}

export const defaultLocale = "en";
export const locales = localeList;

// Generate localeEmojis dynamically using language-flag-colors
export const localeEmojis: Record<string, string> = locales.reduce((acc, locale) => {
  const lang = getLanguage(locale);
  acc[locale] = lang?.flag?.emoji || "";
  return acc;
}, {});