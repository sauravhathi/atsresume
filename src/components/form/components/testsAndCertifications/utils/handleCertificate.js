export const handleCertificate = (resumeData, setResumeData, e, index) => {
  const newSkills = [...resumeData["certifications"]];
  newSkills[index] = e.target.value;
  setResumeData({ ...resumeData, ["certifications"]: newSkills });
};
