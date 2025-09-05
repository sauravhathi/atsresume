export const handleSkill = (e, index, title, resumeData, setResumeData) => {
  const newSkills = [
    ...resumeData.skills.find((skillType) => skillType.title === title).skills,
  ];

  newSkills[index] = e.target.value;

  setResumeData((prevData) => ({
    ...prevData,
    skills: prevData.skills.map((skill) =>
      skill.title === title ? { ...skill, skills: newSkills } : skill
    ),
  }));
};
