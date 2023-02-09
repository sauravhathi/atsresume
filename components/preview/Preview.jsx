import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import Skills from "./Skills";
import DateRange from "../utility/DateRange";
import ContactInfo from "./ContactInfo";
import Image from "next/image";
import Link from "next/link";

const Preview = ({ resumeData }) => {
    const icons = [
        { name: "github", icon: <FaGithub /> },
        { name: "linkedin", icon: <FaLinkedin /> },
        { name: "twitter", icon: <FaTwitter /> },
        { name: "facebook", icon: <FaFacebook /> },
        { name: "instagram", icon: <FaInstagram /> },
        { name: "youtube", icon: <FaYoutube /> },
        { name: "website", icon: <CgWebsite /> },
    ]

    return (
        <div className="md:max-w-[60%] sticky top-0 preview p-6 md:overflow-y-scroll md:h-screen">
            <A4PageWrapper>
                <div className="f-col items-center mb-1" >
                    {
                        resumeData.profilePicture.length > 0 &&
                        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-fuchsia-700">
                            <Image
                                src={resumeData.profilePicture}
                                alt="profile"
                                width={100}
                                height={100}
                                className="object-cover h-full w-full"
                            />
                        </div>
                    }
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
                    <div className="inline-flex gap-1 " >
                        {resumeData.socialMedia.map((socialMedia, index) => {
                            return (
                                <a href={`http://${socialMedia.link}`}
                                    aria-label={socialMedia.socialMedia}
                                    key={index}
                                    title={socialMedia.socialMedia} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 social-media">
                                    {icons.map((icon, index) => {
                                        if (icon.name === socialMedia.socialMedia.toLowerCase()) {
                                            return <span key={index}>{icon.icon}</span>;
                                        }
                                    })}
                                    {
                                        socialMedia.link
                                    }
                                </a>
                            );
                        })}
                    </div>
                </div>
                <hr className="border-dashed my-2" />
                {/* single column start */}
                {/* {
            resumeData.summary.length > 0 &&
            <div className="mb-1">
              <h2 className="text-lg font-bold mb-1 border-b-2 border-gray-300">Summary</h2>
              <p className="">{resumeData.summary}</p>
            </div>
          }
          {
            resumeData.education.length > 0 &&
            <div className="">
              <h2 className="text-lg font-bold mb-1 border-b-2 border-gray-300">Education</h2>
              <ul className="">
                {resumeData.education.map((item, index) => (
                  <li key={index} className="mb-1">
                    <p><span className=" font-semibold " >{item.school}</span> <DateRange startYear={item.startYear} endYear={item.endYear} id={`education-start-end-date`} /></p>
                    <p className="text-sm font-semibold" >{item.degree}</p>
                  </li>
                ))}
              </ul>
            </div>
          }
          <h2 className="text-lg font-bold mb-1 border-b-2 border-gray-300">Work Experience</h2>
          <ul>
            {resumeData.workExperience.map((item, index) => (
              <li key={index} className="mb-1">
                <p><span className="font-semibold " >{item.company}</span> <DateRange startYear={item.startYear} endYear={item.endYear} id={`work-experience-start-end-date`} /></p>
                <p className="text-sm font-semibold" >{item.position}</p>
                <ul className="list-disc ">
                  {item.description.split('@').map((item, index) => (
                    <li key={index} className="">{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className="flex-col-gap-2">
            <Skills title="Technical Skills" skills={resumeData.technicalSkills} />
            <Skills title="Soft Skills" skills={resumeData.softSkills} />
            <Skills title="Languages" skills={resumeData.languages} />
            <Skills title="Additional Skills" skills={resumeData.additionalSkills} />
          </div> */}
                {/* single column end */}

                {/* two column start */}
                <div className="flex flex-row gap-6">
                    <div className="w-1/3 space-y-2 ">
                        {
                            resumeData.summary.length > 0 &&
                            <div className="mb-1">
                                <h2 className="section-title mb-1 border-b-2 border-gray-300
                            ">Summary</h2>
                                <p className="content">{resumeData.summary}</p>
                            </div>
                        }
                        <div>
                            {
                                resumeData.education.length > 0 &&
                                <div className="mb-1">
                                    <h2 className="section-title mb-1 border-b-2 border-gray-300">Education</h2>
                                    {resumeData.education.map((item, index) => (
                                        <div key={index} className="mb-1">
                                            <p className="content i-bold" >{item.degree}</p>
                                            <p className="content">{item.school}</p>
                                            <DateRange startYear={item.startYear} endYear={item.endYear} id={`education-start-end-date`} />
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>
                        <div className="flex flex-col gap-2">
                            <Skills title="Technical Skills" skills={resumeData.technicalSkills} />
                            <Skills title="Soft Skills" skills={resumeData.softSkills} />
                            <Skills title="Languages" skills={resumeData.languages} />
                            <Skills title="Additional Skills" skills={resumeData.additionalSkills} />
                            <Skills title="Certifications" skills={resumeData.certifications} />
                        </div>
                    </div>
                    <div className="w-2/3 space-y-2">
                        {
                            resumeData.workExperience.length > 0 &&
                            <div>
                                <h2 className="section-title mb-1 border-b-2 border-gray-300">Work Experience</h2>
                                {resumeData.workExperience.map((item, index) => (
                                    <div key={index} className="mb-1">
                                        <p className="content i-bold">{item.company}</p>
                                        <p className="content">{item.position}</p>
                                        <DateRange startYear={item.startYear} endYear={item.endYear} id={`work-experience-start-end-date`} />
                                        <p className="content">{item.description}</p>
                                        <ul className="list-disc ul-padding content">
                                            {item.keyAchievements && item.keyAchievements.split('\n').map((item, index) => (
                                                <li key={index} className="">{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        }
                        {
                            resumeData.projects.length > 0 &&
                            <div>
                                <h2 className="section-title mb-1 border-b-2 border-gray-300">Projects</h2>
                                {resumeData.projects.map((item, index) => (
                                    <div key={index} className="mb-1">
                                        <p className="content i-bold">{item.name}</p>
                                        <DateRange startYear={item.startYear} endYear={item.endYear} id={`work-experience-start-end-date`} />
                                        <Link href={item.link} target="_blank" rel="noopener noreferrer" className="content">
                                            {item.link}
                                        </Link>
                                        <p className="content">{item.description}</p>
                                        <ul className="list-disc ul-padding content">
                                            {item.keyAchievements && item.keyAchievements.split('\n').map((item, index) => (
                                                <li key={index} className="">{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </A4PageWrapper>
        </div >

    );
};

export default Preview;

const A4PageWrapper = ({ children }) => {
    return (
        <div className="
        w-8.5in h-11in
        ">
            {children}
        </div>
    );
};