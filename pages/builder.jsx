import React, { useState } from "react";
import Meta from "../components/meta/Meta";
import FormCP from "../components/form/FormCP";
import LoadUnload from "../components/form/LoadUnload";
import Preview from "../components/preview/Preview";
import DefaultResumeData from "../components/utility/DefaultResumeData";
import SocialMedia from "../components/form/SocialMedia";
import WorkExperience from "../components/form/WorkExperience";
import Skill from "../components/form/Skill";
import PersonalInformation from "../components/form/PersonalInformation";
import Summary from "../components/form/Summary";
import Projects from "../components/form/Projects";
import Education from "../components/form/Education";
import {MdPictureAsPdf} from "react-icons/md";
import dynamic from "next/dynamic";



export default function Builder(props) {
  const [resumeData, setResumeData] = useState(DefaultResumeData);
  const [formClose, setFormClose] = useState(false);

  const handleLoad = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const resumeData = JSON.parse(event.target.result);
      setResumeData(resumeData);
    };
    reader.readAsText(file);
  };

  const handleDownload = (data, filename, event) => {
    event.preventDefault();
    const jsonData = JSON.stringify(data);
    const blob = new Blob([jsonData], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  };

  const handleChange = (e) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
    console.log(resumeData);
  };

  const handleProfilePicture = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setResumeData({ ...resumeData, profilePicture: event.target.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSocialMedia = (e, index) => {
    const newSocialMedia = [...resumeData.socialMedia];
    newSocialMedia[index][e.target.name] = e.target.value.replace("https://", "");
    setResumeData({ ...resumeData, socialMedia: newSocialMedia });
  };

  const handleEducation = (e, index) => {
    const newEducation = [...resumeData.education];
    newEducation[index][e.target.name] = e.target.value;
    setResumeData({ ...resumeData, education: newEducation });
  };

  const handleworkExperience = (e, index) => {
    const newworkExperience = [...resumeData.workExperience];
    newworkExperience[index][e.target.name] = e.target.value;
    setResumeData({ ...resumeData, workExperience: newworkExperience });
  };

  const handleProjects = (e, index) => {
    const newProjects = [...resumeData.projects];
    newProjects[index][e.target.name] = e.target.value;
    setResumeData({ ...resumeData, projects: newProjects });
    console.log(resumeData.projects)
  };

  const addSocialMedia = () => {
    setResumeData({
      ...resumeData,
      socialMedia: [...resumeData.socialMedia, { socialMedia: "", link: "" }],
    });
  };

  const removeSocialMedia = (index) => {
    const newSocialMedia = [...resumeData.socialMedia];
    newSocialMedia[index] = newSocialMedia[newSocialMedia.length - 1];
    newSocialMedia.pop();
    setResumeData({ ...resumeData, socialMedia: newSocialMedia });
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [...resumeData.education, { school: "", degree: "", startYear: "", endYear: "" }],
    });
  };

  const removeEducation = (index) => {
    const newEducation = [...resumeData.education];
    newEducation[index] = newEducation[newEducation.length - 1];
    newEducation.pop();
    setResumeData({ ...resumeData, education: newEducation });
  };

  const addworkExperience = () => {
    setResumeData({
      ...resumeData,
      workExperience: [
        ...resumeData.workExperience,
        { company: "", position: "", description: "", keyAchievements: "", startYear: "", endYear: "" },
      ],
    });
  };

  const removeworkExperience = (index) => {
    const newworkExperience = [...resumeData.workExperience];
    newworkExperience[index] = newworkExperience[newworkExperience.length - 1];
    newworkExperience.pop();
    setResumeData({ ...resumeData, workExperience: newworkExperience });
  };

  const addProjects = () => {
    setResumeData({
      ...resumeData,
      projects: [
        ...resumeData.projects,
        { name: "", description: "", keyAchievements: "", link: "", startYear: "", endYear: "" },
      ],
    });
  };

  const removeProjects = (index) => {
    const newProjects = [...resumeData.projects];
    newProjects[index] = newProjects[newProjects.length - 1];
    newProjects.pop();
    setResumeData({ ...resumeData, projects: newProjects });
  };

  const handleTechnicalSkills = (e, index) => {
    const newTechnicalSkills = [...resumeData.technicalSkills];
    newTechnicalSkills[index] = e.target.value;
    setResumeData({ ...resumeData, technicalSkills: newTechnicalSkills });
  };

  const addTechnicalSkill = () => {
    setResumeData({ ...resumeData, technicalSkills: [...resumeData.technicalSkills, ""] });
  };

  const removeTechnicalSkill = (index) => {
    const newTechnicalSkills = [...resumeData.technicalSkills];
    newTechnicalSkills[index] = newTechnicalSkills[newTechnicalSkills.length - 1];
    newTechnicalSkills.pop();
    setResumeData({ ...resumeData, technicalSkills: newTechnicalSkills });
  };

  const handleSoftSkills = (e, index) => {
    const newSoftSkills = [...resumeData.softSkills];
    newSoftSkills[index] = e.target.value;
    setResumeData({ ...resumeData, softSkills: newSoftSkills });
  };

  const addSoftSkill = () => {
    setResumeData({ ...resumeData, softSkills: [...resumeData.softSkills, ""] });
  };

  const removeSoftSkill = (index) => {
    const newSoftSkills = [...resumeData.softSkills];
    newSoftSkills[index] = newSoftSkills[newSoftSkills.length - 1];
    newSoftSkills.pop();
    setResumeData({ ...resumeData, softSkills: newSoftSkills });
  };

  const handleLanguages = (e, index) => {
    const newLanguages = [...resumeData.languages];
    newLanguages[index] = e.target.value;
    setResumeData({ ...resumeData, languages: newLanguages });
  };

  const addLanguage = () => {
    setResumeData({ ...resumeData, languages: [...resumeData.languages, ""] });
  };

  const removeLanguage = (index) => {
    const newLanguages = [...resumeData.languages];
    newLanguages[index] = newLanguages[newLanguages.length - 1];
    newLanguages.pop();
    setResumeData({ ...resumeData, languages: newLanguages });
  };

  const handleAdditionalSkills = (e, index) => {
    const newAdditionalSkills = [...resumeData.additionalSkills];
    newAdditionalSkills[index] = e.target.value;
    setResumeData({ ...resumeData, additionalSkills: newAdditionalSkills });
  };

  const addAdditionalSkill = () => {
    setResumeData({ ...resumeData, additionalSkills: [...resumeData.additionalSkills, ""] });
  };

  const removeAdditionalSkill = (index) => {
    const newAdditionalSkills = [...resumeData.additionalSkills];
    newAdditionalSkills[index] = newAdditionalSkills[newAdditionalSkills.length - 1];
    newAdditionalSkills.pop();
    setResumeData({ ...resumeData, additionalSkills: newAdditionalSkills });
  };

  const handleCertifications = (e, index) => {
    const newCertifications = [...resumeData.certifications];
    newCertifications[index] = e.target.value;
    setResumeData({ ...resumeData, certifications: newCertifications });
  };

  const addCertification = () => {
    setResumeData({ ...resumeData, certifications: [...resumeData.certifications, ""] });
  };

  const removeCertification = (index) => {
    const newCertifications = [...resumeData.certifications];
    newCertifications[index] = newCertifications[newCertifications.length - 1];
    newCertifications.pop();
    setResumeData({ ...resumeData, certifications: newCertifications });
  };


  return (
    <>
    <Meta title="ATSResume | Get hired with an ATS-optimized resume" description="ATSResume is a cutting-edge resume builder that helps job seekers create a professional, ATS-friendly resume in minutes. Our platform uses the latest technology to analyze and optimize your resume for maximum visibility and success with applicant tracking systems. Say goodbye to frustration and wasted time spent on manual resume formatting. Create your winning resume with ATSResume today and get noticed by employers." keywords="ATS-friendly, Resume optimization, Keyword-rich resume, Applicant Tracking System, ATS resume builder, ATS resume templates, ATS-compliant resume, ATS-optimized CV, ATS-friendly format, ATS resume tips, Resume writing services, Career guidance, Job search in India, Resume tips for India, Professional resume builder, Cover letter writing, Interview preparation, Job interview tips, Career growth, Online job applications, resume builder, free resume builder, resume ats, best free resume builder, resume creator, resume cv, resume design, resume editor, resume maker" />
      <div className="f-col gap-4 md:flex-row justify-evenly max-w-7xl md:mx-auto md:h-screen" >
        {!formClose && (
          <form className="p-4 bg-fuchsia-600 exclude-print md:max-w-[40%] md:h-screen md:overflow-y-scroll">
            <LoadUnload handleLoad={handleLoad} handleDownload={handleDownload} resumeData={resumeData} />
            <PersonalInformation resumeData={resumeData} handleChange={handleChange} handleProfilePicture={handleProfilePicture} />
            <SocialMedia resumeData={resumeData} handleSocialMedia={handleSocialMedia} addSocialMedia={addSocialMedia} removeSocialMedia={removeSocialMedia} />
            <Summary resumeData={resumeData} handleChange={handleChange} />
            <Education resumeData={resumeData} handleEducation={handleEducation} addEducation={addEducation} removeEducation={removeEducation} />
            <WorkExperience resumeData={resumeData} handleWorkExperience={handleworkExperience} addWorkExperience={addworkExperience} removeWorkExperience={removeworkExperience} />
            <Projects resumeData={resumeData} handleProjects={handleProjects} addProjects={addProjects} removeProjects={removeProjects} />
            <Skill resumeData={resumeData} skillType="technicalSkills" title="Technical Skills" placeholder="Skill" handleSkills={handleTechnicalSkills} addSkill={addTechnicalSkill} removeSkill={removeTechnicalSkill} />
            <Skill resumeData={resumeData} skillType="softSkills" title="Soft Skills" placeholder="Skill" handleSkills={handleSoftSkills} addSkill={addSoftSkill} removeSkill={removeSoftSkill} />
            <Skill resumeData={resumeData} skillType="languages" title="Languages" placeholder="Language" handleSkills={handleLanguages} addSkill={addLanguage} removeSkill={removeLanguage} />
            <Skill resumeData={resumeData} skillType="additionalSkills" title="Additional Skills" placeholder="Skill" handleSkills={handleAdditionalSkills} addSkill={addAdditionalSkill} removeSkill={removeAdditionalSkill} />
            <Skill resumeData={resumeData} skillType="certifications" title="Certifications" placeholder="Certification" handleSkills={handleCertifications} addSkill={addCertification} removeSkill={removeCertification} />
          </form>
        )}
        <Preview resumeData={resumeData} />
      </div>
      <FormCP formClose={formClose} setFormClose={setFormClose} />
      <Print/>
    </>
  )
};

const Print = dynamic(() => import("../components/utility/WinPrint"), {
  ssr: false,
});
