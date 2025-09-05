import React, {useContext} from 'react';
import {handleEducation} from "../units/handleEducation";
import {ResumeContext} from "../../../../builder";

const Education = ({education, index}) => {
  const {resumeData, setResumeData} = useContext(ResumeContext);

  return (
    <div className="f-col">
      <input
        type="text"
        placeholder="School"
        name="school"
        className="w-full other-input"
        value={education.school}
        onChange={(e) =>
          handleEducation(resumeData, setResumeData, e, index)
        }
      />
      <input
        type="text"
        placeholder="Degree"
        name="degree"
        className="w-full other-input"
        value={education.degree}
        onChange={(e) =>
          handleEducation(resumeData, setResumeData, e, index)
        }
      />
      <div className="flex-wrap-gap-2">
        <input
          type="date"
          placeholder="Start Year"
          name="startYear"
          className="flex-1 m-0 other-input"
          value={education.startYear}
          onChange={(e) =>
            handleEducation(resumeData, setResumeData, e, index)
          }
        />
        <input
          type="date"
          placeholder="End Year"
          name="endYear"
          className="flex-1 m-0 other-input"
          value={education.endYear}
          onChange={(e) =>
            handleEducation(resumeData, setResumeData, e, index)
          }
        />
      </div>
    </div>
  );
};

export default Education;
