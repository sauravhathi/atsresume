export const handleLanguage = (resumeData, setResumeData, e, index, languageType) => {
  const newSkills = [...resumeData[languageType]];
  newSkills[index] = e.target.value;
  setResumeData({...resumeData, [languageType]: newSkills});
};
