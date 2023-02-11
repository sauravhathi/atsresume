import FormButton from "./FormButton"

const Projects = ({ resumeData, handleProjects, addProjects, removeProjects }) => {
    return (
      <div className="flex-col-gap-2">
        <h2 className="input-title">Projects</h2>
        {resumeData.projects.map((project, index) => (
          <div key={index} className="f-col">
            <input
              type="text"
              placeholder="Project Name"
              name="name"
              className="w-full other-input"
              value={project.name}
              onChange={(e) => handleProjects(e, index)} />
            <input
              type="text"
              placeholder="Link"
              name="link"
              className="w-full other-input"
              value={project.link}
              onChange={(e) => handleProjects(e, index)} />
            <textarea
              type="text"
              placeholder="Description"
              name="description"
              className="w-full other-input h-32"
              value={project.description}
              maxLength="250"
              onChange={(e) => handleProjects(e, index)} />
            <textarea
              type="text"
              placeholder="Key Achievements"
              name="keyAchievements"
              className="w-full other-input h-40"
              value={project.keyAchievements}
              onChange={(e) => handleProjects(e, index)} />
            <div className="flex-wrap-gap-2">
              <input
                type="date"
                placeholder="Start Year"
                name="startYear"
                className="other-input"
                value={project.startYear}
                onChange={(e) => handleProjects(e, index)} />
              <input
                type="date"
                placeholder="End Year"
                name="endYear"
                className="other-input"
                value={project.endYear}
                onChange={(e) => handleProjects(e, index)} />
            </div>
          </div>
        ))}
        <FormButton size={resumeData.projects.length} add={addProjects} remove={removeProjects} />
      </div>
    )
  }

export default Projects;