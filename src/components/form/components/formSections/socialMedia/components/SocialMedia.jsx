import React, { useContext } from 'react';
import { handleSocialMedia } from '../units/handleSocialMedia';
import { ResumeContext } from '../../../../../builder';
import { removeSocialMedia } from '../units/removeSocialMedia';
import DeleteBtn from '../../../../shared/button/DeleteBtn';

const SocialMedia = ({ socialMedia, index }) => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  return (
    <div className="flex w-fill gap-5 items-top">
      <div className="flex-wrap-gap-2">
        <input
          type="text"
          placeholder="Social Media"
          name="socialMedia"
          className="w-full mb-0 other-input"
          value={socialMedia.socialMedia}
          onChange={(e) =>
            handleSocialMedia(resumeData, setResumeData, e, index)
          }
        />
        <input
          type="text"
          placeholder="Link"
          name="link"
          className="w-full mb-0 other-input"
          value={socialMedia.link}
          onChange={(e) =>
            handleSocialMedia(resumeData, setResumeData, e, index)
          }
        />
      </div>
      {/*<Button*/}
      {/*  type="button"*/}
      {/*  onClick={() => {*/}
      {/*    removeSocialMedia(resumeData, setResumeData, index);*/}
      {/*  }}*/}
      {/*  aria-label="Remove"*/}
      {/*  variant={'text'}*/}
      {/*  className="h-[40px]"*/}
      {/*>*/}
      {/*  <BsTrash3 />*/}
      {/*</Button>*/}
      <DeleteBtn
        onClick={() => {
          removeSocialMedia(resumeData, setResumeData, index);
        }}
      />
    </div>
  );
};

export default SocialMedia;
