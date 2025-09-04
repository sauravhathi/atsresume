import React, {useContext} from "react";
import {ResumeContext} from "../../../../builder";
import FormButton from "./../../FormButton";
import {addCertificate} from "../utils/addCertificate";
import {removeCertificate} from "../utils/removeCertificate";
import TestAndCertifiateLine from "../components/TestAndCertifiateLine";

const TestsAndCertifications = () => {
  const {resumeData, setResumeData} = useContext(ResumeContext);
  const title = "Tests & Certifications";

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">{title}</h2>
      {resumeData["certifications"].map((cert, index) => (
        <TestAndCertifiateLine
          key={index}
          resumeData={resumeData}
          setResumeData={setResumeData}
          cert={cert}
          index={index}
        />
      ))}
      <FormButton
        size={resumeData["certifications"].length}
        add={() => {
          addCertificate(resumeData, setResumeData)
        }}
        remove={() => {
          removeCertificate(resumeData, setResumeData)
        }}/>
    </div>
  );
};

export default TestsAndCertifications;
