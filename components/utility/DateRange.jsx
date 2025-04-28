const DateRange = ({ startYear, endYear, id }) => {
    if (!startYear) {
        return <p id={id} className="sub-content"></p>;
    }

    const start = new Date(startYear);
    // Use 'long' for full month name, which is common and readable
    const startMonth = start.toLocaleString('default', { month: 'long' });
    const startFullYear = start.getFullYear();

    let endString = 'Present';
    if (endYear) {
        const end = new Date(endYear);
        if (end.toString() !== "Invalid Date") { // Check if end date is valid
            const endMonth = end.toLocaleString('default', { month: 'long' });
            const endFullYear = end.getFullYear();
            endString = `${endMonth} ${endFullYear}`;
        }
    }

    return (
        <p id={id} className="sub-content">
            {startMonth} {startFullYear} - {endString}
        </p>
    );
};

export default DateRange;
