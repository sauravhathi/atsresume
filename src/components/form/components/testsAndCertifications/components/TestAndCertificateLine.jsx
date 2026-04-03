"use client";

import React from 'react';
import {handleCertificate} from "../utils/handleCertificate";
import {BsTrash3} from "react-icons/bs";
import {removeCertificate} from "../utils/removeCertificate";
import { useTranslations } from "../../../../../i18n/I18nProvider";

const TestAndCertificateLine = ({resumeData, setResumeData, cert, index}) => {
  const t = useTranslations();

  return (
    <div
      className="flex gap-5 items-center"
    >
      <input
        type="text"
        placeholder={t("testsAndCertifications.testOrCertificate")}
        name={"Certificate"}
        className="w-full mb-0 other-input"
        value={cert}
        onChange={(e) => handleCertificate(resumeData, setResumeData, e, index)}
      />
      <button
        type="button"
        onClick={() => {
          removeCertificate(resumeData, setResumeData, index)
        }}
        aria-label={t("common.remove")}
        className="p-2 text-white bg-fuchsia-700 rounded text-xl"
      >
        <BsTrash3/>
      </button>
    </div>
  );
};

export default TestAndCertificateLine;
