"use client";

import React, {useContext} from 'react';
import {handleProject} from "../utils/handleProject";
import {ResumeContext} from "../../../../builder";
import {BsTrash3} from "react-icons/bs";
import {removeProject} from "../utils/removeProject";
import { useTranslations } from "../../../../../i18n/I18nProvider";

const Project = ({project, index}) => {
  const {resumeData, setResumeData} = useContext(ResumeContext);
  const { t } = useTranslations();

  return (
    <div
      className="flex w-fill gap-5 items-top"
    >
      <div
        className="flex-1"
      >
        {/* Project name */}
        <input
          type="text"
          placeholder={t("projects.projectName")}
          name="name"
          className="w-full other-input"
          value={project.name}
          onChange={(e) => handleProject(resumeData, setResumeData, e, index)}
        />
        {/* Link */}
        <input
          type="text"
          placeholder={t("projects.link")}
          name="link"
          className="w-full other-input"
          value={project.link}
          onChange={(e) => handleProject(resumeData, setResumeData, e, index)}
        />
        {/* Description */}
        <textarea
          type="text"
          placeholder={t("projects.description")}
          name="description"
          className="w-full other-input h-32"
          value={project.description}
          maxLength="250"
          onChange={(e) => handleProject(resumeData, setResumeData, e, index)}
        />
        {/* Key achievements */}
        <textarea
          type="text"
          placeholder={t("projects.keyAchievements")}
          name="keyAchievements"
          className="w-full other-input h-40"
          value={project.keyAchievements}
          onChange={(e) => handleProject(resumeData, setResumeData, e, index)}
        />
        {/* Start date */}
        <div className="flex-wrap-gap-2">
          <input
            type="date"
            placeholder={t("projects.startYear")}
            name="startYear"
            className="flex-1 m-0 other-input"
            value={project.startYear}
            onChange={(e) => handleProject(resumeData, setResumeData, e, index)}
          />
          {/* End data */}
          <input
            type="date"
            placeholder={t("projects.endYear")}
            name="endYear"
            className="flex-1 m-0 other-input"
            value={project.endYear}
            onChange={(e) => handleProject(resumeData, setResumeData, e, index)}
          />
        </div>
      </div>
      <button
        type="button"
        onClick={() => {
          removeProject(resumeData, setResumeData, index)
        }}
        aria-label={t("common.remove")}
        className="p-2 h-fit text-white bg-fuchsia-700 rounded text-xl"
      >
        <BsTrash3/>
      </button>
    </div>
  );
};

export default Project;
