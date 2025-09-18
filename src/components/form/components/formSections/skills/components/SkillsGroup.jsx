import React, { useContext } from 'react';
import { ResumeContext } from '../../../../../builder';
import { addSkill } from '../utlis/addSkill';
import SkillLine from './SkillLine';
import AddBtn from '../../../../shared/button/AddBtn';

const SkillsGroup = ({ title }) => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const skillType = resumeData.skills.find(
    (skillType) => skillType.title === title,
  );

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">{title}</h2>
      {skillType.skills.map((skill, index) => (
        <SkillLine key={index} skill={skill} title={title} index={index} />
      ))}
      {/* Add new skill button */}
      <AddBtn onClick={() => addSkill(title, setResumeData)} />
    </div>
  );
};

export default SkillsGroup;
