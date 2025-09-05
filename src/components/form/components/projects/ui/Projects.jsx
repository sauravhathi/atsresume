import FormButton from "../../FormButton";
import React, {useContext} from "react";
import {ResumeContext} from "../../../../builder";
import {handleProject} from "../utils/handleProject";
import {addProject} from "../utils/addProject";
import {removeProject} from "../utils/removeProject";

const Projects = () => {
  const {resumeData, setResumeData} = useContext(ResumeContext);

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">Projects</h2>
      {resumeData.projects.map((project, index) => (
        <div key={index} className="f-col">
          <input
            type="text"
            placeholder="Project Name"
            name="name"
            className="w-full other-input"
            value={project.name}
            onChange={(e) => handleProject(resumeData, setResumeData, e, index)}
          />
          <input
            type="text"
            placeholder="Link"
            name="link"
            className="w-full other-input"
            value={project.link}
            onChange={(e) => handleProject(resumeData, setResumeData, e, index)}
          />
          <textarea
            type="text"
            placeholder="Description"
            name="description"
            className="w-full other-input h-32"
            value={project.description}
            maxLength="250"
            onChange={(e) => handleProject(resumeData, setResumeData, e, index)}
          />
          <textarea
            type="text"
            placeholder="Key Achievements"
            name="keyAchievements"
            className="w-full other-input h-40"
            value={project.keyAchievements}
            onChange={(e) => handleProject(resumeData, setResumeData, e, index)}
          />
          <div className="flex-wrap-gap-2">
            <input
              type="date"
              placeholder="Start Year"
              name="startYear"
              className="other-input"
              value={project.startYear}
              onChange={(e) => handleProject(resumeData, setResumeData, e, index)}
            />
            <input
              type="date"
              placeholder="End Year"
              name="endYear"
              className="other-input"
              value={project.endYear}
              onChange={(e) => handleProject(resumeData, setResumeData, e, index)}
            />
          </div>
        </div>
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
