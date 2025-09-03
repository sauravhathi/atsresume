import React, {useContext} from 'react';
import LoadUnload from "./LoadUnload";
import PersonalInformation from "./PersonalInformation";
import SocialMedia from "./SocialMedia";
import Summary from "./Summary";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import Skill from "./Skill";
import Language from "./Language";
import Certification from "./certification";
import {ResumeContext} from "../../pages/builder";


const Form = () => {
  const {resumeData, setResumeData} = useContext(ResumeContext);

  return (
    <form className="p-4 bg-fuchsia-600 exclude-print md:max-w-[40%] md:h-screen md:overflow-y-scroll">
      <LoadUnload/>
      <PersonalInformation/>
      <SocialMedia/>
      <Summary/>
      <Education/>
      <WorkExperience/>
      <Projects/>
      {
        resumeData.skills.map((skill, index) => (
          <Skill
            title={skill.title}
            key={index}
          />
        ))
      }
      <Language/>
      <Certification/>
    </form>
  );
};

export default Form;
