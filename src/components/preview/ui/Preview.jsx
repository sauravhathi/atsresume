/* eslint-disable react/jsx-no-undef */
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube,} from "react-icons/fa";
import {CgWebsite} from "react-icons/cg";
import React, {useContext, useState} from "react";
import {ResumeContext} from "../../builder";
import dynamic from "next/dynamic";
import ModalHighlightMenu from "../components/ModalHighlightMenu";
import Header from "../components/Header";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import A4PageWrapper from "../components/A4PageWrapper";

const DragDropContext = dynamic(
  () =>
    import("react-beautiful-dnd").then((mod) => {
      return mod.DragDropContext;
    }),
  {ssr: false}
);

const Preview = () => {
  const {resumeData, setResumeData} = useContext(ResumeContext);
  const icons = [
    {name: "github", icon: <FaGithub/>},
    {name: "linkedin", icon: <FaLinkedin/>},
    {name: "twitter", icon: <FaTwitter/>},
    {name: "facebook", icon: <FaFacebook/>},
    {name: "instagram", icon: <FaInstagram/>},
    {name: "youtube", icon: <FaYoutube/>},
    {name: "website", icon: <CgWebsite/>},
  ];

  const onDragEnd = (result) => {
    const {destination, source} = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    if (source.droppableId === "work-experience") {
      const newWorkExperience = [...resumeData.workExperience];
      const [removed] = newWorkExperience.splice(source.index, 1);
      newWorkExperience.splice(destination.index, 0, removed);
      setResumeData({...resumeData, workExperience: newWorkExperience});
    }

    if (source.droppableId.includes("WORK_EXPERIENCE_KEY_ACHIEVEMENT")) {
      const newWorkExperience = [...resumeData.workExperience];
      const workExperienceIndex = parseInt(source.droppableId.split("-")[1]);
      const keyAchievements =
        newWorkExperience[workExperienceIndex].keyAchievements.split("\n");
      const [removed] = keyAchievements.splice(source.index, 1);
      keyAchievements.splice(destination.index, 0, removed);
      newWorkExperience[workExperienceIndex].keyAchievements =
        keyAchievements.join("\n");
      setResumeData({...resumeData, workExperience: newWorkExperience});
    }

    if (source.droppableId === "skills") {
      const newSkills = [...resumeData.skills];
      const [removed] = newSkills.splice(source.index, 1);
      newSkills.splice(destination.index, 0, removed);
      setResumeData({...resumeData, skills: newSkills});
    }

    if (source.droppableId.includes("projects")) {
      const newProjects = [...resumeData.projects];
      const [removed] = newProjects.splice(source.index, 1);
      newProjects.splice(destination.index, 0, removed);
      setResumeData({...resumeData, projects: newProjects});
    }

    if (source.droppableId.includes("PROJECTS_KEY_ACHIEVEMENT")) {
      const newProjects = [...resumeData.projects];
      const projectIndex = parseInt(source.droppableId.split("-")[1]);
      const keyAchievements =
        newProjects[projectIndex].keyAchievements.split("\n");
      const [removed] = keyAchievements.splice(source.index, 1);
      keyAchievements.splice(destination.index, 0, removed);
      newProjects[projectIndex].keyAchievements = keyAchievements.join("\n");
      setResumeData({...resumeData, projects: newProjects});
    }
  };

  return (
    <div className="md:max-w-[60%] sticky top-0 preview rm-padding-print p-6 md:overflow-y-scroll md:h-screen">
      <A4PageWrapper>
        <ModalHighlightMenu/>
        <DragDropContext onDragEnd={onDragEnd}>
          <Header resumeData={resumeData} icons={icons}/>
          <hr className="border-dashed my-2"/>
          <div className="grid grid-cols-3 gap-6">
            <LeftSide resumeData={resumeData}/>
            <RightSide resumeData={resumeData}/>
          </div>
        </DragDropContext>
      </A4PageWrapper>
    </div>
  );
};

export default Preview;
