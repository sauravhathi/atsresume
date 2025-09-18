import React, { useContext } from 'react';
import { ResumeContext } from '../../../../../builder';
import { addCertificate } from '../utils/addCertificate';
import TestAndCertificateLine from '../components/TestAndCertificateLine';
import AddBtn from '../../../../shared/button/AddBtn';

const TestsAndCertifications = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const title = 'Tests & Certifications';

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">{title}</h2>
      {resumeData['certifications'].map((cert, index) => (
        <TestAndCertificateLine
          key={index}
          resumeData={resumeData}
          setResumeData={setResumeData}
          cert={cert}
          index={index}
        />
      ))}
      <AddBtn
        onClick={() => {
          addCertificate(resumeData, setResumeData);
        }}
      />
    </div>
  );
};

export default TestsAndCertifications;
