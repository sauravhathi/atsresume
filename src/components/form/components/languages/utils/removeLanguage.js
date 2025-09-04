export const removeLanguage = (resumeData, setResumeData, languageType) => {
  const newSkills = [...resumeData[languageType]];
  newSkills.splice(-1, 1);
  setResumeData({ ...resumeData, [languageType]: newSkills });
};
