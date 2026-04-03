"use client";

import React, {useContext} from "react";
import {ResumeContext} from "../../../../builder";
import {addLanguage} from "../utils/addLanguage";
import LanguageLine from "../components/LanguageLine";
import {MdAddCircle} from "react-icons/md";
import { useTranslations } from "../../../../../i18n/I18nProvider";

const Languages = () => {
  const {resumeData, setResumeData} = useContext(ResumeContext);
  const t = useTranslations();

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">{t("languages.title")}</h2>
      {resumeData["languages"].map((lang, index) => (
        <LanguageLine
          key={index}
          lang={lang}
          resumeData={resumeData}
          setResumeData={setResumeData}
          index={index}
        />
      ))}
      <button type="button"
              onClick={() => {
                addLanguage(resumeData, setResumeData, "languages")
              }}
              aria-label={t("common.add")}
              className="p-2 w-[37px] text-white bg-fuchsia-700 rounded text-xl">
        <MdAddCircle/>
      </button>
    </div>
  );
};

export default Languages;
