import Image from "next/image";
import ContactInfo from "../components/ContactInfo";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

const Header = ({ resumeData, icons }) => {
  return (
    <div className="f-col items-center mb-1">
      {resumeData.profilePicture.length > 0 && (
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-fuchsia-700">
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
  );
};

export default Header;
