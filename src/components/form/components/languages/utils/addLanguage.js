export const addLanguage = (resumeData, setResumeData, languageType) => {
  setResumeData({ ...resumeData, [languageType]: [...resumeData[languageType], ""] });
};
