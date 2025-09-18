import React, { useContext } from 'react';
import { ResumeContext } from '../../../../../builder';
import { addLanguage } from '../utils/addLanguage';
import LanguageLine from '../components/LanguageLine';
import AddBtn from '../../../../shared/button/AddBtn';

const Languages = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  // TODO replace hardcoded variables

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">Languages</h2>
      {resumeData['languages'].map((lang, index) => (
        <LanguageLine
          key={index}
          lang={lang}
          resumeData={resumeData}
          setResumeData={setResumeData}
          index={index}
        />
      ))}
      <AddBtn
        onClick={() => {
          addLanguage(resumeData, setResumeData, 'languages');
        }}
      />
    </div>
  );
};

export default Languages;
