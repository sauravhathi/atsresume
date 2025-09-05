export const handleWorkExperience = (resumeData, setResumeData, e, index) => {
  const newWorkExperience = [...resumeData.workExperience];
  newWorkExperience[index][e.target.name] = e.target.value;
  setResumeData({...resumeData, workExperience: newWorkExperience});
};
