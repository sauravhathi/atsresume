export const removeEducation = (resumeData, setResumeData, index) => {
  const newEducation = [...resumeData.education];
  newEducation[index] = newEducation[newEducation.length - 1];
  newEducation.pop();
  setResumeData({...resumeData, education: newEducation});
};
