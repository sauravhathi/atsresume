import React, {useContext} from 'react';
import {ResumeContext} from "../../../../builder";
import SkillsGroup from "../components/SkillsGroup";

const Skills = () => {
  const {resumeData, setResumeData} = useContext(ResumeContext);

  return (
    <div>
      {
        resumeData.skills.map((skill, index) => (
          <SkillsGroup
            title={skill.title}
            key={index}
          />
        ))
      }
    </div>
  );
};

export default Skills;
