
const Skills = ({ title, skills }) => {
    return (
      skills.length > 0 &&
      <div>
        <h2 className="section-title mb-1 border-b-2 border-gray-300">{title}</h2>
        <p className="sub-content">
          {skills.join(', ')}
        </p>
      </div>
    );
  };

export default Skills;