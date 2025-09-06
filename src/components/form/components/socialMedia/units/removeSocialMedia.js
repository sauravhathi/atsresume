export const removeSocialMedia = (resumeData, setResumeData, index) => {
  const newSocialMedia = [...resumeData.socialMedia];
  newSocialMedia[index] = newSocialMedia[newSocialMedia.length - 1];
  newSocialMedia.pop();
  setResumeData({...resumeData, socialMedia: newSocialMedia});
};
