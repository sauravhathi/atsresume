export const addProject = (resumeData, setResumeData) => {
  console.log("add project")
  const emptyProject = {
    title: "",
    link: "",
    description: "",
    keyAchievements: "",
    startYear: "",
    endYear: "",
  }

  const newProjects = resumeData.projects ? [...resumeData.projects] : []
  newProjects.push(emptyProject)

  setResumeData({
    ...resumeData,
    projects: newProjects,
  });
};
