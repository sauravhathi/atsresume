export const removeLanguage = (resumeData, setResumeData, index) => {
  // TODO replace hardcoded variables
  const newSkills = [...resumeData["languages"]].filter((_, idx) => idx !== index);
  setResumeData({...resumeData, ["languages"]: newSkills});
};
