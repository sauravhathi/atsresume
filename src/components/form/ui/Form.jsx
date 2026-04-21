import React from 'react';
import LoadUnload from "../components/LoadUnload";
import LanguageSelector from "../components/languageSelector/components/LanguageSelector";
import PersonalInformation from "../components/PersonalInformation";
import SocialMedias from "../components/socialMedia/ui/SocialMedias";
import Summary from "../components/Summary";
import Educations from "../components/education/ui/Educations";
import WorkExperiences from "../components/workExperience/ui/WorkExperiences";
import Projects from "../components/projects/ui/Projects";
import Skills from "../components/skills/ui/Skills";
import Languages from "../components/languages/ui/Languages";
import TestsAndCertifications from "../components/testsAndCertifications/ui/TestsAndCertifications";

const Form = () => {
  return (
    <form className="p-4 bg-fuchsia-600 exclude-print md:max-w-[40%] md:h-screen md:overflow-y-scroll">
      <div className="flex flex-wrap gap-4 justify-center items-center">
        <LanguageSelector/>
        <LoadUnload/>
      </div>
      <PersonalInformation/>
      <SocialMedias/>
      <Summary/>
      <Educations/>
      <WorkExperiences/>
      <Projects/>
      <Skills/>
      <Languages/>
      <TestsAndCertifications/>
    </form>
  );
};

export default Form;
