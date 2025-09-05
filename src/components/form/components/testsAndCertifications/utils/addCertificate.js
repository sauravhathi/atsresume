export const addCertificate = (resumeData, setResumeData) => {
  setResumeData({...resumeData, ["certifications"]: [...resumeData["certifications"], ""]});
};
