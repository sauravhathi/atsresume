/* eslint-disable react/jsx-no-undef */
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube,} from "react-icons/fa";
import {CgWebsite} from "react-icons/cg";
import Skills from "../components/Skills";
import DateRange from "../../utility/DateRange";
import Link from "next/link";
import React, {useContext, useState} from "react";
import {ResumeContext} from "../../builder";
import dynamic from "next/dynamic";
import Language from "../components/Language";
import Certification from "../components/Certification";
import ModalHighlightMenu from "../components/ModalHighlightMenu";
import Header from "../components/Header";
import LeftSide from "../components/LeftSide";

const DragDropContext = dynamic(
  () =>
    import("react-beautiful-dnd").then((mod) => {
      return mod.DragDropContext;
    }),
  {ssr: false}
);
const Droppable = dynamic(
  () =>
    import("react-beautiful-dnd").then((mod) => {
      return mod.Droppable;
    }),
  {ssr: false}
);
const Draggable = dynamic(
  () =>
    import("react-beautiful-dnd").then((mod) => {
      return mod.Draggable;
    }),
  {ssr: false}
);

const Preview = () => {
  const {resumeData, setResumeData} = useContext(ResumeContext);
  const [content, setContent] = useState(resumeData);
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
          {/* two column start */}
          <div className="grid grid-cols-3 gap-6">
            <LeftSide resumeData={resumeData} />
            {/* Right side start */}
            <div className="col-span-2 space-y-2">
              {resumeData.workExperience.length > 0 && (
                <Droppable droppableId="work-experience" type="WORK_EXPERIENCE">
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                      <h2
                        className="section-title mb-1 border-b-2 border-gray-300 editable"
                        contentEditable
                        suppressContentEditableWarning
                      >
                        Work Experience
                      </h2>
                      {resumeData.workExperience.map((item, index) => (
                        <Draggable
                          key={`${item.company}-${index}`}
                          draggableId={`WORK_EXPERIENCE-${index}`}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={`mb-1 ${
                                snapshot.isDragging &&
                                "outline-dashed outline-2 outline-gray-400 bg-white"
                              }`}
                            >
                              <div className="flex flex-row justify-between space-y-1">
                                <p className="content i-bold">{item.company}</p>
                                <DateRange
                                  startYear={item.startYear}
                                  endYear={item.endYear}
                                  id={`work-experience-start-end-date`}
                                />
                              </div>
                              <p className="content">{item.position}</p>
                              <p className="content hyphens-auto">
                                {item.description}
                              </p>
                              <Droppable
                                droppableId={`WORK_EXPERIENCE_KEY_ACHIEVEMENT-${index}`}
                                type="WORK_EXPERIENCE_KEY_ACHIEVEMENT"
                              >
                                {(provided) => (
                                  <ul
                                    className="list-disc ul-padding content"
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                  >
                                    {typeof item.keyAchievements === "string" &&
                                      item.keyAchievements
                                        .split("\n")
                                        .map((achievement, subIndex) => (
                                          <Draggable
                                            key={`${item.company}-${index}-${subIndex}`}
                                            draggableId={`WORK_EXPERIENCE_KEY_ACHIEVEMENT-${index}-${subIndex}`}
                                            index={subIndex}
                                          >
                                            {(provided, snapshot) => (
                                              <li
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className={`
                                          hover:outline-dashed hover:outline-2 hover:outline-gray-400
                                          ${
                                                  snapshot.isDragging &&
                                                  "outline-dashed outline-2 outline-gray-400 bg-white"
                                                }`}
                                              >
                                                <div
                                                  dangerouslySetInnerHTML={{
                                                    __html: achievement,
                                                  }}
                                                  contentEditable
                                                />
                                              </li>
                                            )}
                                          </Draggable>
                                        ))}
                                    {provided.placeholder}
                                  </ul>
                                )}
                              </Droppable>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              )}
              {resumeData.projects.length > 0 && (
                <Droppable droppableId="projects" type="PROJECTS">
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                      <h2
                        className="section-title mb-1 border-b-2 border-gray-300 editable"
                        contentEditable
                        suppressContentEditableWarning
                      >
                        Projects
                      </h2>
                      {resumeData.projects.map((item, index) => (
                        <Draggable
                          key={`${item.name}-${index}`}
                          draggableId={`PROJECTS-${index}`}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={`mb-1 ${
                                snapshot.isDragging &&
                                "outline-dashed outline-2 outline-gray-400 bg-white"
                              }`}
                            >
                              <div className="flex flex-row justify-between space-y-1">
                                <p className="content i-bold">{item.name}</p>
                                <DateRange
                                  startYear={item.startYear}
                                  endYear={item.endYear}
                                  id={`work-experience-start-end-date`}
                                />
                              </div>

                              <Link
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="content"
                              >
                                {item.link}
                              </Link>
                              <p className="content">{item.description}</p>
                              <Droppable
                                droppableId={`PROJECTS_KEY_ACHIEVEMENT-${index}`}
                                type="PROJECTS_KEY_ACHIEVEMENT"
                              >
                                {(provided) => (
                                  <ul
                                    className="list-disc ul-padding content"
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                  >
                                    {typeof item.keyAchievements === "string" &&
                                      item.keyAchievements
                                        .split("\n")
                                        .map((achievement, subIndex) => (
                                          <Draggable
                                            key={`${item.name}-${index}-${subIndex}`}
                                            draggableId={`PROJECTS_KEY_ACHIEVEMENT-${index}-${subIndex}`}
                                            index={subIndex}
                                          >
                                            {(provided, snapshot) => (
                                              <li
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className={`
                                          hover:outline-dashed hover:outline-2 hover:outline-gray-400
                                          ${
                                                  snapshot.isDragging &&
                                                  "outline-dashed outline-2 outline-gray-400 bg-white"
                                                }`}
                                              >
                                                <div
                                                  dangerouslySetInnerHTML={{
                                                    __html: achievement,
                                                  }}
                                                  contentEditable
                                                />
                                              </li>
                                            )}
                                          </Draggable>
                                        ))}
                                    {provided.placeholder}
                                  </ul>
                                )}
                              </Droppable>
                            </div>

                          )}

                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              )}
            </div>
            {/* Rigth side end */}

          </div>
        </DragDropContext>
      </A4PageWrapper>
    </div>
  );
};

const A4PageWrapper = ({children}) => {
  const alertA4Size = () => {
    const preview = document.querySelector(".preview");
    const previewHeight = preview.offsetHeight;
    console.log(previewHeight);
    if (previewHeight > 1122) {
      alert("A4 size exceeded");
    }
  };

  return (
    <div className="w-8.5in" onLoad={alertA4Size}>
      {children}
    </div>
  );
};


export default Preview;
