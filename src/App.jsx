import React, { useState, useEffect } from 'react';

import useTheme from './hooks/useTheme';
import useAccessibility from './hooks/useAccessibility';
import translations from './data/translations';

// Layout components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Section components
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';

export default function App() {
    const [isMenuActive, setIsMenuActive] = useState(false);
    
    const [language, setLanguage] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedLang = localStorage.getItem('language');
            return savedLang ? savedLang : 'en';
        }
        return 'en';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const { theme, toggleTheme } = useTheme();
    const { isReducedMotion, toggleReducedMotion } = useAccessibility();

    const toggleLanguage = () => setLanguage(prev => (prev === 'en' ? 'hu' : 'en'));
    const toggleMenu = () => setIsMenuActive(!isMenuActive);
    const closeMenu = () => setIsMenuActive(false);

    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const t = translations[language];

    return (
        <div key={language}>
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white p-2 z-[200] rounded">
                Skip to content
            </a>

            <Navbar 
                isMenuActive={isMenuActive}
                toggleMenu={toggleMenu}
                closeMenu={closeMenu}
                toggleLanguage={toggleLanguage}
                language={language}
                toggleTheme={toggleTheme}
                theme={theme}
                isReducedMotion={isReducedMotion}
                toggleReducedMotion={toggleReducedMotion}
                t={t}
            />

            <main id="main-content">
                <Hero t={t} isReducedMotion={isReducedMotion} />
                <About t={t} isReducedMotion={isReducedMotion} />
                <Experience t={t} isReducedMotion={isReducedMotion} />
                <Skills t={t} isReducedMotion={isReducedMotion} />
                <Projects t={t} isReducedMotion={isReducedMotion} />
                <Education t={t} isReducedMotion={isReducedMotion} />
                <Contact t={t} isReducedMotion={isReducedMotion} />
            </main>

            <Footer 
                handleBackToTop={handleBackToTop}
                t={t}
            />
        </div>
    );
}