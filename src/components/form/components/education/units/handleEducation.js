export const handleEducation = (resumeData, setResumeData, e, index) => {
  const newEducation = [...resumeData.education];
  newEducation[index][e.target.name] = e.target.value;
  setResumeData({...resumeData, education: newEducation});
};
