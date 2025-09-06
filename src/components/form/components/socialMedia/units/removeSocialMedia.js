export const removeSocialMedia = (resumeData, setResumeData, index) => {
  const newSocialMedia = [...resumeData.socialMedia].filter((_, idx) => idx !== index);
  setResumeData({...resumeData, socialMedia: newSocialMedia});
};
