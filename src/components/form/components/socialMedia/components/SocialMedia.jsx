import React, {useContext} from 'react';
import {handleSocialMedia} from "../units/handleSocialMedia";
import {ResumeContext} from "../../../../builder";

const SocialMedia = ({socialMedia, index}) => {
  const {resumeData, setResumeData} = useContext(ResumeContext);
  return (
    <div key={index} className="flex-wrap-gap-2">
      <input
        type="text"
        placeholder="Social Media"
        name="socialMedia"
        className="other-input"
        value={socialMedia.socialMedia}
        onChange={(e) => handleSocialMedia(resumeData, setResumeData, e, index)}
      />
      <input
        type="text"
        placeholder="Link"
        name="link"
        className="other-input"
        value={socialMedia.link}
        onChange={(e) => handleSocialMedia(resumeData, setResumeData, e, index)}
      />
    </div>
  );
};

export default SocialMedia;
