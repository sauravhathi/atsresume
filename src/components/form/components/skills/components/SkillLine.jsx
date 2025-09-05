import React, {useContext} from 'react';
import {handleSkill} from "../utlis/handleSkill";
import {ResumeContext} from "../../../../builder";
import { BsTrash3 } from 'react-icons/bs';
import {removeSkill} from "../utlis/removeSkill";

;

const SkillLine = ({skill, title, index}) => {
  const {resumeData, setResumeData} = useContext(ResumeContext);

  return (
    <div
      className="flex gap-5 items-center"
    >
      <input
        type="text"
        placeholder={title}
        name={title}
        className="w-full mb-0 other-input"
        value={skill}
        onChange={(e) => handleSkill(e, index, title, resumeData, setResumeData)}
      />
      <button type="button" onClick={() => {
        console.log("remove", title, index)
        removeSkill(title, setResumeData, index)
      }}
              aria-label="Remove"
              className="p-2 text-white bg-fuchsia-700 rounded text-xl">
        <BsTrash3 />
      </button>
    </div>
  );
};

export default SkillLine;
