import React from 'react';
import { User } from 'lucide-react';
import Typewriter from '../ui/Typewriter';
import RevealOnScroll from '../ui/RevealOnScroll';
import profilePic from '../../assets/profile_pic.jpg';

export default function About({ t, isReducedMotion }) {
    return (
        <section id="about" aria-labelledby="about-heading" className="max-w-[1200px] mx-auto px-[6%] py-[90px] md:py-[120px] border-t border-slate-200 dark:border-slate-400/10">
            <RevealOnScroll className="max-w-[750px] mb-[60px]" isReducedMotion={isReducedMotion}>
                <p className="flex items-center text-cyan-700 dark:text-[#67e8f9] text-[14px] md:text-[15px] font-bold tracking-[3px] mb-[20px] uppercase" aria-hidden="true">
                    <User size={18} className="mr-[8px]"/> 
                    <span>{t.about.label}</span>
                </p>
                <h2 id="about-heading" className="text-[clamp(34px,5vw,52px)] leading-[1.15] tracking-[-1px] md:tracking-[-2px] font-bold text-slate-900 dark:text-white min-h-[2.4em] md:min-h-[1.3em]">
                    <span className="min-h-[1.3em]">
                        <Typewriter text={t.about.title1} speed={30} isReducedMotion={isReducedMotion} />
                    </span>
                    <span className="text-cyan-600 dark:text-[#67e8f9] min-h-[1.3em]">
                        <Typewriter text={t.about.title2} speed={30} initialDelay={700} isReducedMotion={isReducedMotion} />
                    </span>
                </h2>
            </RevealOnScroll>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-[50px] lg:gap-[80px] items-center">
                <div className="flex flex-col md:flex-row gap-[40px] items-center md:items-start">
                    <RevealOnScroll delay={50} className="shrink-0" isReducedMotion={isReducedMotion}>
                        <div className="relative w-[200px] h-[200px] md:w-[220px] md:h-[220px] rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-xl shadow-cyan-500/5 group">
                            <img 
                                src={profilePic} 
                                alt="Domonkos Lakics" 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll delay={100} isReducedMotion={isReducedMotion}>
                        <p className="text-slate-600 dark:text-[#94a3b8] text-[17px] mb-[22px]">{t.about.p1}</p>
                        <p className="text-slate-600 dark:text-[#94a3b8] text-[17px] mb-[22px]">{t.about.p2}</p>
                        <p className="text-slate-600 dark:text-[#94a3b8] text-[17px] mb-[22px]">{t.about.p3}</p>
                    </RevealOnScroll>
                </div>

                <RevealOnScroll delay={200} isReducedMotion={isReducedMotion}>
                    <ul aria-label="Key Statistics" className="flex flex-col gap-[30px] p-0 m-0 list-none bg-white/5 dark:bg-[#151e2e]/40 p-[30px] rounded-2xl border border-slate-200 dark:border-[#263449]">
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
    );
}
