import React from "react";

const Skills = ({ title, skills }) => {
  const filteredSkills = skills.filter(skill => skill && skill.trim() !== '');

  return (
    filteredSkills.length > 0 && (
      <>
        <h2 className="section-title mb-1 border-b-2 border-gray-300">
          {title}
        </h2>
        <p className="sub-content">{filteredSkills.join(", ")}</p>
      </>
    )
  );
};

export default Skills;