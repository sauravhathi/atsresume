export const removeEducation = (resumeData, setResumeData, index) => {
  const newEducation = [...resumeData.education].filter((_, idx) => idx !== index);
  setResumeData({...resumeData, education: newEducation});
};
