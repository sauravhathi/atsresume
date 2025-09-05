export const addSkill = (title, setResumeData) => {
  setResumeData((prevData) => {
    const skillType = prevData.skills.find(
      (skillType) => skillType.title === title
    );
    const newSkills = [...skillType.skills, ""];
    const updatedSkills = prevData.skills.map((skill) =>
      skill.title === title ? { ...skill, skills: newSkills } : skill
    );
    return {
      ...prevData,
      skills: updatedSkills,
    };
  });
};
