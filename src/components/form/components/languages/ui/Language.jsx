import React, { useContext } from "react";
import {ResumeContext} from "../../../../builder";
import FormButton from "./../../FormButton";

const Language = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const skillType = "languages";
  const title = "Languages";
  const placeholder = "Language";

  const handleLanguage = (e, index, skillType) => {
    const newSkills = [...resumeData[skillType]];
    newSkills[index] = e.target.value;
    setResumeData({ ...resumeData, [skillType]: newSkills });
  };

  const addLanguage = () => {
    setResumeData({ ...resumeData, [skillType]: [...resumeData[skillType], ""] });
  };

  const removeLanguage = (index) => {
    const newSkills = [...resumeData[skillType]];
    newSkills.splice(-1, 1);
    setResumeData({ ...resumeData, [skillType]: newSkills });
  };

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">{title}</h2>
      {resumeData[skillType].map((skill, index) => (
        <div key={index} className="f-col">
          <input
            type="text"
            placeholder={placeholder}
            name="skill"
            className="w-full other-input"
            value={skill}
            onChange={(e) => handleLanguage(e, index, skillType)}
          />
        </div>
      ))}
      <FormButton size={resumeData[skillType].length} add={addLanguage} remove={removeLanguage} />
    </div>
  );
};

export default Language;
