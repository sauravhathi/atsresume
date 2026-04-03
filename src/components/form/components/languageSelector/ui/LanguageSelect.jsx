"use client";

import { useTranslations } from "../../../../../i18n/I18nProvider";

const LanguageSelect = ({ value, onChange, children }) => {
  const t = useTranslations();

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <div className="inline-flex flex-row items-center gap-2">
        <select
          value={value || "en"}
          onChange={onChange}
          className="p-2 text-white bg-fuchsia-700 rounded text-xl cursor-pointer"
          aria-label={t("languageSelector.aria-label")}
        >
          {children}
        </select>
      </div>
    </div>
  );
};

export default LanguageSelect;
