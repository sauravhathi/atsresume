import React, {useContext} from "react";
import {ResumeContext} from "../../../../builder";
import WorkExperience from "../components/WorkExperience";
import {MdAddCircle} from "react-icons/md";
import {addWorkExperience} from "../units/addWorkExperience";

const WorkExperiences = () => {
  const {
    resumeData,
    setResumeData,
  } = useContext(ResumeContext);

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">Work Experience</h2>
      {resumeData.workExperience.map((workExperience, index) => (
        <WorkExperience
          key={index}
          workExperience={workExperience}
          index={index}
        />
      ))}
      <button type="button"
              onClick={() => {
                // TODO add index
                addWorkExperience(resumeData, setResumeData)
              }}
              aria-label="Add"
              className="p-2 w-[37px] text-white bg-fuchsia-700 rounded text-xl">
        <MdAddCircle/>
      </button>
    </div>
  );
};

export default WorkExperiences;
