"use client";

import React, {useContext} from "react";
import {ResumeContext} from "../../../../builder";
import {addProject} from "../utils/addProject";
import Project from "../components/Project";
import {MdAddCircle} from "react-icons/md";
import { useTranslations } from "../../../../../i18n/I18nProvider";

const Projects = () => {
  const {resumeData, setResumeData} = useContext(ResumeContext);
  const t = useTranslations();

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">{t("projects.title")}</h2>
      {resumeData.projects.map((project, index) => (
        <Project
          key={index}
          project={project}
          index={index}
        />
      ))}
      <button type="button"
              onClick={() => {
                addProject(resumeData, setResumeData)
              }}
              aria-label={t("common.add")}
              className="p-2 w-[37px] text-white bg-fuchsia-700 rounded text-xl">
        <MdAddCircle/>
      </button>
    </div>
  );
};

export default Projects;
