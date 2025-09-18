import React, { useContext } from 'react';
import { ResumeContext } from '../../../../builder';

const Menu = () => {
  const { resumeData } = useContext(ResumeContext);
  const isOpen = resumeData.menuIsOpened && !resumeData.sidebarIsCollapsed;

  return (
    <div
      className={`menu absolute top-0 left-0 z-50 h-full w-full bg-gray-800 transition-transform duration-300 ease-in-out overflow-hidden ${
        isOpen
          ? 'translate-x-0 pointer-events-auto'
          : '-translate-x-full pointer-events-none'
      }`}
    >
      <ul>
        <li>Templates</li>
        <li>Save resume</li>
        <li>Upload resume</li>
        <li>About</li>
        <li>Contact Us</li>
        {/*<li>News</li>*/}
      </ul>
    </div>
  );
};

export default Menu;
