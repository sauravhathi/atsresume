"use client";

import React, {useContext} from "react";
import {ResumeContext} from "../../../../builder";
import {addSocialMedia} from "../units/addSocialMedia";
import SocialMediaComponent from "../components/SocialMedia";
import {MdAddCircle} from "react-icons/md";
import { useTranslations } from "../../../../../i18n/I18nProvider";

const SocialMedias = () => {
  const {resumeData, setResumeData} = useContext(ResumeContext);
  const t = useTranslations();

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">{t("socialMedia.title")}</h2>
      {resumeData.socialMedia.map((socialMedia, index) => (
        <SocialMediaComponent
          key={index}
          socialMedia={socialMedia}
          index={index}
        />
      ))}
      <button type="button"
              onClick={() => {
                addSocialMedia(resumeData, setResumeData)
              }}
              aria-label={t("common.add")}
              className="p-2 w-[37px] text-white bg-fuchsia-700 rounded text-xl">
        <MdAddCircle/>
      </button>
    </div>
  );
};

export default SocialMedias;
