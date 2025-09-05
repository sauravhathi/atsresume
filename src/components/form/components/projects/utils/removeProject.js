export const removeProject = (resumeData, setResumeData, index) => {
  const newProjects = [...resumeData.projects];
  newProjects[index] = newProjects[newProjects.length - 1];
  newProjects.pop();
  setResumeData({...resumeData, projects: newProjects});
};
