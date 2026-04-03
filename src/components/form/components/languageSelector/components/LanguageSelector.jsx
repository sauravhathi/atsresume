import LanguageOption from "../ui/LanguageOption";
import LanguageSelect from "../ui/LanguageSelect";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "../../../../../i18n/navigation";

const LanguageSelector = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("languageSelector");

  const locales = [
    { code: "en", emoji: "🇺🇸" },
    { code: "fr", emoji: "🇫🇷" },
  ];

  const handleLanguageChange = (e) => {
    router.replace(pathname, { locale: e.target.value });
  };

  return (
    <div className="flex flex-wrap gap-4 mb-2 justify-center items-center">
      <div className="inline-flex flex-row items-center gap-2">
        <LanguageSelect value={locale} onChange={handleLanguageChange}>
          {locales.map((loc) => (
            <LanguageOption key={loc.code} value={loc.code} emoji={loc.emoji} selected={loc.code === locale} />
          ))}
        </LanguageSelect>
      </div>

      {/* Display a message to warn that changing locale will replace resume data */}
      <p className="sub-content max-w-48 text-fuchsia-300 text-center">{t("warning")}</p>
    </div>
  );
};

export default LanguageSelector;
