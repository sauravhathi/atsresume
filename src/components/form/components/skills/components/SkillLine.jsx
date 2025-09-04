import React, {useContext} from 'react';
import {handleSkill} from "../utlis/handleSkill";
import {ResumeContext} from "../../../../builder";

const SkillLine = ({skill, title, index}) => {
  const {resumeData, setResumeData} = useContext(ResumeContext);

  return (
    <div className="f-col">
      <input
        type="text"
        placeholder={title}
        name={title}
        className="w-full other-input"
        value={skill}
        onChange={(e) => handleSkill(e, index, title, resumeData, setResumeData)}
      />
    </div>
  );
};

export default SkillLine;
