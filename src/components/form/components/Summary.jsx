"use client";

import React, { useContext } from "react";
import {ResumeContext} from "../../builder";
import { useTranslations } from "../../../i18n/I18nProvider";

const Summary = () => {
  const { resumeData, setResumeData, handleChange } = useContext(ResumeContext);
  const t = useTranslations();

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">{t("summary.title")}</h2>
      <div className="grid-4">
        <textarea
          placeholder={t("summary.placeholder")}
          name="summary"
          className="w-full other-input h-40"
          value={resumeData.summary}
          onChange={handleChange}
          maxLength="500"
        />
      </div>
    </div>
  );
};

export default Summary;
