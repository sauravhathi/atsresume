export const addWorkExperience = (resumeData, setResumeData) => {
  setResumeData({
    ...resumeData,
    workExperience: [
      ...resumeData.workExperience,
      {
        company: "",
        position: "",
        description: "",
        keyAchievements: "",
        startYear: "",
        endYear: "",
      },
    ],
  });
};
