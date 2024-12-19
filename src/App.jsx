import React from 'react';
import { Helmet } from 'react-helmet-async'; // Import react-helmet-async for meta tags
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>Plixi - Modern UI Templates</title>
        <meta name="description" content="Plixi offers high-quality modern UI templates for developers and designers." />
        <meta name="keywords" content="React, Vite, UI templates, web design, modern UI kits" />
        <meta name="author" content="Plixi Templates" />
        
        {/* Open Graph Meta Tags (for social sharing) */}
        <meta property="og:title" content="Plixi - Modern UI Templates" />
        <meta property="og:description" content="Plixi offers modern UI templates for developers to build beautiful websites." />
        <meta property="og:image" content="/assets/og-image.png" />
        <meta property="og:url" content="https://plixi-template.netlify.app/" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://plixi-template.netlify.app/" />
        
        {/* Structured Data (JSON-LD for SEO) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Plixi - Modern UI Templates",
              "description": "Plixi offers high-quality modern UI templates for developers and designers.",
              "url": "https://plixi-template.netlify.app/",
              "publisher": {
                "@type": "Organization",
                "name": "Plixi Templates",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://plixi-template.netlify.app/assets/logo.png"
                }
              }
            }
          `}
        </script>
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#123456" />
      </Helmet>
      
      <div className="overflow-x-hidden">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
