import React, { useContext } from 'react';
import { ResumeContext } from '../../../../../builder';
import WorkExperience from '../components/WorkExperience';
import { addWorkExperience } from '../units/addWorkExperience';
import AddBtn from '../../../../shared/button/AddBtn';

const WorkExperiences = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">Work Experience</h2>
      {resumeData.workExperience.map((workExperience, index) => (
        <WorkExperience
          key={index}
          workExperience={workExperience}
          index={index}
        />
      ))}
      <AddBtn
        onClick={() => {
          addWorkExperience(resumeData, setResumeData);
        }}
      />
    </div>
  );
};

export default WorkExperiences;
