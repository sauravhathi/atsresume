"use client";

import React, {useContext} from 'react';
import {handleEducation} from "../units/handleEducation";
import {ResumeContext} from "../../../../builder";
import {BsTrash3} from "react-icons/bs";
import {removeEducation} from "../units/removeEducation";
import { useTranslations } from "../../../../../i18n/I18nProvider";

const Education = ({education, index}) => {
  const {resumeData, setResumeData} = useContext(ResumeContext);
  const t = useTranslations();

  return (
    <div
      className="flex w-fill gap-5 items-top"
    >
      <div
        className="flex-1"
      >
        <input
          type="text"
          placeholder={t("education.school")}
          name="school"
          className="w-full other-input"
          value={education.school}
          onChange={(e) =>
            handleEducation(resumeData, setResumeData, e, index)
          }
        />
        <input
          type="text"
          placeholder={t("education.degree")}
          name="degree"
          className="w-full other-input"
          value={education.degree}
          onChange={(e) =>
            handleEducation(resumeData, setResumeData, e, index)
          }
        />
        <div className="flex-wrap-gap-2">
          <input
            type="date"
            placeholder={t("education.startYear")}
            name="startYear"
            className="flex-1 m-0 other-input"
            value={education.startYear}
            onChange={(e) =>
              handleEducation(resumeData, setResumeData, e, index)
            }
          />
          <input
            type="date"
            placeholder={t("education.endYear")}
            name="endYear"
            className="flex-1 m-0 other-input"
            value={education.endYear}
            onChange={(e) =>
              handleEducation(resumeData, setResumeData, e, index)
            }
          />
        </div>
      </div>
      <button
        type="button"
        onClick={() => {
          removeEducation(resumeData, setResumeData, index)
        }}
        aria-label={t("common.remove")}
        className="p-2 h-fit text-white bg-fuchsia-700 rounded text-xl"
      >
        <BsTrash3/>
      </button>
    </div>
  );
};

export default Education;
