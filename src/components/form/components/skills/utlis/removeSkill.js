export const removeSkill = (title, setResumeData, index) => {
  setResumeData((prevData) => {
    const skillType = prevData.skills.find(
      (skillType) => skillType.title === title
    );

    if (!skillType) return prevData;

    const newSkills = [...skillType.skills].filter((_, idx) => idx !== index)

    const updatedSkills = prevData.skills.map((skill) =>
      skill.title === title ? {...skill, skills: newSkills} : skill
    );

    return {
      ...prevData,
      skills: updatedSkills,
    };
  });
};
