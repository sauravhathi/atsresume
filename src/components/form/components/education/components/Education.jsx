import React, {useContext} from 'react';
import {handleEducation} from "../units/handleEducation";
import {ResumeContext} from "../../../../builder";
import {BsTrash3} from "react-icons/bs";
import {removeEducation} from "../units/removeEducation";

const Education = ({education, index}) => {
  const {resumeData, setResumeData} = useContext(ResumeContext);

  return (
    <div
      className="flex w-fill gap-5 items-top"
    >
      <div
        className="flex-1"
      >
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
      <button
        type="button"
        onClick={() => {
          removeEducation(resumeData, setResumeData, index)
        }}
        aria-label="Remove"
        className="p-2 h-fit text-white bg-fuchsia-700 rounded text-xl"
      >
        <BsTrash3/>
      </button>
    </div>
  );
};

export default Education;
