import React, { useContext } from 'react';
import { ResumeContext } from '../../../../../builder';
import { addProject } from '../utils/addProject';
import Project from '../components/Project';
import AddBtn from '../../../../shared/button/AddBtn';

const Projects = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">Projects</h2>
      {resumeData.projects.map((project, index) => (
        <Project key={index} project={project} index={index} />
      ))}
      <AddBtn
        onClick={() => {
          addProject(resumeData, setResumeData);
        }}
      />
    </div>
  );
};

export default Projects;
