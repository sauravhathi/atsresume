import React, {useContext} from "react";
import {ResumeContext} from "../../../../builder";
import FormButton from "./../../FormButton";
import {addLanguage} from "../utils/addLanguage";
import {removeLanguage} from "../utils/removeLanguage";
import LanguageLine from "./LanguageLine";

const Languages = () => {
  const {resumeData, setResumeData} = useContext(ResumeContext);
  // TODO replace hardcoded variables

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">Languages</h2>
      {resumeData["languages"].map((lang, index) => (
        <LanguageLine
          key={index}
          lang={lang}
          resumeData={resumeData}
          setResumeData={setResumeData}
          index={index}
        />
      ))}
      <FormButton
        size={resumeData["languages"].length}
        add={() => {
          addLanguage(resumeData, setResumeData, "languages")
        }}
        remove={() => {
          removeLanguage(resumeData, setResumeData, "languages")
        }}
      />
    </div>
  );
};

export default Languages;
