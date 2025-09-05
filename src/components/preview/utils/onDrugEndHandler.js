export const onDragEndHandler = (result, resumeData, setResumeData) => {
  console.log("handler")
    const { destination, source } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
        return;

    if (source.droppableId === "work-experience") {
        const newWorkExperience = [...resumeData.workExperience];
        const [removed] = newWorkExperience.splice(source.index, 1);
        newWorkExperience.splice(destination.index, 0, removed);
        setResumeData({ ...resumeData, workExperience: newWorkExperience });
    }

    if (source.droppableId.includes("WORK_EXPERIENCE_KEY_ACHIEVEMENT")) {
        const newWorkExperience = [...resumeData.workExperience];
        const workExperienceIndex = parseInt(source.droppableId.split("-")[1]);
        const keyAchievements =
          newWorkExperience[workExperienceIndex].keyAchievements.split("\n");
        const [removed] = keyAchievements.splice(source.index, 1);
        keyAchievements.splice(destination.index, 0, removed);
        newWorkExperience[workExperienceIndex].keyAchievements =
          keyAchievements.join("\n");
        setResumeData({ ...resumeData, workExperience: newWorkExperience });
    }

    if (source.droppableId === "skills") {
        const newSkills = [...resumeData.skills];
        const [removed] = newSkills.splice(source.index, 1);
        newSkills.splice(destination.index, 0, removed);
        setResumeData({ ...resumeData, skills: newSkills });
    }

    if (source.droppableId.includes("projects")) {
        const newProjects = [...resumeData.projects];
        const [removed] = newProjects.splice(source.index, 1);
        newProjects.splice(destination.index, 0, removed);
        setResumeData({ ...resumeData, projects: newProjects });
    }

    if (source.droppableId.includes("PROJECTS_KEY_ACHIEVEMENT")) {
        const newProjects = [...resumeData.projects];
        const projectIndex = parseInt(source.droppableId.split("-")[1]);
        const keyAchievements =
          newProjects[projectIndex].keyAchievements.split("\n");
        const [removed] = keyAchievements.splice(source.index, 1);
        keyAchievements.splice(destination.index, 0, removed);
        newProjects[projectIndex].keyAchievements = keyAchievements.join("\n");
        setResumeData({ ...resumeData, projects: newProjects });
    }
};
