import React, { useState, useEffect, useRef } from 'react';

const RevealOnScroll = ({ children, className = "", delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );
        
        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <div 
            ref={ref} 
            className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

const Typewriter = ({ text, speed = 60, initialDelay = 0 }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isStarted, setIsStarted] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [isWaiting, setIsWaiting] = useState(initialDelay > 0);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsStarted(true);
                } else {
                    setIsStarted(false);
                    setCurrentText('');
                    setCurrentIndex(0);
                    setIsFinished(false);
                    setIsWaiting(initialDelay > 0);
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );
        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [initialDelay]);

    useEffect(() => {
        if (!isStarted) return;

        let timeout;
        if (isWaiting) {
            timeout = setTimeout(() => {
                setIsWaiting(false);
            }, initialDelay);
        } else if (currentIndex < text.length) {
            timeout = setTimeout(() => {
                setCurrentText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, speed);
        } else {
            setIsFinished(true);
        }
        return () => clearTimeout(timeout);
    }, [currentIndex, isStarted, isWaiting, speed, initialDelay, text]);

    const showCursor = isStarted && !isWaiting && !isFinished;

    return (
        <span ref={ref}>
            {currentText}
            {showCursor && (
                <span className="inline-block w-[0.1em] h-[1em] ml-[2px] bg-cyan-600 dark:bg-[#67e8f9] animate-pulse align-middle"></span>
            )}
        </span>
    );
};

