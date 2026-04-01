import React from 'react';
import {handleLanguage} from "../utils/handleLanguage";
import {BsTrash3} from "react-icons/bs";
import {removeLanguage} from "../utils/removeLanguage";
import i18n from "../../../../../translations";

const LanguageLine = ({resumeData, setResumeData, lang, index}) => {
  return (
    <div
      className="flex gap-5 items-center"
    >
      <input
        type="text"
        placeholder={i18n.t("languages.language")}
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
