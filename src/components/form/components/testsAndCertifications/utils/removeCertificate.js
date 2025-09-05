export const removeCertificate = (resumeData, setResumeData, index) => {
  const newLanguages = [...resumeData["certifications"]].filter((_, idx) => idx !== index);
  setResumeData({...resumeData, ["certifications"]: newLanguages});
};
