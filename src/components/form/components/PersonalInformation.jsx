"use client";

import React, {useContext} from "react";
import { ResumeContext } from "../../builder";
import { useTranslations } from "../../../i18n/I18nProvider";

const PersonalInformation = ({}) => {
  const {resumeData, setResumeData, handleProfilePicture, handleChange} =
    useContext(ResumeContext);
  const t = useTranslations();

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">{t("personalInformation.title")}</h2>
      <div className="grid-4">
        <input
          type="text"
          placeholder={t("personalInformation.fullName")}
          name="name"
          className="pi"
          value={resumeData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder={t("personalInformation.jobTitle")}
          name="position"
          className="pi"
          value={resumeData.position}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder={t("personalInformation.contactInformation")}
          name="contactInformation"
          className="pi"
          value={resumeData.contactInformation}
          onChange={handleChange}
          minLength="10"
          maxLength="15"
        />
        <input
          type="email"
          placeholder={t("personalInformation.email")}
          name="email"
          className="pi"
          value={resumeData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder={t("personalInformation.address")}
          name="address"
          className="pi"
          value={resumeData.address}
          onChange={handleChange}
        />
        <input
          type="file"
          name="profileImage"
          accept="image/*"
          className="profileInput"
          onChange={handleProfilePicture}
          placeholder={t("personalInformation.profilePicture")}
        />
      </div>
    </div>
  );
};

export default PersonalInformation;
