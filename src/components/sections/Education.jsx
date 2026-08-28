import React from 'react';
import { GraduationCap } from 'lucide-react';
import Typewriter from '../ui/Typewriter';
import RevealOnScroll from '../ui/RevealOnScroll';

export default function Education({ t, isReducedMotion }) {
    return (
        <section id="education" aria-labelledby="education-heading" className="max-w-[1200px] mx-auto px-[6%] py-[90px] md:py-[120px] border-t border-slate-200 dark:border-slate-400/10">
            <RevealOnScroll className="max-w-[750px] mb-[60px]" isReducedMotion={isReducedMotion}>
                <p className="flex items-center text-cyan-700 dark:text-[#67e8f9] text-[14px] md:text-[15px] font-bold tracking-[3px] mb-[20px] uppercase" aria-hidden="true">
                    <GraduationCap size={18} className="mr-[8px]"/> 
                    <span>{t.education.label}</span>
                </p>
                <h2 id="education-heading" className="text-[clamp(34px,5vw,52px)] leading-[1.15] tracking-[-1px] md:tracking-[-2px] font-bold text-slate-900 dark:text-white min-h-[1.2em] md:min-h-[1.1em]">
                    <span className="min-h-[1.3em]">
                        <Typewriter text={t.education.title1} speed={30} isReducedMotion={isReducedMotion} />
                    </span>
                    <span className="text-cyan-600 dark:text-[#67e8f9] min-h-[1.3em]">
                        <Typewriter text={t.education.title2} speed={30} initialDelay={520} isReducedMotion={isReducedMotion} />
                    </span>
                </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={100} isReducedMotion={isReducedMotion}>
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
    );
}
