export const addSocialMedia = (resumeData, setResumeData) => {
  setResumeData({
    ...resumeData,
    socialMedia: [...resumeData.socialMedia, {socialMedia: "", link: ""}],
  });
};
