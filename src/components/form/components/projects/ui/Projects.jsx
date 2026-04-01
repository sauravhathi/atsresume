import React, {useContext} from "react";
import {ResumeContext} from "../../../../builder";
import {addProject} from "../utils/addProject";
import Project from "../components/Project";
import {MdAddCircle} from "react-icons/md";
import i18n from "../../../../../translations";

const Projects = () => {
  const {resumeData, setResumeData} = useContext(ResumeContext);

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">{i18n.t("projects.title")}</h2>
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
              aria-label="Add"
              className="p-2 w-[37px] text-white bg-fuchsia-700 rounded text-xl">
        <MdAddCircle/>
      </button>
    </div>
  );
};

export default Projects;
