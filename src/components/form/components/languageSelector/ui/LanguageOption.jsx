"use client";

import { useTranslations } from "../../../../../i18n/I18nProvider";

const LanguageOption = ({ value, emoji }) => {
  const t = useTranslations();

  return (
    <option value={value}>
      {emoji}
      {t(`languageSelector.${value}`)}
    </option>
  );
};

export default LanguageOption;
