export const handleProfilePicture = (resumeData, setResumeData, e) => {
  const file = e.target.files[0];

  if (file instanceof Blob) {
    const reader = new FileReader();
    reader.onload = (event) => {
      setResumeData({...resumeData, profilePicture: event.target.result});
    };
    reader.readAsDataURL(file);
  } else {
    console.error("Invalid file type");
  }
};
