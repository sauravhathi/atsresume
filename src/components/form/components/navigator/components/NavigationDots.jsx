import React from "react";

const NavigationDots = ({count, activeIndex}) => {
  return (
    <div className="flex gap-2 justify-center items-center">
      {Array.from({length: count}).map((_, idx) => (
        <span
          key={idx}
          className={`
            w-2 h-2 rounded-full transition-all
            ${idx === activeIndex ? "bg-fuchsia-900 w-4 h-4" : "border-2 border-fuchsia-600"}
          `}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