// Dictionary for EN / HU
const translations = {
    en: {
        nav: { about: 'About', experience: 'Experience', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
        hero: {
            eyebrow: 'JUNIOR SOFTWARE DEVELOPER',
            title1: 'Building software ',
            title2: 'that makes sense.',
            desc: "I'm Domonkos Lakics, a Computer Science graduate from Hungary focused on backend development, software architecture, cloud infrastructure and reliable software systems.",
            btnProjects: 'View Projects',
            btnContact: 'Get in Touch'
        },
        about: {
            label: '01 — ABOUT',
            title1: 'A developer who enjoys ',
            title2: 'solving difficult problems.',
            p1: "I'm a Computer Science graduate from Eötvös Loránd University with a strong background in C++/.NET development, backend engineering, cloud infrastructure and software architecture.",
            p2: "During my professional and academic work, I've developed everything from native CAD/BIM software and graphical applications to distributed backend systems, mobile applications and CI/CD infrastructure.",
            p3: "I'm particularly interested in clean architecture, system performance, scalable backend systems and modern DevOps practices.",
            stat1: 'Years programming',
            stat2: 'Major technology areas',
            stat3: '& .NET background'
        },
        experience: {
            label: '02 — EXPERIENCE',
            title1: "Where I've ",
            title2: "worked.",
            jobs: [
                {
                    date: '08/2026 — Present',
                    title: 'Software Engineer',
                    company: 'GE HealthCare',
                    desc: 'Developing C++ and .NET software for diagnostic ultrasound systems.',
                    tags: ['C++', '.NET', 'Software Architecture', 'CI/CD', 'Agile']
                },
                {
                    date: '05/2025 — 07/2026',
                    title: 'Junior C++ / .NET Software Developer',
                    company: 'CadLine Kft. · Research & Development',
                    desc: 'Developed and maintained ARCHLine.XP, a professional CAD/BIM architectural design application.',
                    bullets: [
                        'Developed and refactored core C++ functionality.',
                        'Built MFC-based dialogs and ribbon UI components.',
                        'Implemented 2D drawing and text rendering functionality.',
                        'Designed C++/.NET integration API solutions.',
                        'Independently developed internal .NET SDKs and an Automation Test Runner.',
                        'Contributed to CI/CD and infrastructure modernization.'
                    ],
                    tags: ['C++', '.NET', 'C#', 'MFC', 'CAD/BIM', 'CI/CD']
                },
                {
                    date: '04/2025 — 02/2026',
                    title: 'Animator Coordinator',
                    company: "Students' Union · Faculty of Informatics, ELTE",
                    desc: 'Coordinated university animators, including recruitment, training, communication and team activities.'
                },
                {
                    date: '08/2024 — 04/2025',
                    title: 'Sports Representative',
                    company: "Students' Union · Faculty of Informatics, ELTE",
                    desc: 'Organized sports events, hiking trips, and rowing camps. Promoted university sports life and evaluated sports scholarships.'
                },
                {
                    date: '06/2024 — 06/2025',
                    title: 'Academic Mentor & Senior',
                    company: "Students' Union · Faculty of Informatics, ELTE",
                    desc: 'Mentored approximately 20 first-year students, organized study sessions and coordinated with faculty mentors.'
                }
            ]
        },
        skills: {
            label: '03 — SKILLS',
            title1: 'Technologies I ',
            title2: 'work with.',
            categories: [
                { id: '01', title: 'Languages', tags: ['C#', 'C++', 'Go', 'Python', 'Java', 'Bash', 'SQL'] },
                { id: '02', title: 'Backend & APIs', tags: ['.NET', 'ASP.NET Core', 'EF Core', 'REST', 'SignalR', 'SQL Server', 'PostgreSQL'] },
                { id: '03', title: 'Architecture', tags: ['Clean Code', 'SOLID', 'Design Patterns', 'MVVM', 'MVC', 'Microservices', 'UML'] },
                { id: '04', title: 'Cloud & DevOps', tags: ['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Azure', 'AWS', 'GitHub Actions', 'GitLab CI/CD'] },
                { id: '05', title: 'Observability', tags: ['Prometheus', 'Grafana', 'PromQL', 'k6', 'CloudWatch'] },
                { id: '06', title: 'UI & Graphics', tags: ['.NET MAUI', 'MFC', 'WPF', 'WinForms', 'Avalonia', 'OpenGL', 'SkiaSharp'] }
            ]
        },
        projects: {
            label: '04 — PROJECTS',
            title1: "Things I've ",
            title2: "built.",
            privateRepo: '🔒 Private repository',
            list: [
                {
                    type: 'BSC THESIS · FULL STACK',
                    title: 'Darts Assistant',
                    desc: 'A full-stack Android application for darts players to track matches, analyze performance and play online. Built using a layered architecture with real-time multiplayer synchronization.',
                    tags: ['C#', '.NET MAUI', 'ASP.NET Core', 'EF Core', 'SignalR', 'Azure SQL', 'GitHub Actions'],
                    note: '🔒 Private repository · Architecture walkthrough available'
                },
                {
                    type: 'CLOUD · DEVOPS',
                    title: 'Telemetry API',
                    desc: 'Containerized .NET 9 Minimal API with automated AWS infrastructure, CI/CD and a complete observability stack.',
                    tags: ['.NET 9', 'AWS', 'Terraform', 'Ansible', 'Prometheus', 'Grafana'],
                    link: 'https://gitlab.com/lakicsdomi-portfolio/telemetry-api',
                    linkText: 'GitLab →'
                },
                {
                    type: 'GO · LIBRARY',
                    title: 'Argus',
                    desc: 'A thread-safe logging and telemetry library featuring structured logging, log rotation and a real-time HTTP monitoring dashboard.',
                    tags: ['Go', 'REST API', 'Docker', 'GitHub Actions'],
                    link: 'https://github.com/lakicsdomi/argus',
                    linkText: 'GitHub →'
                },
                {
                    type: 'FULL STACK · CLOUD',
                    title: 'Go Todo App',
                    desc: 'A full-stack Todo application using MVC architecture, dependency injection, containerization, automated testing and Kubernetes deployment.',
                    tags: ['Go', 'MySQL', 'Docker', 'Kubernetes', 'Bootstrap 5'],
                    link: 'https://github.com/lakicsdomi/go-todo-lakicsdomi',
                    linkText: 'GitHub →'
                },
                {
                    type: 'UNIVERSITY · TEAM PROJECT',
                    title: 'Safari Business Simulator',
                    desc: 'Hall of fame project of the Software Engineering course at ELTE. A desktop simulation game developed in an agile Scrum team using WPF and MVVM. Contributed to architecture, UML design, testing and implementation.',
                    tags: ['C#', 'WPF', 'MVVM', 'GitLab', 'xUnit'],
                    link: 'https://szofttech.inf.elte.hu/hall-of-fame/my-safari',
                    linkText: 'Hall of Fame →'
                }
            ]
        },
        education: {
            label: '05 — EDUCATION',
            title1: 'Computer Science ',
            title2: 'graduate.',
            degree: 'Computer Science BSc',
            uni: 'Eötvös Loránd University · Faculty of Informatics',
            honours: 'Graduated with excellent honours.',
            thesis: 'Thesis implementation',
            written: 'Written thesis',
            oral: 'Oral examination'
        },
        contact: {
            label: '06 — CONTACT',
            title1: "Let's build ",
            title2: "something.",
            desc: "Interested in working together or just want to talk?",
            backToTop: "↑ Back to top"
        }
    },
    hu: {
        nav: { about: 'Rólam', experience: 'Tapasztalat', skills: 'Készségek', projects: 'Projektek', contact: 'Kapcsolat' },
        hero: {
            eyebrow: 'JUNIOR SZOFTVERFEJLESZTŐ',
            title1: 'Szoftverek, amiknek ',
            title2: 'értelme van.',
            desc: "Lakics Domonkos vagyok, az ELTE-n végzett programtervező informatikus. Fő fókuszom a backend fejlesztés, szoftverarchitektúrák, felhő alapú infrastruktúrák és a megbízható rendszerek tervezése.",
            btnProjects: 'Projektek',
            btnContact: 'Kapcsolat'
        },
        about: {
            label: '01 — RÓLAM',
            title1: 'Egy fejlesztő, aki ',
            title2: 'szereti a kihívásokat.',
            p1: "Programtervező informatikus diplomámat az Eötvös Loránd Tudományegyetemen szereztem. Erős alapokkal rendelkezem C++ és .NET fejlesztésben, backend technológiákban, felhő infrastruktúrában és szoftverarchitektúrák tervezésében.",
            p2: "Szakmai és egyetemi munkáim során natív CAD/BIM szoftverektől kezdve grafikus alkalmazásokon és mobilalkalmazásokon át egészen az elosztott backend rendszerekig és CI/CD pipeline-okig fejlesztettem.",
            p3: "Különösen érdekel a Clean Architecture, a rendszerteljesítmény-optimalizálás, a jól skálázható backend megoldások és a modern DevOps technológiák.",
            stat1: 'Év programozási tapasztalat',
            stat2: 'Fő technológiai terület',
            stat3: '& .NET háttér'
        },
        experience: {
            label: '02 — TAPASZTALAT',
            title1: "Ahol eddig ",
            title2: "dolgoztam.",
            jobs: [
                {
                    date: '08/2026 — Jelenleg',
                    title: 'Software Engineer',
                    company: 'GE HealthCare',
                    desc: 'C++ és .NET alapú szoftverek fejlesztése diagnosztikai ultrahang rendszerekhez.',
                    tags: ['C++', '.NET', 'Szoftverarchitektúra', 'CI/CD', 'Agile']
                },
                {
                    date: '05/2025 — 07/2026',
                    title: 'Junior C++ / .NET Szoftverfejlesztő',
                    company: 'CadLine Kft. · Kutatás és Fejlesztés',
                    desc: 'Az ARCHLine.XP professzionális CAD/BIM építészeti tervezőszoftver fejlesztése és karbantartása.',
                    bullets: [
                        'Alapvető C++ funkciók fejlesztése és refaktorálása.',
                        'MFC alapú dialógusok és szalag (ribbon) UI elemek építése.',
                        '2D rajzolási és szövegmögjenítési funkciók implementálása.',
                        'C++ / .NET integrációs API megoldások tervezése.',
                        'Belső .NET SDK-k és Automation Test Runner önálló fejlesztése.',
                        'Részvétel a CI/CD és az infrastruktúra modernizálásában.'
                    ],
                    tags: ['C++', '.NET', 'C#', 'MFC', 'CAD/BIM', 'CI/CD']
                },
                {
                    date: '04/2025 — 02/2026',
                    title: 'Animátor Koordinátor',
                    company: "Hallgatói Önkormányzat · ELTE IK",
                    desc: 'Egyetemi animátorok koordinálása, beleértve a toborzást, képzést, kommunikációt és a csapatépítő programokat.'
                },
                {
                    date: '08/2024 — 04/2025',
                    title: 'Sportfelelős',
                    company: "Hallgatói Önkormányzat · ELTE IK",
                    desc: 'Sportesemények, túrák és evezőtáborok szervezése. Az egyetemi sportélet népszerűsítése és a sportösztöndíjak elbírálása.'
                },
                {
                    date: '06/2024 — 06/2025',
                    title: 'Tanulmányi Mentor és Senior',
                    company: "Hallgatói Önkormányzat · ELTE IK",
                    desc: 'Körülbelül 20 elsőéves hallgató mentorálása, közös tanulások szervezése és kapcsolattartás az oktatói mentorokkal.'
                }
            ]
        },
        skills: {
            label: '03 — KÉSZSÉGEK',
            title1: 'Technológiák, amiket ',
            title2: 'használok.',
            categories: [
                { id: '01', title: 'Nyelvek', tags: ['C#', 'C++', 'Go', 'Python', 'Java', 'Bash', 'SQL'] },
                { id: '02', title: 'Backend & API-k', tags: ['.NET', 'ASP.NET Core', 'EF Core', 'REST', 'SignalR', 'SQL Server', 'PostgreSQL'] },
                { id: '03', title: 'Architektúra', tags: ['Clean Code', 'SOLID', 'Design Patterns', 'MVVM', 'MVC', 'Microservices', 'UML'] },
                { id: '04', title: 'Cloud & DevOps', tags: ['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Azure', 'AWS', 'GitHub Actions', 'GitLab CI/CD'] },
                { id: '05', title: 'Observability', tags: ['Prometheus', 'Grafana', 'PromQL', 'k6', 'CloudWatch'] },
                { id: '06', title: 'UI & Grafika', tags: ['.NET MAUI', 'MFC', 'WPF', 'WinForms', 'Avalonia', 'OpenGL', 'SkiaSharp'] }
            ]
        },
        projects: {
            label: '04 — PROJEKTEK',
            title1: "Amiket eddig ",
            title2: "építettem.",
            privateRepo: '🔒 Privát repozitórium',
            list: [
                {
                    type: 'BSC SZAKDOLGOZAT · FULL STACK',
                    title: 'Darts Assistant',
                    desc: 'Egy full-stack Android alkalmazás darts játékosoknak meccsek követésére, elemzésekre és online játékra. Rétegzett architektúrával, valós idejű multiplayer szinkronizációval.',
                    tags: ['C#', '.NET MAUI', 'ASP.NET Core', 'EF Core', 'SignalR', 'Azure SQL', 'GitHub Actions'],
                    note: '🔒 Privát repo · Interjú során szívesen bemutatom az architektúrát'
                },
                {
                    type: 'CLOUD · DEVOPS',
                    title: 'Telemetry API',
                    desc: 'Konténerizált .NET 9 Minimal API automatizált AWS infrastruktúrával, CI/CD-vel és teljes monitorozási (observability) stackkel.',
                    tags: ['.NET 9', 'AWS', 'Terraform', 'Ansible', 'Prometheus', 'Grafana'],
                    link: 'https://gitlab.com/lakicsdomi-portfolio/telemetry-api',
                    linkText: 'GitLab →'
                },
                {
                    type: 'GO · KÖNYVTÁR',
                    title: 'Argus',
                    desc: 'Szálbiztos logolási és telemetria könyvtár strukturált logolással, rotációval és valós idejű HTTP monitorozó dashboarddal.',
                    tags: ['Go', 'REST API', 'Docker', 'GitHub Actions'],
                    link: 'https://github.com/lakicsdomi/argus',
                    linkText: 'GitHub →'
                },
                {
                    type: 'FULL STACK · CLOUD',
                    title: 'Go Todo App',
                    desc: 'Full-stack Todo alkalmazás MVC architektúrával, dependency injection-nel, konténerizációval, teszteléssel és Kubernetes deploymenttel.',
                    tags: ['Go', 'MySQL', 'Docker', 'Kubernetes', 'Bootstrap 5'],
                    link: 'https://github.com/lakicsdomi/go-todo-lakicsdomi',
                    linkText: 'GitHub →'
                },
                {
                    type: 'EGYETEMI CSAPATMUNKA',
                    title: 'Safari Business Simulator',
                    desc: 'Az ELTE Szoftvertechnológia tárgyának Hall of Fame projektje. Egy asztali szimulátor játék, melyet agilis Scrum keretrendszerben készítettünk WPF és MVVM használatával.',
                    tags: ['C#', 'WPF', 'MVVM', 'GitLab', 'xUnit'],
                    link: 'https://szofttech.inf.elte.hu/hall-of-fame/my-safari',
                    linkText: 'Hall of Fame →'
                }
            ]
        },
        education: {
            label: '05 — VÉGZETTSÉG',
            title1: 'Programtervező ',
            title2: 'informatikus.',
            degree: 'Programtervező Informatikus BSc',
            uni: 'Eötvös Loránd Tudományegyetem · Informatikai Kar',
            honours: 'Kiváló minősítésű diploma.',
            thesis: 'Szakdolgozat implementáció',
            written: 'Írásbeli szakdolgozat',
            oral: 'Szóbeli vizsga'
        },
        contact: {
            label: '06 — KAPCSOLAT',
            title1: "Építsünk valami ",
            title2: "szuper dolgot.",
            desc: "Szívesen dolgoznál velem, vagy csak beszélgetnél egyet?",
            backToTop: "↑ Vissza a tetejére"
        }
    }
};

export default function App() {
    const [isMenuActive, setIsMenuActive] = useState(false);
    
    // Language state (default EN)
    const [language, setLanguage] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedLang = localStorage.getItem('language');
            return savedLang ? savedLang : 'en';
        }
        return 'en';
    });

    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) return savedTheme;
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'dark';
    });

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
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

            <header className="sticky top-0 z-[100] h-[76px] flex items-center justify-between px-[5%] md:px-[6%] bg-white/80 dark:bg-[#0b1120]/80 backdrop-blur-[16px] border-b border-slate-200 dark:border-slate-400/10 transition-colors duration-300">
                <a href="#" aria-label="Domonkos Lakics Portfolio Home" className="text-[26px] text-slate-900 dark:text-white font-extrabold no-underline tracking-[-1px] focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-sm outline-none hover:scale-105 active:scale-95 transition-transform">
                    DL<span className="text-cyan-600 dark:text-[#67e8f9]">.</span>
                </a>

                <div className="flex items-center gap-[15px] md:gap-[30px]">
                    <nav 
                        id="main-navigation"
                        aria-label="Main Navigation"
                        className={`
                        ${isMenuActive ? 'absolute top-[76px] left-0 right-0 p-[25px] flex flex-col bg-white dark:bg-[#0b1120] border-b border-slate-200 dark:border-[#263449] shadow-lg' : 'hidden'} 
                        md:static md:flex md:flex-row md:gap-[30px] md:border-none md:p-0 md:bg-transparent md:shadow-none transition-all duration-300
                    `}>
                        {Object.entries(t.nav).map(([key, item]) => (
                            <a 
                                key={key} 
                                href={`#${key}`} 
                                onClick={closeMenu} 
                                className="text-slate-600 dark:text-[#94a3b8] text-[14px] font-medium no-underline transition-all duration-200 hover:text-cyan-600 dark:hover:text-[#67e8f9] hover:-translate-y-0.5 active:scale-95 py-2 md:py-0 focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-sm outline-none"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-[5px] border-l border-slate-300 dark:border-slate-700 pl-[15px] md:pl-[20px]">
                        <button
                            onClick={toggleLanguage}
                            aria-label="Toggle language"
                            className="p-2 font-bold text-[13px] rounded-md text-slate-600 dark:text-[#94a3b8] hover:bg-slate-100 dark:hover:bg-[#1e293b] focus-visible:ring-2 focus-visible:ring-cyan-500 outline-none transition-all duration-300 active:scale-95"
                        >
                            {language === 'en' ? 'HU' : 'EN'}
                        </button>

                        <button
                            onClick={toggleTheme}
                            aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
                            className="p-2 rounded-full text-slate-600 dark:text-[#94a3b8] hover:bg-slate-100 dark:hover:bg-[#1e293b] focus-visible:ring-2 focus-visible:ring-cyan-500 outline-none transition-all duration-300 hover:rotate-12 active:scale-75"
                        >
                            {theme === 'dark' ? '☀️' : '🌙'}
                        </button>
                    </div>

                    <button 
                        className="block md:hidden bg-transparent border-none text-slate-900 dark:text-[#f1f5f9] text-[24px] cursor-pointer focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-sm outline-none active:scale-90 transition-transform" 
                        aria-expanded={isMenuActive}
                        aria-controls="main-navigation"
                        aria-label={isMenuActive ? "Close menu" : "Open menu"}
                        onClick={toggleMenu}
                    >
                        {isMenuActive ? '✕' : '☰'}
                    </button>
                </div>
            </header>

            <main id="main-content">
                {/* HERO */}
                <section aria-labelledby="hero-heading" className="relative min-h-[calc(100vh-76px)] max-w-[1200px] mx-auto px-[6%] py-[80px] md:py-[100px] flex items-center">
                    <RevealOnScroll className="relative z-10 max-w-[760px]">
                        <p className="text-cyan-700 dark:text-[#67e8f9] text-[12px] font-bold tracking-[3px] mb-[20px]">
                            {t.hero.eyebrow}
                        </p>
                        <h1 id="hero-heading" className="text-[clamp(48px,7vw,82px)] leading-[1.02] tracking-[-2px] md:tracking-[-4px] mb-[30px] font-bold text-slate-900 dark:text-white">
                            <Typewriter text={t.hero.title1} speed={60} />
                            <span className="block text-cyan-600 dark:text-[#67e8f9] h-[1.2em]">
                                <Typewriter text={t.hero.title2} speed={60} initialDelay={1100} />
                            </span>
                        </h1>
                        <p className="max-w-[650px] text-slate-600 dark:text-[#94a3b8] text-[18px] leading-[1.8]">
                            {t.hero.desc}
                        </p>
                        <div className="flex flex-wrap gap-[14px] mt-[35px]">
                            <a href="#projects" className="inline-flex items-center justify-center px-[22px] py-[13px] rounded-lg text-sm font-semibold transition-all duration-300 hover:-translate-y-[2px] bg-cyan-600 dark:bg-[#67e8f9] text-white dark:text-[#0b1120] no-underline focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0b1120] outline-none hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] active:scale-95">
                                {t.hero.btnProjects}
                            </a>
                            <a href="#contact" className="inline-flex items-center justify-center px-[22px] py-[13px] rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-slate-100 dark:hover:bg-[#151e2e] border border-slate-300 dark:border-[#263449] text-slate-900 dark:text-[#f1f5f9] no-underline hover:-translate-y-[2px] focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0b1120] outline-none active:scale-95">
                                {t.hero.btnContact}
                            </a>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll delay={200} className="absolute right-[4%] top-1/2 -translate-y-1/2 opacity-80 hidden md:block z-0">
                        <div className="absolute w-[400px] h-[400px] rounded-full bg-cyan-400 dark:bg-[#67e8f9] blur-[140px] opacity-[0.1] dark:opacity-[0.08] animate-pulse"></div>
                        <div className="relative w-[340px] p-[28px] bg-white/75 dark:bg-[#151e2e]/75 backdrop-blur-sm border border-slate-200 dark:border-[#263449] rounded-[14px] shadow-[0_30px_80px_rgba(0,0,0,0.1)] dark:shadow-[0_30px_80px_rgba(0,0,0,0.25)] font-mono text-[14px] text-slate-700 dark:text-[#cbd5e1] hover:scale-105 transition-transform duration-500">
                            <span className="block my-[8px] text-slate-500 dark:text-[#64748b]">
                                // software developer
                            </span>
                            <span className="block my-[8px]">
                                <b className="text-indigo-600 dark:text-[#a5b4fc]">const</b> developer = {'{'}
                            </span>
                            <span className="block my-[8px]">
                                &nbsp;&nbsp;name: <em className="text-cyan-600 dark:text-[#67e8f9] not-italic">"Domonkos"</em>,
                            </span>
                            <span className="block my-[8px]">
                                &nbsp;&nbsp;focus: <em className="text-cyan-600 dark:text-[#67e8f9] not-italic">"backend"</em>,
                            </span>
                            <span className="block my-[8px]">
                                &nbsp;&nbsp;coffee: <em className="text-cyan-600 dark:text-[#67e8f9] not-italic">true</em>
                            </span>
                            <span className="block my-[8px]">
                                {'}'};
                            </span>
                        </div>
                    </RevealOnScroll>
                </section>

                {/* ABOUT */}
                <section id="about" aria-labelledby="about-heading" className="max-w-[1200px] mx-auto px-[6%] py-[90px] md:py-[120px] border-t border-slate-200 dark:border-slate-400/10">
                    <RevealOnScroll className="max-w-[750px] mb-[60px]">
                        <p className="text-cyan-700 dark:text-[#67e8f9] text-[12px] font-bold tracking-[3px] mb-[20px]" aria-hidden="true">{t.about.label}</p>
                        <h2 id="about-heading" className="text-[clamp(34px,5vw,52px)] leading-[1.15] tracking-[-1px] md:tracking-[-2px] font-bold text-slate-900 dark:text-white">
                            <Typewriter text={t.about.title1} speed={30} />
                            <span className="text-cyan-600 dark:text-[#67e8f9]">
                                <Typewriter text={t.about.title2} speed={30} initialDelay={700} />
                            </span>
                        </h2>
                    </RevealOnScroll>

                    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-[40px] md:gap-[80px]">
                        <RevealOnScroll delay={100}>
                            <p className="text-slate-600 dark:text-[#94a3b8] text-[17px] mb-[22px] max-w-[700px]">{t.about.p1}</p>
                            <p className="text-slate-600 dark:text-[#94a3b8] text-[17px] mb-[22px] max-w-[700px]">{t.about.p2}</p>
                            <p className="text-slate-600 dark:text-[#94a3b8] text-[17px] mb-[22px] max-w-[700px]">{t.about.p3}</p>
                        </RevealOnScroll>
                        <RevealOnScroll delay={200}>
                            <ul aria-label="Key Statistics" className="flex flex-col gap-[30px] p-0 m-0 list-none">
                                <li className="border-l-2 border-cyan-500 dark:border-[#67e8f9] pl-[20px] transition-colors hover:border-indigo-500">
                                    <strong className="block text-[36px] text-slate-900 dark:text-[#f1f5f9]">3+</strong>
                                    <span className="text-slate-600 dark:text-[#94a3b8] text-[14px]">{t.about.stat1}</span>
                                </li>
                                <li className="border-l-2 border-cyan-500 dark:border-[#67e8f9] pl-[20px] transition-colors hover:border-indigo-500">
                                    <strong className="block text-[36px] text-slate-900 dark:text-[#f1f5f9]">3</strong>
                                    <span className="text-slate-600 dark:text-[#94a3b8] text-[14px]">{t.about.stat2}</span>
                                </li>
                                <li className="border-l-2 border-cyan-500 dark:border-[#67e8f9] pl-[20px] transition-colors hover:border-indigo-500">
                                    <strong className="block text-[36px] text-slate-900 dark:text-[#f1f5f9]">C++</strong>
                                    <span className="text-slate-600 dark:text-[#94a3b8] text-[14px]">{t.about.stat3}</span>
                                </li>
                            </ul>
                        </RevealOnScroll>
                    </div>
                </section>

                {/* EXPERIENCE */}
                <section id="experience" aria-labelledby="experience-heading" className="max-w-[1200px] mx-auto px-[6%] py-[90px] md:py-[120px] border-t border-slate-200 dark:border-slate-400/10">
                    <RevealOnScroll className="max-w-[750px] mb-[60px]">
                        <p className="text-cyan-700 dark:text-[#67e8f9] text-[12px] font-bold tracking-[3px] mb-[20px]" aria-hidden="true">{t.experience.label}</p>
                        <h2 id="experience-heading" className="text-[clamp(34px,5vw,52px)] leading-[1.15] tracking-[-1px] md:tracking-[-2px] font-bold text-slate-900 dark:text-white">
                            <Typewriter text={t.experience.title1} speed={30} />
                            <span className="text-cyan-600 dark:text-[#67e8f9]">
                                <Typewriter text={t.experience.title2} speed={30} initialDelay={350} />
                            </span>
                        </h2>
                    </RevealOnScroll>

                    <div className="flex flex-col gap-[60px]">
                        {t.experience.jobs.map((job, index) => (
                            <RevealOnScroll key={index} delay={100 * (index + 1)}>
                                <article className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-[10px] md:gap-[50px] group">
                                    <time className="text-cyan-700 dark:text-[#67e8f9] text-[13px] font-semibold pt-[5px] transition-colors group-hover:text-indigo-500">{job.date}</time>
                                    <div className="md:border-l md:border-slate-300 dark:md:border-[#263449] pl-[20px] md:pl-[35px] transition-colors group-hover:border-cyan-500">
                                        <h3 className="text-[25px] mb-[5px] font-bold text-slate-900 dark:text-white">{job.title}</h3>
                                        <p className="text-indigo-600 dark:text-[#a5b4fc] font-medium text-[14px] mb-[18px]">{job.company}</p>
                                        <p className="text-slate-600 dark:text-[#94a3b8] max-w-[750px]">
                                            {job.desc}
                                        </p>
                                        
                                        {job.bullets && (
                                            <ul className="my-[20px] pl-[20px] list-disc marker:text-cyan-600 dark:marker:text-cyan-400">
                                                {job.bullets.map((bullet, i) => (
                                                    <li key={i} className="text-slate-600 dark:text-[#94a3b8] mb-[8px]">{bullet}</li>
                                                ))}
                                            </ul>
                                        )}
                                        
                                        {job.tags && (
                                            <ul aria-label="Technologies used" className="flex flex-wrap gap-[7px] p-0 m-0 mt-[20px] list-none">
                                                {job.tags.map(tag => (
                                                    <li key={tag} className="px-[9px] py-[6px] bg-slate-100 dark:bg-[#1e293b] rounded-[5px] text-slate-700 dark:text-[#cbd5e1] text-[11px] font-medium transition-transform hover:-translate-y-1">{tag}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </article>
                            </RevealOnScroll>
                        ))}
                    </div>
                </section>

                {/* SKILLS */}
                <section id="skills" aria-labelledby="skills-heading" className="bg-slate-100 dark:bg-[#111827] py-[90px] md:py-[120px] transition-colors duration-300">
                    <div className="max-w-[1200px] mx-auto px-[6%]">
                        <RevealOnScroll className="max-w-[750px] mb-[60px]">
                            <p className="text-cyan-700 dark:text-[#67e8f9] text-[12px] font-bold tracking-[3px] mb-[20px]" aria-hidden="true">{t.skills.label}</p>
                            <h2 id="skills-heading" className="text-[clamp(34px,5vw,52px)] leading-[1.15] tracking-[-1px] md:tracking-[-2px] font-bold text-slate-900 dark:text-white">
                                <Typewriter text={t.skills.title1} speed={30} />
                                <span className="text-cyan-600 dark:text-[#67e8f9]">
                                    <Typewriter text={t.skills.title2} speed={30} initialDelay={475} />
                                </span>
                            </h2>
                        </RevealOnScroll>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
                            {t.skills.categories.map((skill, index) => (
                                <RevealOnScroll key={skill.id} delay={index * 100}>
                                    <article className="h-full p-[28px] bg-white dark:bg-[#151e2e] border border-slate-200 dark:border-[#263449] rounded-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 dark:hover:border-[#67e8f9]/40 hover:shadow-xl dark:hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)] shadow-sm dark:shadow-none">
                                        <div className="text-cyan-700 dark:text-[#67e8f9] text-[12px] font-bold mb-[25px]" aria-hidden="true">{skill.id}</div>
                                        <h3 className="text-[19px] mb-[20px] font-bold text-slate-900 dark:text-white">{skill.title}</h3>
                                        <ul aria-label={`Skills in ${skill.title}`} className="flex flex-wrap gap-[7px] p-0 m-0 list-none">
                                            {skill.tags.map(tag => (
                                                <li key={tag} className="px-[9px] py-[6px] bg-slate-50 dark:bg-[#1e293b] border border-slate-100 dark:border-transparent rounded-[5px] text-slate-700 dark:text-[#cbd5e1] text-[11px] font-medium transition-colors hover:bg-slate-200 dark:hover:bg-slate-700">{tag}</li>
                                            ))}
                                        </ul>
                                    </article>
                                </RevealOnScroll>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROJECTS */}
                <section id="projects" aria-labelledby="projects-heading" className="max-w-[1200px] mx-auto px-[6%] py-[90px] md:py-[120px]">
                    <RevealOnScroll className="max-w-[750px] mb-[60px]">
                        <p className="text-cyan-700 dark:text-[#67e8f9] text-[12px] font-bold tracking-[3px] mb-[20px]" aria-hidden="true">{t.projects.label}</p>
                        <h2 id="projects-heading" className="text-[clamp(34px,5vw,52px)] leading-[1.15] tracking-[-1px] md:tracking-[-2px] font-bold text-slate-900 dark:text-white">
                            <Typewriter text={t.projects.title1} speed={30} />
                            <span className="text-cyan-600 dark:text-[#67e8f9]">
                                <Typewriter text={t.projects.title2} speed={30} initialDelay={360} />
                            </span>
                        </h2>
                    </RevealOnScroll>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                        {t.projects.list.map((proj, index) => (
                            <RevealOnScroll key={index} delay={(index + 1) * 100} className={index === 0 ? "md:col-span-2" : ""}>
                                <article className={`relative h-full min-h-[380px] flex flex-col justify-between p-[35px] bg-white dark:bg-[#151e2e] border border-slate-200 dark:border-[#263449] rounded-[14px] overflow-hidden transition-all duration-300 hover:-translate-y-[6px] hover:border-cyan-300 dark:hover:border-[#67e8f9]/40 hover:shadow-xl dark:hover:shadow-[0_10px_40px_rgba(6,182,212,0.1)] shadow-sm dark:shadow-none ${index === 0 ? 'dark:bg-[radial-gradient(circle_at_90%_20%,rgba(103,232,249,0.08),transparent_40%),_#151e2e]' : ''}`}>
                                    <div className="text-cyan-700 dark:text-[#67e8f9] text-[13px] font-bold" aria-hidden="true">0{index + 1}</div>
                                    <div className="max-w-[650px] mt-4 mb-4 md:mt-0">
                                        <p className="text-slate-500 dark:text-[#94a3b8] text-[11px] font-bold tracking-[2px] mb-[8px] uppercase">{proj.type}</p>
                                        <h3 className="text-[30px] mb-[15px] tracking-[-1px] font-bold text-slate-900 dark:text-white">{proj.title}</h3>
                                        <p className="text-slate-600 dark:text-[#94a3b8] mb-[20px] max-w-[650px]">{proj.desc}</p>
                                        
                                        <ul aria-label="Technologies used" className="flex flex-wrap gap-[7px] p-0 m-0 list-none">
                                            {proj.tags.map(tag => (
                                                <li key={tag} className="px-[9px] py-[6px] bg-slate-50 dark:bg-[#1e293b] border border-slate-100 dark:border-transparent rounded-[5px] text-slate-700 dark:text-[#cbd5e1] text-[11px] font-medium">{tag}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    {proj.link ? (
                                        <a href={proj.link} target="_blank" rel="noopener noreferrer" className="inline-block self-start text-cyan-600 dark:text-[#67e8f9] text-[13px] font-semibold no-underline mt-auto focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-sm outline-none transition-transform hover:translate-x-2 active:scale-95">
                                            {proj.linkText} <span className="sr-only">(opens in a new tab)</span>
                                        </a>
                                    ) : (
                                        <span className="text-slate-500 dark:text-[#94a3b8] text-[13px] mt-6 md:mt-0 opacity-80 font-medium">
                                            {proj.note}
                                        </span>
                                    )}
                                </article>
                            </RevealOnScroll>
                        ))}
                    </div>
                </section>

                {/* EDUCATION */}
                <section id="education" aria-labelledby="education-heading" className="max-w-[1200px] mx-auto px-[6%] py-[90px] md:py-[120px] border-t border-slate-200 dark:border-slate-400/10">
                    <RevealOnScroll className="max-w-[750px] mb-[60px]">
                        <p className="text-cyan-700 dark:text-[#67e8f9] text-[12px] font-bold tracking-[3px] mb-[20px]" aria-hidden="true">{t.education.label}</p>
                        <h2 id="education-heading" className="text-[clamp(34px,5vw,52px)] leading-[1.15] tracking-[-1px] md:tracking-[-2px] font-bold text-slate-900 dark:text-white">
                            <Typewriter text={t.education.title1} speed={30} />
                            <span className="text-cyan-600 dark:text-[#67e8f9]">
                                <Typewriter text={t.education.title2} speed={30} initialDelay={520} />
                            </span>
                        </h2>
                    </RevealOnScroll>

                    <RevealOnScroll delay={100}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[80px] p-[25px] md:p-[40px] bg-white dark:bg-[#151e2e] border border-slate-200 dark:border-[#263449] rounded-[14px] shadow-sm dark:shadow-none hover:border-cyan-300 dark:hover:border-[#67e8f9]/40 transition-colors duration-300">
                            <div>
                                <time className="block text-cyan-700 dark:text-[#67e8f9] text-[13px] font-bold mb-[10px]">2023 — 2026</time>
                                <h3 className="text-[30px] mb-[5px] font-bold text-slate-900 dark:text-white">{t.education.degree}</h3>
                                <p className="text-indigo-600 dark:text-[#a5b4fc] font-medium text-[14px] mb-[18px]">{t.education.uni}</p>
                            </div>
                            <div className="text-slate-600 dark:text-[#94a3b8]">
                                <p className="mb-[10px]">{t.education.honours}</p>
                                <ul aria-label="Thesis and Exam results" className="p-0 m-0 list-none">
                                    <li className="mb-[10px]">{t.education.thesis}: <strong className="text-cyan-700 dark:text-[#67e8f9]">5/5</strong></li>
                                    <li className="mb-[10px]">{t.education.written}: <strong className="text-cyan-700 dark:text-[#67e8f9]">5/5</strong></li>
                                    <li className="mb-[10px]">{t.education.oral}: <strong className="text-cyan-700 dark:text-[#67e8f9]">5/5</strong></li>
                                </ul>
                            </div>
                        </div>
                    </RevealOnScroll>
                </section>

                {/* CONTACT */}
                <section id="contact" aria-labelledby="contact-heading" className="text-center px-[6%] py-[150px] bg-slate-100 dark:bg-transparent dark:bg-[radial-gradient(circle_at_center,rgba(103,232,249,0.08),transparent_50%)] transition-colors duration-300 overflow-hidden">
                    <RevealOnScroll>
                        <p className="text-cyan-700 dark:text-[#67e8f9] text-[12px] font-bold tracking-[3px] mb-[20px]" aria-hidden="true">{t.contact.label}</p>
                        <h2 id="contact-heading" className="text-[clamp(42px,6vw,70px)] tracking-[-3px] mb-[15px] font-bold text-slate-900 dark:text-white">
                            <Typewriter text={t.contact.title1} speed={30} />
                            <span className="text-cyan-600 dark:text-[#67e8f9]">
                                <Typewriter text={t.contact.title2} speed={30} initialDelay={360} />
                            </span>
                        </h2>
                        <p className="text-slate-600 dark:text-[#94a3b8] mb-[30px]">{t.contact.desc}</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-[15px]">
                            <a href="mailto:domonkos.lakics@gmail.com" className="inline-flex items-center justify-center px-[22px] py-[13px] rounded-lg text-sm font-semibold transition-all duration-300 hover:-translate-y-[2px] bg-cyan-600 dark:bg-[#67e8f9] text-white dark:text-[#0b1120] no-underline focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0b1120] outline-none hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] active:scale-95">
                                domonkos.lakics@gmail.com
                            </a>
                        </div>
                        <div className="mt-[35px] flex flex-wrap justify-center gap-[20px] md:gap-[30px]">
                            <a href="tel:+36304813946" className="text-slate-600 dark:text-[#94a3b8] font-medium text-[14px] no-underline transition-colors duration-200 hover:text-cyan-600 dark:hover:text-[#67e8f9] focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-sm outline-none hover:-translate-y-0.5 active:scale-95 transition-transform inline-block">
                                +36 30 481 3946
                            </a>
                            <a href="https://www.linkedin.com/in/domonkos-lakics/" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-[#94a3b8] font-medium text-[14px] no-underline transition-colors duration-200 hover:text-cyan-600 dark:hover:text-[#67e8f9] focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-sm outline-none hover:-translate-y-0.5 active:scale-95 transition-transform inline-block">
                                LinkedIn <span className="sr-only">(opens in a new tab)</span>
                            </a>
                            <a href="https://github.com/lakicsdomi" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-[#94a3b8] font-medium text-[14px] no-underline transition-colors duration-200 hover:text-cyan-600 dark:hover:text-[#67e8f9] focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-sm outline-none hover:-translate-y-0.5 active:scale-95 transition-transform inline-block">
                                GitHub <span className="sr-only">(opens in a new tab)</span>
                            </a>
                        </div>
                    </RevealOnScroll>
                </section>
            </main>

            <footer className="border-t border-slate-200 dark:border-[#263449] py-[30px] px-[6%] bg-white dark:bg-transparent transition-colors duration-300">
                <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-[20px] md:gap-0">
                    <a href="#" aria-label="Back to home" className="text-[26px] text-slate-900 dark:text-white font-extrabold no-underline tracking-[-1px] focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-sm outline-none hover:scale-105 active:scale-95 transition-transform">
                        DL<span className="text-cyan-600 dark:text-[#67e8f9]">.</span>
                    </a>
                    <p className="text-slate-500 dark:text-[#94a3b8] text-[13px] font-medium">© 2026 Domonkos Lakics</p>
                    <button 
                        onClick={handleBackToTop}
                        aria-label="Scroll back to top of page"
                        className="bg-transparent border-none text-slate-500 dark:text-[#94a3b8] cursor-pointer text-[13px] font-medium hover:text-cyan-600 dark:hover:text-[#67e8f9] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-sm outline-none hover:-translate-y-1 active:scale-95"
                    >
                        {t.contact.backToTop}
                    </button>
                </div>
            </footer>
        </div>
    );
}