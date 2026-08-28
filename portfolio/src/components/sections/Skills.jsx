import React from 'react';
import { Code2, Server, DraftingCompass, CloudCog, ChartSpline, MonitorSmartphone, Wrench } from 'lucide-react';
import Typewriter from '../ui/Typewriter';
import RevealOnScroll from '../ui/RevealOnScroll';

const skillIcons = [
    <Code2 size={28}/>,             // Languages
    <Server size={28}/>,            // Backend & APIs
    <DraftingCompass size={28}/>,   // Architecture
    <CloudCog size={28}/>,          // Cloud & DevOps
    <ChartSpline size={28}/>,       // Observability
    <MonitorSmartphone size={28}/>, // UI & Graphics
];

export default function Skills({ t, isReducedMotion }) {
    return (
        <section id="skills" aria-labelledby="skills-heading" className="bg-slate-100 dark:bg-[#111827] py-[90px] md:py-[120px] transition-colors duration-300">
            <div className="max-w-[1200px] mx-auto px-[6%]">
                <RevealOnScroll className="max-w-[750px] mb-[60px]" isReducedMotion={isReducedMotion}>
                    <p className="flex items-center text-cyan-700 dark:text-[#67e8f9] text-[14px] md:text-[15px] font-bold tracking-[3px] mb-[20px] uppercase" aria-hidden="true">
                        <Wrench size={18} className="mr-[8px]"/> 
                        <span>{t.skills.label}</span>
                    </p>
                    <h2 id="skills-heading" className="text-[clamp(34px,5vw,52px)] leading-[1.15] tracking-[-1px] md:tracking-[-2px] font-bold text-slate-900 dark:text-white min-h-[1.2em] md:min-h-[1.1em]">
                        <span className="min-h-[1.3em]">
                            <Typewriter text={t.skills.title1} speed={30} isReducedMotion={isReducedMotion} />
                        </span>
                        <span className="text-cyan-600 dark:text-[#67e8f9] min-h-[1.3em]">
                            <Typewriter text={t.skills.title2} speed={30} initialDelay={475} isReducedMotion={isReducedMotion} />
                        </span>
                    </h2>
                </RevealOnScroll>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
                    {t.skills.categories.map((skill, index) => (
                        <RevealOnScroll key={skill.id} delay={index * 100} isReducedMotion={isReducedMotion}>
                            <article className="h-full p-[28px] bg-white dark:bg-[#151e2e] border border-slate-200 dark:border-[#263449] rounded-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 dark:hover:border-[#67e8f9]/40 hover:shadow-xl dark:hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)] shadow-sm dark:shadow-none">
                                <div className="text-cyan-700 dark:text-[#67e8f9] mb-[25px]" aria-hidden="true">
                                    {skillIcons[index]}
                                </div>
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
    );
}
