import FormButton from "./FormButton"

const WorkExperience = ({ resumeData, handleWorkExperience, addWorkExperience, removeWorkExperience }) => {
    return (
      <div className="flex-col-gap-2">
        <h2 className="input-title">Work Experience</h2>
        {resumeData.workExperience.map((workExperience, index) => (
          <div key={index} className="f-col">
            <input
              type="text"
              placeholder="Company"
              name="company"
              className="w-full other-input"
              value={workExperience.company}
              onChange={(e) => handleWorkExperience(e, index)} />
            <input
              type="text"
              placeholder="Job Title"
              name="position"
              className="w-full other-input"
              value={workExperience.position}
              onChange={(e) => handleWorkExperience(e, index)} />
            <textarea
              type="text"
              placeholder="Description"
              name="description"
              className="w-full other-input h-32"
              value={workExperience.description}
              maxLength="250"
              onChange={(e) => handleWorkExperience(e, index)} />
            <textarea
              type="text"
              placeholder="Key Achievements"
              name="keyAchievements"
              className="w-full other-input h-40"
              value={workExperience.keyAchievements}
              onChange={(e) => handleWorkExperience(e, index)} />
            <div className="flex-wrap-gap-2">
              <input
                type="date"
                placeholder="Start Year"
                name="startYear"
                className="other-input"
                value={workExperience.startYear}
                onChange={(e) => handleWorkExperience(e, index)} />
              <input
                type="date"
                placeholder="End Year"
                name="endYear"
                className="other-input"
                value={workExperience.endYear}
                onChange={(e) => handleWorkExperience(e, index)} />
            </div>
          </div>
        ))}
        <FormButton size={resumeData.workExperience.length} add={addWorkExperience} remove={removeWorkExperience} />
      </div>
    )
  }

  export default WorkExperience