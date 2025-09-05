import FormButton from "../../FormButton";
import React, {useContext} from "react";
import {ResumeContext} from "../../../../builder";
import {addProject} from "../utils/addProject";
import {removeProject} from "../utils/removeProject";
import Project from "../components/Project";

const Projects = () => {
  const {resumeData, setResumeData} = useContext(ResumeContext);

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">Projects</h2>
      {resumeData.projects.map((project, index) => (
        <Project
          key={index}
          project={project}
          index={index}
        />
      ))}
      <FormButton
        size={resumeData.projects.length}
        add={() => {
          addProject(resumeData, setResumeData)
        }}
        remove={() => {
          // TODO add an index
          removeProject(resumeData, setResumeData)
        }}
      />
    </div>
  );
};

export default Projects;
