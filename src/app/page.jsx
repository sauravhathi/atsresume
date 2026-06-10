import React from 'react';
import Builder from "../components/builder";
import Link from 'next/link';

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Builder/>
      <footer className="mt-auto bg-gray-800 text-white py-4 text-center text-sm exclude-print">
        <div className="flex justify-center gap-6">
          <Link href="https://github.com/sundar-prakash" className="hover:text-indigo-400 transition-colors">
            Resume Checker
          </Link>
          <Link href="https://github.com/sundar-prakash/atsresume" className="hover:text-indigo-400 transition-colors">
            GitHub Project
          </Link>
        </div>
        <div className="mt-2 text-gray-400">
          Created by <Link href="https://github.com/sundar-prakash" className="hover:text-indigo-400">Sundar Prakash</Link>
        </div>
      </footer>
    </div>
  );
};

export default Page;
