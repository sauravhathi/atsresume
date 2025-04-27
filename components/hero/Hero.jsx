import Link from "next/link";
import { GrOptimize, GrFingerPrint } from "react-icons/gr";
import { MdMoneyOff } from "react-icons/md";
import { DiResponsive } from "react-icons/di";
import { FcDataBackup, FcUpload } from "react-icons/fc";
import Image from "next/image";
import { Typewriter } from 'react-simple-typewriter'

export default function Hero() {
    return (
        <>
            <section className="bg-gray-100">
                <div className="h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col justify-center items-center h-full text-center">
                        <h1 className="text-6xl font-bold text-gray-800 mb-2">
                            Get hired with an ATS <br />
                            <span className="text-fuchsia-700">
                                <Typewriter
                                    words={['optimized', 'Perfect', 'Professional']}
                                    loop={0}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={100}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                            <br />
                            Resume.
                        </h1>
                        <p className="text-gray-600 mb-4">
                            ATSResume is an innovative resume builder that helps job seekers create a professional and optimized resume for applicant tracking systems. Our platform uses cutting-edge technology to analyze and optimize your resume for maximum visibility and success. Say goodbye to manual formatting frustration and wasted time, and Create your winning resume with ATSResume today and get noticed by employers.
                        </p>
                        <Link href="/builder" className="inline-block bg-fuchsia-700 text-fuchsia-600 px-6 py-3 rounded-lg font-bold text-lg hover:bg-fuchsia-600 transition duration-200 hover:-translate-y-1 transform hover:shadow-lg">
                            Make My Resume
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
