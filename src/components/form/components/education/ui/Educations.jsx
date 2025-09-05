import FormButton from "./../../FormButton";
import React, {useContext} from "react";
import {ResumeContext} from "../../../../builder";
import {addEducation} from "../units/addEducation";
import {removeEducation} from "../units/removeEducation";
import Education from "../components/Education";

const Educations = () => {
  const {resumeData, setResumeData} = useContext(ResumeContext);

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">Education</h2>
      {resumeData.education.map((education, index) => (
        <Education
          key={index}
          education={education}
          index={index}
        />
      ))}
      <FormButton
        size={resumeData.education.length}
        add={() => {
          addEducation(resumeData, setResumeData)
        }}
        remove={() => {
          // TODO add the index
          removeEducation(resumeData, setResumeData)
        }}
      />
    </div>
  )
}

export default Educations;
