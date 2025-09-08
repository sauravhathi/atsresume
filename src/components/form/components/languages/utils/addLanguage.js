export const addLanguage = (resumeData, setResumeData) => {
  setResumeData({
    ...resumeData, languages: [...resumeData.languages, {
      name: "",
      level: "Native"
    }]
  });
};
