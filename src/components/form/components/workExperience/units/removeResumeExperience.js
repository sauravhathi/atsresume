export const removeWorkExperience = (resumeData, setResumeData, index) => {
  const newWorkExperience = [...resumeData.workExperience];
  newWorkExperience[index] = newWorkExperience[newWorkExperience.length - 1];
  newWorkExperience.pop();
  setResumeData({...resumeData, workExperience: newWorkExperience});
};
