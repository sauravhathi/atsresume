import React, {useContext} from 'react';
import {ResumeContext} from "../../../builder";
import Skill from "./Skill";

const Skills = () => {
  const {resumeData, setResumeData} = useContext(ResumeContext);

  return (
    <div>
      {
        resumeData.skills.map((skill, index) => (
          <Skill
            title={skill.title}
            key={index}
          />
        ))
      }
    </div>
  );
};

export default Skills;
