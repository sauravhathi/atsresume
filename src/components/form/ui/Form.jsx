import React from 'react';
import LoadUnload from "../components/LoadUnload";
import PersonalInformation from "../components/PersonalInformation";
import SocialMedia from "../components/SocialMedia";
import Summary from "../components/Summary";
import Education from "../components/Education";
import WorkExperience from "../components/WorkExperience";
import Projects from "../components/Projects";
import Skills from "../components/skills/ui/Skills";
import Languages from "../components/languages/ui/Languages";
import Certification from "../components/certification";

const Form = () => {
  return (
    <form className="p-4 bg-fuchsia-600 exclude-print md:max-w-[40%] md:h-screen md:overflow-y-scroll">
      <LoadUnload/>
      <PersonalInformation/>
      <SocialMedia/>
      <Summary/>
      <Education/>
      <WorkExperience/>
      <Projects/>
      <Skills/>
      <Languages/>
      <Certification/>
    </form>
  );
};

export default Form;
