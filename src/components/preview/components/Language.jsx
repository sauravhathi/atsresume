const Language = ({ title, languages }) => {
  return (
    languages.length > 0 && (
      <div>
        <h2 className="section-title mb-1 border-b-2 border-gray-300">
          {title}
        </h2>
        <p className="sub-content">{languages.join(", ")}</p>
      </div>
    )
  );
};

export default Language;