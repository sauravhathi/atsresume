"use client";

import React, {useContext} from 'react';
import {handleWorkExperience} from "../units/handleWorkExperience";
import {ResumeContext} from "../../../../builder";
import {BsTrash3} from "react-icons/bs";
import {removeWorkExperience} from "../units/removeResumeExperience";
import { useTranslations } from "../../../../../i18n/I18nProvider";

const WorkExperience = ({workExperience, index}) => {
  const {resumeData, setResumeData,} = useContext(ResumeContext);
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
          placeholder={t("workExperience.company")}
          name="company"
          className="w-full other-input"
          value={workExperience.company}
          onChange={(e) =>
            handleWorkExperience(resumeData, setResumeData, e, index)
          }
        />
        <input
          type="text"
          placeholder={t("workExperience.jobTitle")}
          name="position"
          className="w-full other-input"
          value={workExperience.position}
          onChange={(e) =>
            handleWorkExperience(resumeData, setResumeData, e, index)
          }
        />
        <textarea
          type="text"
          placeholder={t("workExperience.description")}
          name="description"
          className="w-full other-input h-32"
          value={workExperience.description}
          maxLength="250"
          onChange={(e) =>
            handleWorkExperience(resumeData, setResumeData, e, index)
          }
        />
        <textarea
          type="text"
          placeholder={t("workExperience.keyAchievements")}
          name="keyAchievements"
          className="w-full other-input h-40"
          value={workExperience.keyAchievements}
          onChange={(e) =>
            handleWorkExperience(resumeData, setResumeData, e, index)
          }
        />
        <div
          className={"w-fill flex-wrap-gap-2"}
        >
          <input
            type="date"
            placeholder={t("workExperience.startYear")}
            name="startYear"
            className="flex-1 m-0 other-input"
            value={workExperience.startYear}
            onChange={(e) =>
              handleWorkExperience(resumeData, setResumeData, e, index)
            }
          />
          <input
            type="date"
            placeholder={t("workExperience.endYear")}
            name="endYear"
            className="flex-1 m-0 other-input"
            value={workExperience.endYear}
            onChange={(e) =>
              handleWorkExperience(resumeData, setResumeData, e, index)
            }
          />
        </div>
      </div>
      <button
        type="button"
        onClick={() => {
          removeWorkExperience(resumeData, setResumeData, index)
        }}
        aria-label={t("common.remove")}
        className="p-2 h-fit text-white bg-fuchsia-700 rounded text-xl"
      >
        <BsTrash3/>
      </button>
    </div>
  );
};

export default WorkExperience;
