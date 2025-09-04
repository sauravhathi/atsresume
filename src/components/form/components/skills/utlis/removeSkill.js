export const removeSkill = (title, setResumeData) => {
  setResumeData((prevData) => {
    const skillType = prevData.skills.find(
      (skillType) => skillType.title === title
    );

    if (!skillType) return prevData;

    const newSkills = [...skillType.skills];
    newSkills.pop();

    const updatedSkills = prevData.skills.map((skill) =>
      skill.title === title ? { ...skill, skills: newSkills } : skill
    );

    return {
      ...prevData,
      skills: updatedSkills,
    };
  });
};
