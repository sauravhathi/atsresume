import React, { useContext } from "react";
import {ResumeContext} from "../../builder";

const Skills = ({ title, skills }) => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleTitleChange = (e) => {
    const newSkills = [...resumeData.skills];
    newSkills.find((skillType) => skillType.title === title).title = e.target.innerText;
    setResumeData({ ...resumeData, skills: newSkills });
  };

  return (
    skills && skills.length > 0 && (
      <>
        <h2 className="section-title mb-1 border-b-2 border-gray-300 editable" contentEditable suppressContentEditableWarning onBlur={handleTitleChange}>
          {title}
        </h2>
        <p className="sub-content">{skills.join(", ")}</p>
      </>
    )
  );
};

export default Skills;
