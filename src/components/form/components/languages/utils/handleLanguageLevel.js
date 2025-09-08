export function handleLanguageLevel(resumeData, setResumeData, index, newLevel) {
  const newLanguages = [...resumeData.languages];
  newLanguages[index].level = newLevel;
  setResumeData({...resumeData, languages: newLanguages});
}
