import FormButton from "./FormButton";

const Education = ({ resumeData, handleEducation, addEducation, removeEducation }) => {
    return (
      <div className="flex-col-gap-2">
        <h2 className="input-title">Education</h2>
        {resumeData.education.map((education, index) => (
          <div key={index} className="f-col">
            <input
              type="text"
              placeholder="School"
              name="school"
              className="w-full other-input"
              value={education.school}
              onChange={(e) => handleEducation(e, index)} />
            <input
              type="text"
              placeholder="Degree"
              name="degree"
              className="w-full other-input"
              value={education.degree}
              onChange={(e) => handleEducation(e, index)} />
            <div className="flex-wrap-gap-2">
              <input
                type="date"
                placeholder="Start Year"
                name="startYear"
                className="other-input"
                value={education.startYear}
                onChange={(e) => handleEducation(e, index)} />
              <input
                type="date"
                placeholder="End Year"
                name="endYear"
                className="other-input"
                value={education.endYear}
                onChange={(e) => handleEducation(e, index)} />
            </div>
          </div>
        ))}
        <FormButton size={resumeData.education.length} add={addEducation} remove={removeEducation} />
      </div>
    )
  }

export default Education;