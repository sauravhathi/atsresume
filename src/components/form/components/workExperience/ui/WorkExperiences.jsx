import FormButton from "./../../FormButton";
import React, {useContext} from "react";
import {ResumeContext} from "../../../../builder";
import {addWorkExperience} from "../units/addWorkExperience";
import {removeWorkExperience} from "../units/removeResumeExperience";
import WorkExperience from "../components/WorkExperience";

const WorkExperiences = () => {
  const {
    resumeData,
    setResumeData,
  } = useContext(ResumeContext);

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
      <FormButton
        size={resumeData.workExperience.length}
        add={() => {
          addWorkExperience(resumeData, setResumeData)
        }}
        remove={() => {
          // TODO add index
          removeWorkExperience(resumeData, setResumeData)
        }}
      />
    </div>
  );
};

export default WorkExperiences;
