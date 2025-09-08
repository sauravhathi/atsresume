import React, {useContext} from "react";
import {ResumeContext} from "../../../../builder";
import ParamBlock from "../components/ParamBlock";
import PhotoUploader from "../components/PhotoUploader";

const PersonalInformation = ({}) => {
  const {resumeData, setResumeData, handleChange} =
    useContext(ResumeContext);

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">Personal Information</h2>
      <div className="flex flex-col gap-2">
        <PhotoUploader/>
        <ParamBlock>
          <label htmlFor={"personalInfo-fullName"}>Full name</label>
          <input
            id={"personalInfo-fullName"}
            type="text"
            placeholder="Full Name"
            name="name"
            className="pi"
            value={resumeData.name}
            onChange={handleChange}
          />
        </ParamBlock>
        <ParamBlock>
          <label htmlFor={"personalInfo-jobTitle"}>Job title</label>
          <input
            id={"personalInfo-jobTitle"}
            type="text"
            placeholder="Job Title"
            name="position"
            className="pi"
            value={resumeData.position}
            onChange={handleChange}
          />
        </ParamBlock>
        <ParamBlock>
          <label htmlFor={"personalInfo-phone"}>Phone</label>
          <input
            id={"personalInfo-phone"}
            type="text"
            placeholder="Phone number"
            name="contactInformation"
            className="pi"
            value={resumeData.contactInformation}
            onChange={handleChange}
            minLength="10"
            maxLength="15"
          />
        </ParamBlock>
        <ParamBlock>
          <label htmlFor={"personalInfo-email"}>Email</label>
          <input
            id={"personalInfo-email"}
            type="email"
            placeholder="Email"
            name="email"
            className="pi"
            value={resumeData.email}
            onChange={handleChange}
          />
        </ParamBlock>
        <ParamBlock>
          <label htmlFor="personalInfo-address">Address</label>
          <input
            id={"personalInfo-address"}
            type="text"
            placeholder="Address"
            name="address"
            className="pi"
            value={resumeData.address}
            onChange={handleChange}
          />
        </ParamBlock>
      </div>
    </div>
  );
};

export default PersonalInformation;
