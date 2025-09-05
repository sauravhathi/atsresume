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
                    <div className="flex justify-between items-center h-16">
                        <div className="flex space-x-7">
                            <div>
                                <Link href="/" className="flex items-center py-4 px-2 text-gray-700 hover:text-gray-900">
                                    <Image src="/assets/resume-example.jpg" alt="logo" width={50} height={50} />
                                </Link>
                            </div>
                            <div className="hidden md:flex items-center space-x-1">
                                <Link href="/builder" className="py-4 px-2 text-gray-700 hover:text-gray-900">
                                    Builder
                                </Link>
                                <Link href="/templates" className="py-4 px-2 text-gray-700 hover:text-gray-900">
                                    Templates
                                </Link>
                                <Link href="/examples" className="py-4 px-2 text-gray-700 hover:text-gray-900">
                                    Examples
                                </Link>
                            </div>
                        </div>
                    </div>
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
            <About />
        </>
    );
}

const About = () => {
    return (
        <section className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mt-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                        Features
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex bg-fuchsia-600 rounded-lg shadow-lg p-4">
                            <GrOptimize className="text-8xl text-gray-800 mr-4" />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-bold text-gray-800">
                                    ATS-optimized
                                </h1>
                                <p className="text-gray-600">
                                    Our platform uses cutting-edge technology to analyze and optimize your resume for maximum visibility and success with applicant tracking systems.
                                </p>
                            </div>
                        </div>
                        <div className="flex bg-fuchsia-600 rounded-lg shadow-lg p-4">
                            <GrFingerPrint className="text-8xl text-gray-800 mr-4" />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-bold text-gray-800">
                                    Easy to use
                                </h1>
                                <p className="text-gray-600">
                                    Our user-friendly interface makes it easy to build a professional, ATS-friendly resume in minutes. No more frustration or wasted time spent on manual formatting.
                                </p>
                            </div>
                        </div>
                        <div className="flex bg-fuchsia-600 rounded-lg shadow-lg p-4">
                            <MdMoneyOff className="text-8xl text-gray-800 mr-4" />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-bold text-gray-800">
                                    Free
                                </h1>
                                <p className="text-gray-600">
                                    Our platform is completely free to use. No hidden fees or subscriptions. Just create an account and start building your dream resume today!
                                </p>
                            </div>
                        </div>
                        <div className="flex bg-fuchsia-600 rounded-lg shadow-lg p-4">
                            <DiResponsive className="text-8xl text-gray-800 mr-4" />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-bold text-gray-800">
                                    Mobile-friendly
                                </h1>
                                <p className="text-gray-600">
                                    Our platform is fully responsive and mobile-friendly, so you can build your resume on the go. No more waiting until you get home to work on your resume.
                                </p>
                            </div>
                        </div>
                        <div className="flex bg-fuchsia-600 rounded-lg shadow-lg p-4">
                            <FcDataBackup className="text-8xl text-gray-800 mr-4" />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-bold text-gray-800">
                                    Download Backup Data
                                </h1>
                                <p className="text-gray-600">
                                    Download your resume data in JSON format and store it in a safe place. You can use this data to restore your resume in the future.
                                </p>
                            </div>
                        </div>
                        <div className="flex bg-fuchsia-600 rounded-lg shadow-lg p-4">
                            <FcUpload className="text-8xl text-gray-800 mr-4" />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-bold text-gray-800">
                                    Upload Backup Data
                                </h1>
                                <p className="text-gray-600">
                                    Upload your resume data in JSON format to restore your resume. This is useful if you accidentally delete your resume or if you want to switch devices.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

