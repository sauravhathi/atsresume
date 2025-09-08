import React, {useContext} from 'react';
import LoadUnload from "../components/LoadUnload";
import PersonalInformation from "../components/personalInformation/ui/PersonalInformation";
import SocialMedias from "../components/socialMedia/ui/SocialMedias";
import Summary from "../components/Summary";
import Educations from "../components/education/ui/Educations";
import WorkExperiences from "../components/workExperience/ui/WorkExperiences";
import Projects from "../components/projects/ui/Projects";
import Skills from "../components/skills/ui/Skills";
import Languages from "../components/languages/ui/Languages";
import TestsAndCertifications from "../components/testsAndCertifications/ui/TestsAndCertifications";
import Navigator from "../components/navigator/ui/Navigator";
import {ResumeContext} from "../../builder";

const blocks = [
  {
    title: "Personal Information",
    component: PersonalInformation,
  },
  {
    title: "Social Media",
    component: SocialMedias,
  },
  {
    title: "Summary",
    component: Summary,
  },
  {
    title: "Education",
    component: Educations,
  },
  {
    title: "Work Experience",
    component: WorkExperiences,
  },
  {
    title: "Projects",
    component: Projects,
  },
  {
    title: "Skills",
    component: Skills,
  },
  {
    title: "Languages",
    component: Languages,
  },
  {
    title: "Tests & Certificates",
    component: TestsAndCertifications
  }
]

const Form = () => {
  const {resumeData} = useContext(ResumeContext);

  return (
    <form
      className={
        "form " +
        "flex flex-col justify-between bg-fuchsia-600 exclude-print md:w-[400px] md:h-screen"
      }
    >
      <LoadUnload/>
      <div
        className={"flex flex-col flex-1 p-2 md:overflow-y-scroll"}
      >
        {React.createElement(blocks[resumeData.navigationActiveIdx].component)}
      </div>
      <Navigator maxIdx={blocks.length - 1}/>
    </form>
  );
};

export default Form;
