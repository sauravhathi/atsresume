import React, {useContext} from "react";
import {ResumeContext} from "../../builder";

const PersonalInformation = ({}) => {
  const {resumeData, setResumeData, handleProfilePicture, handleChange} =
    useContext(ResumeContext);

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">Personal Information</h2>
      <div className="grid-4">
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          className="pi"
          value={resumeData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Job Title"
          name="position"
          className="pi"
          value={resumeData.position}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Contact Information"
          name="contactInformation"
          className="pi"
          value={resumeData.contactInformation}
          onChange={handleChange}
          minLength="10"
          maxLength="15"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="pi"
          value={resumeData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Address"
          name="address"
          className="pi"
          value={resumeData.address}
          onChange={handleChange}
        />
        <input
          type="file"
          name="profileImage"
          accept="image/*"
          className="profileInput"
          onChange={handleProfilePicture}
          placeholder="Profile Picture"
        />
      </div>
    </div>
  );
};

export default PersonalInformation;
