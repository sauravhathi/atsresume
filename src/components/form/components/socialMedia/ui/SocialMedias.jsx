import FormButton from "../../FormButton";
import React, {useContext} from "react";
import {ResumeContext} from "../../../../builder";
import {addSocialMedia} from "../units/addSocialMedia";
import {removeSocialMedia} from "../units/removeSocialMedia";
import SocialMedia from "../components/SocialMedia";

const SocialMedias = () => {
  const {resumeData, setResumeData} = useContext(ResumeContext);

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">Social Media</h2>
      {resumeData.socialMedia.map((socialMedia, index) => (
        <SocialMedia
          key={index}
          socialMedia={socialMedia}
          index={index}
        />
      ))}
      <FormButton
        size={resumeData.socialMedia.length}
        add={() => {
          addSocialMedia(resumeData, setResumeData)
        }}
        remove={() => {
          removeSocialMedia(resumeData, setResumeData)
        }}
      />
    </div>
  );
};

export default SocialMedias;
