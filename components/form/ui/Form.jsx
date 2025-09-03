import React, {useContext} from 'react';
import LoadUnload from "../components/LoadUnload";
import PersonalInformation from "../components/PersonalInformation";
import SocialMedia from "../components/SocialMedia";
import Summary from "../components/Summary";
import Education from "../components/Education";
import WorkExperience from "../components/WorkExperience";
import Projects from "../components/Projects";
import Skill from "../components/Skill";
import Language from "../components/Language";
import Certification from "../components/certification";
import {ResumeContext} from "../../../pages/builder";


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
