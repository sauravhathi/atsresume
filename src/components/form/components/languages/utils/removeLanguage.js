export const removeLanguage = (resumeData, setResumeData, index) => {
  // TODO replace hardcoded variables
  // TODO change name of the newSkill variable to the newLanguage
  const newSkills = [...resumeData["languages"]].filter((_, idx) => idx !== index);
  setResumeData({...resumeData, ["languages"]: newSkills});
};
