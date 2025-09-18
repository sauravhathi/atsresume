import React, { useCallback, useContext, useEffect } from 'react';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import { ResumeContext } from './builder';

const FormCloseOpenBtn = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const handleChange = () => {
    setResumeData((prev) => ({
      ...prev,
      sidebarIsCollapsed: !prev.sidebarIsCollapsed,
    }));
  };

  const resizeForm = useCallback(() => {
    const mdBreakpoint = 768;
    if (window.innerWidth >= mdBreakpoint) return;
    setResumeData((prev) => ({
      ...prev,
      sidebarIsCollapsed: false,
    }));
  }, [setResumeData]);

  useEffect(() => {
    window.addEventListener('resize', resizeForm);
    return () => {
      window.removeEventListener('resize', resizeForm);
    };
  }, [resizeForm]);

  return (
    <button
      type="button"
      aria-label="Form Open/Close"
      className={
        'absolute top-[5px] right-0 translate-x-1/2 ' +
        'font-bold rounded-full ' +
        'bg-white text-fuchsia-600 shadow-lg border-2 border-white ' +
        'hidden md:block ' +
        'z-10'
      }
      onClick={handleChange}
    >
      {resumeData.sidebarIsCollapsed ? (
        <BsFillArrowRightCircleFill className="w-6 h-6" title="Form Open" />
      ) : (
        <BsFillArrowLeftCircleFill className="w-6 h-6" title="Form Close" />
      )}
    </button>
  );
};

export default FormCloseOpenBtn;
