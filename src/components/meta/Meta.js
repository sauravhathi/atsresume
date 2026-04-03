import Head from "next/head";

export default function Meta({ title, keywords, description, locale = "en" }) {
    const homepage = "https://atsresume.vercel.app/";
    const logo = "https://atsresume.vercel.app/assets/logo.png";
    const fevicon = "https://atsresume.vercel.app/assets/favicon.ico";

    function isiteJsonLd() {
        return {
            __html: `{
                "@context": "https://schema.org",
                "@type": "Organization",
                "url": ${homepage},
                "logo": ${logo},
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91 9999999999",
                    "contactType": "customer service"
                },
                "image": ${logo},
                "description": ${description},
                "founder": "Saurav Hathi",
                "foundingDate": "2023",
                "foundingLocation": "IN",
                "email": "xyz@gmail.com",
                "telephone": "+91 9999999999",
                "areaServed": "IN",
                "keywords": ${keywords},
                "mainEntityOfPage": ${homepage},
                "knowsAbout": ${keywords},
                "knowsLanguage": "English",
                "memberOf": "Saurav Hathi",
                "owns": "Saurav Hathi",
                "publishingPrinciples": ${homepage},
                "slogan": "Get hired with an ATS-optimized resume"
            }`
        }
    }


    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta name="language" content={locale} />
            <meta charSet="utf-8" />
            <link rel="icon" href={fevicon} />
            <title>{title}</title>
            <meta type="copyright" content="ATSResume" />
            <meta type="author" content="Saurav Hathi" />
            {/* hreflang for multilingual SEO */}
            <link rel="alternate" hrefLang="en" href={homepage} />
            <link rel="alternate" hrefLang="fr" href={`${homepage}fr/`} />
            <link rel="alternate" hrefLang="x-default" href={homepage} />
            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={homepage} />
            <meta property="og:title" content={title} />
            <meta
                property="og:description"
                content={description} />
            <meta property="og:image" content={logo} />
            <meta property="og:locale" content={locale === "fr" ? "fr_FR" : "en_US"} />
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={homepage} />
            <meta property="twitter:title" content={title} />
            <meta
                property="twitter:description"
                content={description} />
            <meta property="twitter:image" content={logo} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={isiteJsonLd()}
                key="isiteJsonLd"
            />
        </Head>
    );
}