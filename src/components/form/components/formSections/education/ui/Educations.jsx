import React, { useContext } from 'react';
import { ResumeContext } from '../../../../../builder';
import { addEducation } from '../units/addEducation';
import Education from '../components/Education';
import AddBtn from '../../../../shared/button/AddBtn';

const Educations = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">Education</h2>
      {resumeData.education.map((education, index) => (
        <Education key={index} education={education} index={index} />
      ))}
      <AddBtn
        onClick={() => {
          addEducation(resumeData, setResumeData);
        }}
      />
    </div>
  );
};

export default Educations;
