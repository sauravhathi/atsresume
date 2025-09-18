import React from 'react';
import Builder from '../components/builder';

export const metadata = {
  title: 'Create ATS‑Friendly Resume Online',
  keywords: [
    'ATS resume builder',
    'ATS-friendly resume',
    'resume builder',
    'resume editor',
    'resume maker',
    'free resume builder',
    'resume templates',
    'CV builder',
    'optimize resume for ATS',
    'professional resume',
    'ATSResume',
  ],
};

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#7e2f2f] via-[#a044ff] to-[#fbd7e3]">
      <Builder />
    </div>
  );
};

export default Page;
