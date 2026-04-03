"use client";

import { useLocale, useTranslations } from "next-intl";

const DateRange = ({ startYear, endYear, id }) => {
  const locale = useLocale();
  const t = useTranslations("date");

  if (!startYear) {
    return <p id={id} className="sub-content"></p>;
  }

  // Map locale to date locale format
  const dateLocaleMap = {
    en: "en-US",
    fr: "fr-FR",
  };
  const dateLocale = dateLocaleMap[locale] || "en-US";

  const start = new Date(startYear);
  const startStr = `${start.toLocaleString(dateLocale, { month: "short" })} ${start.getFullYear()}`;
  const end = new Date(endYear);
  let endStr = t("present");

  if (end != "Invalid Date") {
    endStr = `${end.toLocaleString(dateLocale, { month: "short" })} ${end.getFullYear()}`;
  }

  return (
    <p id={id} className="sub-content">
      {startStr} — {endStr}
    </p>
  );
};

export default DateRange;
