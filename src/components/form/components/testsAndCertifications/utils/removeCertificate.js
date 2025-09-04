export const removeCertificate = (resumeData, setResumeData) => {
  const newSkills = [...resumeData["certifications"]];
  newSkills.splice(-1, 1);
  setResumeData({...resumeData, ["certifications"]: newSkills});
};
