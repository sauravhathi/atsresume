export const handleSocialMedia = (resumeData, setResumeData, e, index) => {
  const newSocialMedia = [...resumeData.socialMedia];
  newSocialMedia[index][e.target.name] = e.target.value.replace(
    "https://",
    ""
  );
  setResumeData({...resumeData, socialMedia: newSocialMedia});
};
