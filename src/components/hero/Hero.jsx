"use client";

import Link from "next/link";
import { GrOptimize, GrFingerPrint } from "react-icons/gr";
import { MdMoneyOff } from "react-icons/md";
import { DiResponsive } from "react-icons/di";
import { FcDataBackup, FcUpload } from "react-icons/fc";
import Image from "next/image";
import { Typewriter } from 'react-simple-typewriter'
import { useTranslations } from "../../i18n/I18nProvider";

export default function Hero() {
    const { t } = useTranslations();
    
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
                                    {t("nav.builder")}
                                </Link>
                                <Link href="/templates" className="py-4 px-2 text-gray-700 hover:text-gray-900">
                                    {t("nav.templates")}
                                </Link>
                                <Link href="/examples" className="py-4 px-2 text-gray-700 hover:text-gray-900">
                                    {t("nav.examples")}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center h-full text-center">
                        <h1 className="text-6xl font-bold text-gray-800 mb-2">
                            {t("hero.title")} <br />
                            <span className="text-fuchsia-700">
                                <Typewriter
                                    words={[
                                        t("hero.titleHighlight.optimized"),
                                        t("hero.titleHighlight.perfect"),
                                        t("hero.titleHighlight.professional")
                                    ]}
                                    loop={0}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={100}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                            <br />
                            {t("hero.titleSuffix")}
                        </h1>
                        <p className="text-gray-600 mb-4">
                            {t("hero.subtitle")}
                        </p>
                        <Link href="/builder" className="inline-block bg-fuchsia-700 text-fuchsia-600 px-6 py-3 rounded-lg font-bold text-lg hover:bg-fuchsia-600 transition duration-200 hover:-translate-y-1 transform hover:shadow-lg">
                            {t("hero.cta")}
                        </Link>
                    </div>
                </div>
            </section>
            <About />
        </>
    );
}

const About = () => {
    const { t } = useTranslations();
    
    return (
        <section className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mt-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                        {t("about.features")}
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex bg-fuchsia-600 rounded-lg shadow-lg p-4">
                            <GrOptimize className="text-8xl text-gray-800 mr-4" />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-bold text-gray-800">
                                    {t("about.atsOptimized.title")}
                                </h1>
                                <p className="text-gray-600">
                                    {t("about.atsOptimized.description")}
                                </p>
                            </div>
                        </div>
                        <div className="flex bg-fuchsia-600 rounded-lg shadow-lg p-4">
                            <GrFingerPrint className="text-8xl text-gray-800 mr-4" />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-bold text-gray-800">
                                    {t("about.easyToUse.title")}
                                </h1>
                                <p className="text-gray-600">
                                    {t("about.easyToUse.description")}
                                </p>
                            </div>
                        </div>
                        <div className="flex bg-fuchsia-600 rounded-lg shadow-lg p-4">
                            <MdMoneyOff className="text-8xl text-gray-800 mr-4" />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-bold text-gray-800">
                                    {t("about.free.title")}
                                </h1>
                                <p className="text-gray-600">
                                    {t("about.free.description")}
                                </p>
                            </div>
                        </div>
                        <div className="flex bg-fuchsia-600 rounded-lg shadow-lg p-4">
                            <DiResponsive className="text-8xl text-gray-800 mr-4" />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-bold text-gray-800">
                                    {t("about.mobileFriendly.title")}
                                </h1>
                                <p className="text-gray-600">
                                    {t("about.mobileFriendly.description")}
                                </p>
                            </div>
                        </div>
                        <div className="flex bg-fuchsia-600 rounded-lg shadow-lg p-4">
                            <FcDataBackup className="text-8xl text-gray-800 mr-4" />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-bold text-gray-800">
                                    {t("about.downloadBackup.title")}
                                </h1>
                                <p className="text-gray-600">
                                    {t("about.downloadBackup.description")}
                                </p>
                            </div>
                        </div>
                        <div className="flex bg-fuchsia-600 rounded-lg shadow-lg p-4">
                            <FcUpload className="text-8xl text-gray-800 mr-4" />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-bold text-gray-800">
                                    {t("about.uploadBackup.title")}
                                </h1>
                                <p className="text-gray-600">
                                    {t("about.uploadBackup.description")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
