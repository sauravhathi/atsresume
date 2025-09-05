import React, {useContext} from 'react';
import {handleWorkExperience} from "../units/handleWorkExperience";
import {ResumeContext} from "../../../../builder";

const WorkExperience = ({workExperience, index}) => {
  const {resumeData, setResumeData,} = useContext(ResumeContext);

  return (
    <div className="f-col">
      <input
        type="text"
        placeholder="Company"
        name="company"
        className="w-full other-input"
        value={workExperience.company}
        onChange={(e) =>
          handleWorkExperience(resumeData, setResumeData, e, index)
        }
      />
      <input
        type="text"
        placeholder="Job Title"
        name="position"
        className="w-full other-input"
        value={workExperience.position}
        onChange={(e) =>
          handleWorkExperience(resumeData, setResumeData, e, index)
        }
      />
      <textarea
        type="text"
        placeholder="Description"
        name="description"
        className="w-full other-input h-32"
        value={workExperience.description}
        maxLength="250"
        onChange={(e) =>
          handleWorkExperience(resumeData, setResumeData, e, index)
        }
      />
      <textarea
        type="text"
        placeholder="Key Achievements"
        name="keyAchievements"
        className="w-full other-input h-40"
        value={workExperience.keyAchievements}
        onChange={(e) =>
          handleWorkExperience(resumeData, setResumeData, e, index)
        }
      />
      <div className="flex-wrap-gap-2">
        <input
          type="date"
          placeholder="Start Year"
          name="startYear"
          className="other-input"
          value={workExperience.startYear}
          onChange={(e) =>
            handleWorkExperience(resumeData, setResumeData, e, index)
          }
        />
        <input
          type="date"
          placeholder="End Year"
          name="endYear"
          className="other-input"
          value={workExperience.endYear}
          onChange={(e) =>
            handleWorkExperience(resumeData, setResumeData, e, index)
          }
        />
      </div>
    </div>
  );
};

export default WorkExperience;
