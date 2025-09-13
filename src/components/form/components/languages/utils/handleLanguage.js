export const handleLanguage = (resumeData, setResumeData, e, index) => {
  console.log(index, e.target.value);
  const newLanguages = [...resumeData.languages];
  newLanguages[index].name = e.target.value;
  setResumeData({ ...resumeData, languages: newLanguages });
};
