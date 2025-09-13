import React, { useContext } from 'react';
import NavigationDots from '../components/NavigationDots';
import { ResumeContext } from '../../../../builder';

const btnStyleClass =
  'p-2 text-white ' +
  'disabled:bg-transparent disabled:text-fuchsia-700 disabled:cursor-not-allowed  ' +
  'bg-fuchsia-700 border-2 border-fuchsia-700 rounded text-xl ';

const Navigator = ({ maxIdx }) => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  return (
    <div className={'flex justify-between w-full bg-fuchsia-500 p-4'}>
      <button
        type="button"
        disabled={resumeData.navigationActiveIdx === 0}
        onClick={() => {
          setResumeData({
            ...resumeData,
            navigationActiveIdx: resumeData.navigationActiveIdx - 1,
          });
        }}
        aria-label="Back"
        className={btnStyleClass}
      >
        Back
      </button>
      <NavigationDots
        count={maxIdx + 1}
        activeIndex={resumeData.navigationActiveIdx}
      />
      <button
        type="button"
        disabled={resumeData.navigationActiveIdx === maxIdx}
        onClick={() => {
          setResumeData({
            ...resumeData,
            navigationActiveIdx: resumeData.navigationActiveIdx + 1,
          });
        }}
        aria-label="Next"
        className={btnStyleClass}
      >
        Next
      </button>
    </div>
  );
};

export default Navigator;
