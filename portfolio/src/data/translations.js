// Dictionary for EN / HU
const translations = {
    en: {
        nav: { about: 'About', experience: 'Experience', skills: 'Skills', projects: 'Projects', education: 'Education', contact: 'Contact' },
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

export default translations;