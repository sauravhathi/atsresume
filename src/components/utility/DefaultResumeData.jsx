import en from "../../messages/en.json";
import fr from "../../messages/fr.json";

const messagesMap = {
  en,
  fr,
};

// Helper function to get nested translation value
function getTranslation(messages, key) {
  const keys = key.split('.');
  let value = messages;
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key;
    }
  }
  return value;
}

export function getDefaultResumeData(locale = 'en') {
  const messages = messagesMap[locale] || en;
  
  return JSON.parse(JSON.stringify({
    name: getTranslation(messages, "defaultResume.name"),
    position: getTranslation(messages, "defaultResume.position"),
    contactInformation: getTranslation(messages, "defaultResume.contactInformation"),
    email: getTranslation(messages, "defaultResume.email"),
    address: getTranslation(messages, "defaultResume.address"),
    profilePicture: "",
    socialMedia: [
      {
        socialMedia: getTranslation(messages, "defaultResume.socialMedia.github"),
        link: "github.com/bedivere-lea",
      },
      {
        socialMedia: getTranslation(messages, "defaultResume.socialMedia.linkedin"),
        link: "linkedin.com/in/bedivere-lea",
      },
      {
        socialMedia: getTranslation(messages, "defaultResume.socialMedia.website"),
        link: "bedivere-lea.github.io",
      },
    ],
    summary: getTranslation(messages, "defaultResume.summary"),
    education: [
      {
        "school": getTranslation(messages, "defaultResume.education.school"),
        "degree": getTranslation(messages, "defaultResume.education.degree"),
        "startYear": "2020-08-20",
        "endYear": "2024-07-01"
      },
    ],
    workExperience: getTranslation(messages, "defaultResume.workExperience"),
    projects: [],
    skills: [
      {
        title: getTranslation(messages, "defaultResume.skills.technicalSkills"),
        skills: getTranslation(messages, "defaultResume.skills.technical")
      },
      {
        title: getTranslation(messages, "defaultResume.skills.softSkills"),
        skills: getTranslation(messages, "defaultResume.skills.soft")
      },
      {
        title: getTranslation(messages, "defaultResume.skills.additionalSkills"),
        skills: getTranslation(messages, "defaultResume.skills.additional")
      }
    ],
    languages: getTranslation(messages, "defaultResume.languages"),
    certifications: getTranslation(messages, "defaultResume.certifications"),
  }));
}

export default getDefaultResumeData();
