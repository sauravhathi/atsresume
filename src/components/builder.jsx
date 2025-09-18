'use client';

import React, { createContext, useState } from 'react';
import Preview from '../components/preview/ui/Preview';
import DefaultResumeData from '../components/utility/DefaultResumeData';
import dynamic from 'next/dynamic';
import Form from '../components/form/ui/Form';

const ResumeContext = createContext(DefaultResumeData);

// server side rendering false
const Print = dynamic(() => import('../components/utility/WinPrint'), {
  ssr: false,
});

export default function Builder() {
  const [resumeData, setResumeData] = useState(DefaultResumeData);

  const handleChange = (e) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ResumeContext.Provider
        value={{
          resumeData,
          setResumeData,
          handleChange,
        }}
      >
        <div className="f-col md:flex-row justify-evenly w-full md:h-screen">
          <Form />
          <Preview />
        </div>
        <Print />
      </ResumeContext.Provider>
    </>
  );
}
export { ResumeContext };
