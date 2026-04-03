"use client";

import { NextIntlClientProvider, useTranslations } from "next-intl";
import { createContext, useState, useEffect, useCallback, useMemo } from "react";
import { locales, defaultLocale, localeEmojis } from "./config";

export const LOCALE_STORAGE_KEY = "atsresume-locale";
export { defaultLocale };

type LocaleInfo = { code: string; emoji: string };

type I18nContextType = {
  locale: string;
  setLocale: (locale: string) => void;
  availableLocales: LocaleInfo[];
  mounted: boolean;
};

export const I18nContext = createContext<I18nContextType>({
  locale: defaultLocale,
  setLocale: () => {},
  availableLocales: [],
  mounted: false,
});

export function I18nProvider({ children, messages, locale }) {
  const [mounted, setMounted] = useState(false);
  const [storedLocale, setStoredLocale] = useState(locale);

  const setLocale = useCallback((newLocale) => {
    // Avoid server component window issues
    if (typeof window !== "undefined") {
      localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
      const currentPath = window.location.pathname;
      const pathLocale = currentPath.split("/")[1];
      const newPath = pathLocale && locales.includes(pathLocale)
        ? currentPath.replace(`/${pathLocale}`, `/${newLocale}`)
        : `/${newLocale}${currentPath}`;
      window.location.href = newPath;
    }
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (locale && locale !== storedLocale) {
      setStoredLocale(locale);
      // Clear stale localStorage when navigating via URL
      if (typeof window !== "undefined") {
        localStorage.removeItem(LOCALE_STORAGE_KEY);
      }
    }
  }, [locale, storedLocale]);

  const availableLocales = useMemo<LocaleInfo[]>(
    () => locales.map((code) => ({ code, emoji: localeEmojis[code] || "" })),
    []
  );

  const contextValue = useMemo<I18nContextType>(
    () => ({
      locale: storedLocale,
      setLocale,
      availableLocales,
      mounted,
    }),
    [storedLocale, setLocale, availableLocales, mounted]
  );

  return (
    <NextIntlClientProvider messages={messages} locale={storedLocale} timeZone="America/New_York">
      <I18nContext.Provider value={contextValue}>
        {!mounted && <Loader />}
        {children}
      </I18nContext.Provider>
    </NextIntlClientProvider>
  );
}

function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-fuchsia-600 border-t-transparent" />
      </div>
    </div>
  );
}

// Re-export useTranslations from next-intl
export { useTranslations };
