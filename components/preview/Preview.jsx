/* eslint-disable react/jsx-no-undef */
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaBold,
  FaItalic,
  FaPlus,
  FaMinus,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaUnderline,
  FaLink, // Added FaLink
} from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import Skills from "./Skills";
import DateRange from "../utility/DateRange";
import ContactInfo from "./ContactInfo";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState, useEffect } from "react"; // Added useEffect
import { ResumeContext } from "../../pages/builder";
import dynamic from "next/dynamic";
import Language from "./Language";
import Certification from "./Certification";
import { HighlightMenu } from "react-highlight-menu";
import useKeyboardShortcut from "../../hooks/useKeyboardShortcut";

const DragDropContext = dynamic(
  () =>
    import("react-beautiful-dnd").then((mod) => {
      return mod.DragDropContext;
    }),
  { ssr: false }
);
const Droppable = dynamic(
  () =>
    import("react-beautiful-dnd").then((mod) => {
      return mod.Droppable;
    }),
  { ssr: false }
);
const Draggable = dynamic(
  () =>
    import("react-beautiful-dnd").then((mod) => {
      return mod.Draggable;
    }),
  { ssr: false }
);

const Preview = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const [isClient, setIsClient] = useState(false); // State to track client-side rendering

  useEffect(() => {
    setIsClient(true); // Set to true once component mounts on client
  }, []);

  const [content, setContent] = useState(resumeData);
  const icons = [
    { name: "github", icon: <FaGithub /> },
    { name: "linkedin", icon: <FaLinkedin /> },
    { name: "twitter", icon: <FaTwitter /> },
    { name: "facebook", icon: <FaFacebook /> },
    { name: "instagram", icon: <FaInstagram /> },
    { name: "youtube", icon: <FaYoutube /> },
    { name: "website", icon: <CgWebsite /> },
  ];

  const onDragEnd = (result) => {
    const { destination, source } = result;

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
      setResumeData({ ...resumeData, workExperience: newWorkExperience });
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
      setResumeData({ ...resumeData, workExperience: newWorkExperience });
    }

    if (source.droppableId === "skills") {
      const newSkills = [...resumeData.skills];
      const [removed] = newSkills.splice(source.index, 1);
      newSkills.splice(destination.index, 0, removed);
      setResumeData({ ...resumeData, skills: newSkills });
    }

    if (source.droppableId.includes("projects")) {
      const newProjects = [...resumeData.projects];
      const [removed] = newProjects.splice(source.index, 1);
      newProjects.splice(destination.index, 0, removed);
      setResumeData({ ...resumeData, projects: newProjects });
    }

    if (source.droppableId.includes("PROJECTS_KEY_ACHIEVEMENT")) {
      const newProjects = [...resumeData.projects];
      const projectIndex = parseInt(source.droppableId.split("-")[1]);
      const keyAchievements =
        newProjects[projectIndex].keyAchievements.split("\n");
      const [removed] = keyAchievements.splice(source.index, 1);
      keyAchievements.splice(destination.index, 0, removed);
      newProjects[projectIndex].keyAchievements = keyAchievements.join("\n");
      setResumeData({ ...resumeData, projects: newProjects });
    }
  };

  const MenuButton = ({ title, icon, onClick }) => (
    <button
      onClick={onClick}
      title={title}
      className="p-2 hover:bg-gray-200 rounded font-semibold"
    >
      {icon}
    </button>
  );

  const formatText = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  const toggleBold = () => formatText("bold");
  const toggleItalic = () => formatText("italic");
  const toggleUnderline = () => formatText("underline");
  const changeFontSize = (size) => formatText("fontSize", size);
  const alignText = (alignment) => formatText(`justify${alignment}`);

  const insertLink = () => {
    const url = prompt("Enter the URL:");
    if (url) {
      const selection = window.getSelection();
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        let container = range.commonAncestorContainer;
        while (
          container &&
          !(container instanceof Element && container.isContentEditable)
        ) {
          container = container.parentNode;
        }
        if (container) {
          const formattedUrl = /^https?:\/\//i.test(url)
            ? url
            : `https://${url}`;
          document.execCommand("createLink", false, formattedUrl);

          const links = container.querySelectorAll(
            'a[href="' + formattedUrl + '"]'
          );
          links.forEach((link) => {
            if (!link.hasAttribute("target")) {
              link.setAttribute("target", "_blank");
              link.setAttribute("rel", "noopener noreferrer");
            }
          });
        } else {
          alert(
            "Please select text within an editable area (like Key Achievements) to insert a link."
          );
        }
      }
    }
  };

  const handleKeyAchievementChange = (e, type, index, subIndex) => {
    const updatedHtml = e.target.innerHTML;

    if (type === "WORK_EXPERIENCE_KEY_ACHIEVEMENT") {
      const newWorkExperience = JSON.parse(
        JSON.stringify(resumeData.workExperience)
      );
      const keyAchievements = newWorkExperience[index].keyAchievements.split(
        "\n"
      );
      if (subIndex < keyAchievements.length) {
        keyAchievements[subIndex] = updatedHtml;
        newWorkExperience[index].keyAchievements = keyAchievements.join("\n");
        setResumeData((prevData) => ({
          ...prevData,
          workExperience: newWorkExperience,
        }));
      }
    } else if (type === "PROJECTS_KEY_ACHIEVEMENT") {
      const newProjects = JSON.parse(JSON.stringify(resumeData.projects));
      const keyAchievements = newProjects[index].keyAchievements.split("\n");
      if (subIndex < keyAchievements.length) {
        keyAchievements[subIndex] = updatedHtml;
        newProjects[index].keyAchievements = keyAchievements.join("\n");
        setResumeData((prevData) => ({
          ...prevData,
          projects: newProjects,
        }));
      }
    }
  };

  useKeyboardShortcut("b", true, toggleBold);
  useKeyboardShortcut("i", true, toggleItalic);
  useKeyboardShortcut("u", true, toggleUnderline);

  if (!isClient || !resumeData) {
    return <div>Loading Preview...</div>;
  }

  return (
    <div className="md:max-w-[60%] sticky top-0 preview rm-padding-print p-6 md:overflow-y-scroll md:h-screen">
      <A4PageWrapper>
        <HighlightMenu
          styles={{
            borderColor: "#2563EB",
            backgroundColor: "#2563EB",
            boxShadow: "0px 5px 5px 0px rgba(0, 0, 0, 0.15)",
            zIndex: 10,
            borderRadius: "5px",
            padding: "3px",
          }}
          target=".editable-achievement"
          menu={() => (
            <>
              <MenuButton
                title="Bold (Ctrl+B)"
                icon={<FaBold />}
                onClick={toggleBold}
              />
              <MenuButton
                title="Italic (Ctrl+I)"
                icon={<FaItalic />}
                onClick={toggleItalic}
              />
              <MenuButton
                title="Underline (Ctrl+U)"
                icon={<FaUnderline />}
                onClick={toggleUnderline}
              />
              <MenuButton
                title="Insert Link"
                icon={<FaLink />}
                onClick={insertLink}
              />
              <MenuButton
                title="Increase Font Size"
                icon={<FaPlus />}
                onClick={() => changeFontSize(4)}
              />
              <MenuButton
                title="Decrease Font Size"
                icon={<FaMinus />}
                onClick={() => changeFontSize(2)}
              />
              <MenuButton
                title="Align Left"
                icon={<FaAlignLeft />}
                onClick={() => alignText("Left")}
              />
              <MenuButton
                title="Align Center"
                icon={<FaAlignCenter />}
                onClick={() => alignText("Center")}
              />
              <MenuButton
                title="Align Right"
                icon={<FaAlignRight />}
                onClick={() => alignText("Right")}
              />
            </>
          )}
        />
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="f-col items-center mb-1">
            {resumeData.profilePicture.length > 0 && (
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-700">
                <Image
                  src={resumeData.profilePicture}
                  alt="profile"
                  width={100}
                  height={100}
                  className="object-cover h-full w-full"
                />
              </div>
            )}
            <h1 className="name">{resumeData.name}</h1>
            <p className="profession">{resumeData.position}</p>
            <ContactInfo
              mainclass="flex flex-row gap-1 mb-1 contact"
              linkclass="inline-flex items-center gap-1"
              teldata={resumeData.contactInformation}
              emaildata={resumeData.email}
              addressdata={resumeData.address}
              telicon={<MdPhone />}
              emailicon={<MdEmail />}
              addressicon={<MdLocationOn />}
            />
            <div className="grid grid-cols-3 gap-1">
              {resumeData.socialMedia.map((socialMedia, index) => {
                return (
                  <a
                    href={`http://${socialMedia.link}`}
                    aria-label={socialMedia.socialMedia}
                    key={index}
                    title={socialMedia.socialMedia}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 social-media align-center justify-center "
                  >
                    {icons.map((icon, index) => {
                      if (icon.name === socialMedia.socialMedia.toLowerCase()) {
                        return <span key={index}>{icon.icon}</span>;
                      }
                    })}
                    {socialMedia.link}
                  </a>
                );
              })}
            </div>
          </div>
          <hr className="border-dashed my-2" />
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-1 space-y-2">
              {resumeData.summary.length > 0 && (
                <div className="mb-1">
                  <h2 className="section-title mb-1 border-b-2 border-gray-300">
                    Summary
                  </h2>
                  <p className="content break-words">{resumeData.summary}</p>
                </div>
              )}
              <div>
                {resumeData.education.length > 0 && (
                  <div className="mb-1">
                    <h2 className="section-title mb-1 border-b-2 border-gray-300">
                      Education
                    </h2>
                    {resumeData.education.map((item, index) => (
                      <div key={index} className="mb-1">
                        <p className="content i-bold">{item.degree}</p>
                        <p className="content">{item.school}</p>
                        <DateRange
                          startYear={item.startYear}
                          endYear={item.endYear}
                          id={`education-start-end-date`}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <Droppable droppableId="skills" type="SKILLS">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {resumeData.skills.map((skill, index) => (
                      <Draggable
                        key={`SKILLS-${index}`}
                        draggableId={`SKILLS-${index}`}
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
                            <Skills title={skill.title} skills={skill.skills} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <Language title="Languages" languages={resumeData.languages} />
              <Certification
                title="Certifications"
                certifications={resumeData.certifications}
              />
            </div>
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
                                {(providedList) => (
                                  <ul
                                    className="list-disc ul-padding content"
                                    {...providedList.droppableProps}
                                    ref={providedList.innerRef}
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
                                                  suppressContentEditableWarning
                                                  className="editable-achievement"
                                                  onBlur={(e) =>
                                                    handleKeyAchievementChange(
                                                      e,
                                                      "WORK_EXPERIENCE_KEY_ACHIEVEMENT",
                                                      index,
                                                      subIndex
                                                    )
                                                  }
                                                />
                                              </li>
                                            )}
                                          </Draggable>
                                        ))}
                                    {providedList.placeholder}
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
                                {(providedList) => (
                                  <ul
                                    className="list-disc ul-padding content"
                                    {...providedList.droppableProps}
                                    ref={providedList.innerRef}
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
                                                  suppressContentEditableWarning
                                                  className="editable-achievement"
                                                  onBlur={(e) =>
                                                    handleKeyAchievementChange(
                                                      e,
                                                      "PROJECTS_KEY_ACHIEVEMENT",
                                                      index,
                                                      subIndex
                                                    )
                                                  }
                                                />
                                              </li>
                                            )}
                                          </Draggable>
                                        ))}
                                    {providedList.placeholder}
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
          </div>
        </DragDropContext>
      </A4PageWrapper>
    </div>
  );
};

const A4PageWrapper = ({ children }) => {
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
