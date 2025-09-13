import React from 'react';

const Dropdown = ({ options, activeOption, onChange }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    if (onChange) {
      onChange(value); // return a new active index
    }
  };

  return (
    <div className="w-64">
      <select
        value={activeOption}
        onChange={handleChange}
        className="
          w-full
          p-2
          border
          border-gray-300
          rounded
          bg-white
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
        "
        required
      >
        {options.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
