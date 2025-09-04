import React, {useContext} from "react";
import {ResumeContext} from "../../../../builder";
import FormButton from "../../FormButton";
import {removeSkill} from "../utlis/removeSkill";
import {addSkill} from "../utlis/addSkill";
import {handleSkill} from "../utlis/handleSkill";

const SkillsGroup = ({title}) => {
  const {resumeData, setResumeData} = useContext(ResumeContext);

  const skillType = resumeData.skills.find(
    (skillType) => skillType.title === title
  );

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">{title}</h2>
      {skillType.skills.map((skill, index) => (
        <div key={index} className="f-col">
          <input
            type="text"
            placeholder={title}
            name={title}
            className="w-full other-input"
            value={skill}
            onChange={(e) => handleSkill(e, index, title, resumeData, setResumeData)}
          />
        </div>
      ))}
      <FormButton
        size={skillType.skills.length}
        add={() => addSkill(title, setResumeData)}
        remove={() => removeSkill(title, setResumeData)}
      />
    </div>
  );
};

export default SkillsGroup;
