import React from 'react';
import {handleLanguage} from "../utils/handleLanguage";

const LanguageLine = ({resumeData, setResumeData, lang, index}) => {
  // TODO replace hardcoded variables

  return (
    <div className="f-col">
      <input
        type="text"
        placeholder={"Language"}
        name="language"
        className="w-full other-input"
        value={lang}
        onChange={(e) => handleLanguage(resumeData, setResumeData, e, index, "languages")}
      />
    </div>
  );
};

export default LanguageLine;
