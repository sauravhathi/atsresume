import React, { useContext } from 'react';
import { ResumeContext } from '../../../../../builder';
import { addSocialMedia } from '../units/addSocialMedia';
import SocialMedia from '../components/SocialMedia';
import AddBtn from '../../../../shared/button/AddBtn';

const SocialMedias = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">Social Media</h2>
      {resumeData.socialMedia.map((socialMedia, index) => (
        <SocialMedia key={index} socialMedia={socialMedia} index={index} />
      ))}
      <AddBtn
        onClick={() => {
          addSocialMedia(resumeData, setResumeData);
        }}
      />
    </div>
  );
};

export default SocialMedias;
