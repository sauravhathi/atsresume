import FormButton from "./FormButton"

const Skill = ({ resumeData, skillType, title, placeholder, handleSkills, addSkill, removeSkill }) => {
    return (
      <div className="flex-col-gap-2">
        <h2 className="input-title">{title}</h2>
        {resumeData[skillType].map((skill, index) => (
          <div key={index} className="f-col">
            <input
              type="text"
              placeholder={placeholder}
              name="skill"
              className="w-full other-input"
              value={skill}
              onChange={(e) => handleSkills(e, index, skillType)} />
          </div>
        ))}
        <FormButton size={resumeData[skillType].length} add={addSkill} remove={removeSkill} />
      </div>
    )
  }

export default Skill;