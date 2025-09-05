export const handleProject = (resumeData, setResumeData, e, index) => {
  const newProjects = [...resumeData.projects];
  newProjects[index][e.target.name] = e.target.value;
  setResumeData({...resumeData, projects: newProjects});
};
