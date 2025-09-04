import React, {useContext} from "react";
import {ResumeContext} from "../../../../builder";
import FormButton from "./../../FormButton";
import {addLanguage} from "../utils/addLanguage";
import {removeLanguage} from "../utils/removeLanguage";
import {handleLanguage} from "../utils/handleLanguage";

const Languages = () => {
  const {resumeData, setResumeData} = useContext(ResumeContext);
  const languageType = "languages";
  const title = "Languages";
  const placeholder = "Language";

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">{title}</h2>
      {resumeData[languageType].map((lang, index) => (
        <div key={index} className="f-col">
          <input
            type="text"
            placeholder={placeholder}
            name="language"
            className="w-full other-input"
            value={lang}
            onChange={(e) => handleLanguage(resumeData, setResumeData, e, index, languageType)}
          />
        </div>
      ))}
      <FormButton
        size={resumeData[languageType].length}
        add={() => {
          addLanguage(resumeData, setResumeData, languageType)
        }}
        remove={() => {
          removeLanguage(resumeData, setResumeData, languageType)
        }}
      />
    </div>
  );
};

export default Languages;
