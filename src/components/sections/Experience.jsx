import React from 'react';
import { BriefcaseBusiness } from 'lucide-react';
import Typewriter from '../ui/Typewriter';
import RevealOnScroll from '../ui/RevealOnScroll';

export default function Experience({ t, isReducedMotion }) {
    return (
        <section id="experience" aria-labelledby="experience-heading" className="max-w-[1200px] mx-auto px-[6%] py-[90px] md:py-[120px] border-t border-slate-200 dark:border-slate-400/10">
            <RevealOnScroll className="max-w-[750px] mb-[60px]" isReducedMotion={isReducedMotion}>
                <p className="flex items-center text-cyan-700 dark:text-[#67e8f9] text-[14px] md:text-[15px] font-bold tracking-[3px] mb-[20px] uppercase" aria-hidden="true">
                    <BriefcaseBusiness size={18} className="mr-[8px]"/> 
                    <span>{t.experience.label}</span>
                </p>
                <h2 id="experience-heading" className="text-[clamp(34px,5vw,52px)] leading-[1.15] tracking-[-1px] md:tracking-[-2px] font-bold text-slate-900 dark:text-white min-h-[1.2em] md:min-h-[1.1em]">
                    <span className="min-h-[1.1em]">
                        <Typewriter text={t.experience.title1} speed={30} isReducedMotion={isReducedMotion} />
                    </span>
                    <span className="text-cyan-600 dark:text-[#67e8f9] min-h-[1.3em]">
                        <Typewriter text={t.experience.title2} speed={30} initialDelay={350} isReducedMotion={isReducedMotion} />
                    </span>
                </h2>
            </RevealOnScroll>

            <div className="flex flex-col gap-[60px]">
                {t.experience.jobs.map((job, index) => (
                    <RevealOnScroll key={index} delay={100 * (index + 1)} isReducedMotion={isReducedMotion}>
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
    );
}
