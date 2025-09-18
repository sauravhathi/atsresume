import React, { useContext } from 'react';
import { handleSkill } from '../utlis/handleSkill';
import { ResumeContext } from '../../../../../builder';
import { removeSkill } from '../utlis/removeSkill';
import DeleteBtn from '../../../../shared/button/DeleteBtn';

const SkillLine = ({ skill, title, index }) => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  return (
    <div className="flex gap-5 items-center">
      <input
        type="text"
        placeholder={title}
        name={title}
        className="w-full mb-0 other-input"
        value={skill}
        onChange={(e) =>
          handleSkill(e, index, title, resumeData, setResumeData)
        }
      />
      <DeleteBtn
        onClick={() => {
          console.log('remove', title, index);
          removeSkill(title, setResumeData, index);
        }}
      />
    </div>
  );
};

export default SkillLine;
