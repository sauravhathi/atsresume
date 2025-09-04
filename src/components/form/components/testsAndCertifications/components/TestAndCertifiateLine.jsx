import React from 'react';
import {handleCertificate} from "../utils/handleCertificate";

const TestAndCertifiateLine = ({resumeData, setResumeData, cert, index}) => {
  return (
    <div className="f-col">
      <input
        type="text"
        placeholder={"Test or certificate"}
        name={"Certificate"}
        className="w-full other-input"
        value={cert}
        onChange={(e) => handleCertificate(resumeData, setResumeData, e, index)}
      />
    </div>
  );
};

export default TestAndCertifiateLine;
