const DateRange = ({startYear, endYear, id}) => {
  // TODO make as an app param
  const lang = 'en-Us' // 'default'

  if (!startYear) {
    return <p id={id} className="sub-content"></p>;
  }

  const start = new Date(startYear);
  const startStr = `${start.toLocaleString(lang, {month: 'short'})} ${start.getFullYear()}`
  const end = new Date(endYear);
  let endStr = 'Present'

  if (end != "Invalid Date") {
    endStr = `${end.toLocaleString(lang, {month: 'short'})} ${end.getFullYear()}`
  }

  return (
    <p id={id} className="sub-content">
      {startStr} — {endStr}
    </p>
  );
};

export default DateRange;
