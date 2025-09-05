export const removeWorkExperience = (resumeData, setResumeData, index) => {
  const newWorkExperience = [...resumeData.workExperience].filter((_, idx) => idx !== index);
  setResumeData({...resumeData, workExperience: newWorkExperience});
};
