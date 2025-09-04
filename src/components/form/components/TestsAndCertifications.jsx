import React, { useContext } from "react";
import {ResumeContext} from "../../builder";
import FormButton from "./FormButton";

const TestsAndCertifications = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const title = "Tests & Certifications";

  const handleCertificate = (e, index) => {
    const newSkills = [...resumeData["certifications"]];
    newSkills[index] = e.target.value;
    setResumeData({ ...resumeData, ["certifications"]: newSkills });
  };

  const addCertificate = () => {
    setResumeData({ ...resumeData, ["certifications"]: [...resumeData["certifications"], ""] });
  };

  const removeCertificate = () => {
    const newSkills = [...resumeData["certifications"]];
    newSkills.splice(-1, 1);
    setResumeData({ ...resumeData, ["certifications"]: newSkills });
  };

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">{title}</h2>
      {resumeData["certifications"].map((cert, index) => (
        <div key={index} className="f-col">
          <input
            type="text"
            placeholder={title}
            name={title}
            className="w-full other-input"
            value={cert}
            onChange={(e) => handleCertificate(e, index, "certifications")}
          />
        </div>
      ))}
      <FormButton size={resumeData["certifications"].length} add={addCertificate} remove={removeCertificate} />
    </div>
  );
};

export default TestsAndCertifications;
