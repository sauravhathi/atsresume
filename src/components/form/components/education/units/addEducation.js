export const addEducation = (resumeData, setResumeData) => {
  setResumeData({
    ...resumeData,
    education: [
      ...resumeData.education,
      {school: "", degree: "", startYear: "", endYear: ""},
    ],
  });
};
