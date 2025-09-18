import React, { useContext } from 'react';
import PersonalInformation from '../components/formSections/personalInformation/ui/PersonalInformation';
import SocialMedias from '../components/formSections/socialMedia/ui/SocialMedias';
import Summary from '../components/formSections/Summary';
import Educations from '../components/formSections/education/ui/Educations';
import WorkExperiences from '../components/formSections/workExperience/ui/WorkExperiences';
import Projects from '../components/formSections/projects/ui/Projects';
import Skills from '../components/formSections/skills/ui/Skills';
import Languages from '../components/formSections/languages/ui/Languages';
import TestsAndCertifications from '../components/formSections/testsAndCertifications/ui/TestsAndCertifications';
import Navigator from '../components/navigator/ui/Navigator';
import { ResumeContext } from '../../builder';
import Header from '../components/header/ui/Header';
import FormCloseOpenBtn from '../../FormCloseOpenBtn';
import Menu from '../components/menu/ui/Menu';

const blocks = [
  {
    title: 'Personal Information',
    component: PersonalInformation,
  },
  {
    title: 'Social Media',
    component: SocialMedias,
  },
  {
    title: 'Summary',
    component: Summary,
  },
  {
    title: 'Education',
    component: Educations,
  },
  {
    title: 'Work Experience',
    component: WorkExperiences,
  },
  {
    title: 'Projects',
    component: Projects,
  },
  {
    title: 'Skills',
    component: Skills,
  },
  {
    title: 'Languages',
    component: Languages,
  },
  {
    title: 'Tests & Certificates',
    component: TestsAndCertifications,
  },
];

const Form = () => {
  const { resumeData } = useContext(ResumeContext);

  return (
    <form
      className={
        'form ' +
        'relative flex flex-col justify-between bg-[var(--form-bg-main)] exclude-print md:h-screen ' +
        (resumeData.sidebarIsCollapsed ? 'md:w-[50px]' : 'md:w-[400px]')
      }
    >
      <Header />
      <div className={'relative flex flex-col flex-1 flex flex-col'}>
        <Menu />
        {!resumeData.sidebarIsCollapsed && (
          <>
            <div className={'flex flex-col flex-1 p-2 md:overflow-y-scroll'}>
              {React.createElement(
                blocks[resumeData.navigationActiveIdx].component,
              )}
            </div>
            <Navigator maxIdx={blocks.length - 1} />
          </>
        )}
      </div>
      <FormCloseOpenBtn />
    </form>
  );
};

export default Form;
