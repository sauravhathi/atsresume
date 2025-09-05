import React from 'react';
import {handleLanguage} from "../utils/handleLanguage";
import {BsTrash3} from "react-icons/bs";
import {removeLanguage} from "../utils/removeLanguage";

const LanguageLine = ({resumeData, setResumeData, lang, index}) => {
  // TODO replace hardcoded variables

  return (
    <div
      className="flex gap-5 items-center"
    >
      <input
        type="text"
        placeholder={"Language"}
        name="language"
        className="w-full mb-0 other-input"
        value={lang}
        onChange={(e) => handleLanguage(resumeData, setResumeData, e, index, "languages")}
      />
      <button
        type="button"
        onClick={() => {
          removeLanguage(resumeData, setResumeData, index)
        }}
        aria-label="Remove"
        className="p-2 text-white bg-fuchsia-700 rounded text-xl"
      >
        <BsTrash3/>
      </button>
    </div>
  );
};

export default LanguageLine;
