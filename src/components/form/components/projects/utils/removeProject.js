export const removeProject = (resumeData, setResumeData, index) => {
  const newProjects = [...resumeData.projects].filter((_, idx) => idx !== index)
  setResumeData({...resumeData, projects: newProjects});
};
