import React from 'react';
import { handleCertificate } from '../utils/handleCertificate';
import { removeCertificate } from '../utils/removeCertificate';
import DeleteBtn from '../../../../shared/button/DeleteBtn';

const TestAndCertificateLine = ({ resumeData, setResumeData, cert, index }) => {
  return (
    <div className="flex gap-5 items-center">
      <input
        type="text"
        placeholder={'Test or certificate'}
        name={'Certificate'}
        className="w-full mb-0 other-input"
        value={cert}
        onChange={(e) => handleCertificate(resumeData, setResumeData, e, index)}
      />
      <DeleteBtn
        onClick={() => {
          removeCertificate(resumeData, setResumeData, index);
        }}
      />
    </div>
  );
};

export default TestAndCertificateLine;
