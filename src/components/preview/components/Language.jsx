const Language = ({title, languages}) => {
  return (
    languages.length > 0 && (
      <div>
        <h2 className="section-title mb-1 border-b-2 border-gray-300">
          {title}
        </h2>
        {languages.map((lang, index) => {
          const languageStr = `${lang.name || "Noname"}: ${lang.level}`
          return (
            <p
              key={index}
              className="sub-content"
            >{languageStr}</p>)
        })}
      </div>
    )
  );
};

export default Language;
