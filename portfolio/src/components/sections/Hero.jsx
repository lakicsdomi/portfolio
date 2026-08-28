import React from 'react';
import { ArrowRight, Send } from 'lucide-react';
import Typewriter from '../ui/Typewriter';
import RevealOnScroll from '../ui/RevealOnScroll';

export default function Hero({ t, isReducedMotion }) {
    return (
        <section aria-labelledby="hero-heading" className="relative min-h-[calc(100vh-76px)] max-w-[1200px] mx-auto px-[6%] py-[80px] md:py-[100px] flex items-center">
            <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
                
                <RevealOnScroll className="relative z-10 max-w-[760px]" isReducedMotion={isReducedMotion}>
                    <p className="text-cyan-700 dark:text-[#67e8f9] text-[12px] font-bold tracking-[3px] mb-[20px]">
                        {t.hero.eyebrow}
                    </p>
                    <h1 id="hero-heading" className="text-[clamp(48px,7vw,82px)] leading-[1.02] tracking-[-2px] md:tracking-[-4px] mb-[30px] font-bold text-slate-900 dark:text-white">
                        <Typewriter text={t.hero.title1} speed={45} isReducedMotion={isReducedMotion} />
                        <span className="text-cyan-600 dark:text-[#67e8f9] min-h-[2.5em] md:min-h-[1.2em]">
                            <Typewriter text={t.hero.title2} speed={45} initialDelay={1175} isReducedMotion={isReducedMotion} />
                        </span>
                    </h1>
                    <p className="max-w-[650px] text-slate-600 dark:text-[#94a3b8] text-[18px] leading-[1.8]">
                        {t.hero.desc}
                    </p>
                    <div className="flex flex-wrap gap-[14px] mt-[35px]">
                        <a href="#projects" className="inline-flex items-center justify-center px-[22px] py-[13px] rounded-lg text-sm font-semibold transition-all duration-300 hover:-translate-y-[2px] bg-cyan-600 dark:bg-[#67e8f9] text-white dark:text-[#0b1120] no-underline focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0b1120] outline-none hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] active:scale-95">
                            {t.hero.btnProjects}
                            <ArrowRight size={18} className="ml-[6px]"/>
                        </a>
                        <a href="#contact" className="inline-flex items-center justify-center px-[22px] py-[13px] rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-slate-100 dark:hover:bg-[#151e2e] border border-slate-300 dark:border-[#263449] text-slate-900 dark:text-[#f1f5f9] no-underline hover:-translate-y-[2px] focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0b1120] outline-none active:scale-95">
                            {t.hero.btnContact}
                            <Send size={18} className="ml-[6px]"/>
                        </a>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll delay={200} className="flex justify-center md:justify-end z-0" isReducedMotion={isReducedMotion}>
                    <div className="relative w-full max-w-[380px] md:max-w-[420px]">
                        <div 
                            className="absolute -inset-4 rounded-full bg-cyan-400 dark:bg-[#67e8f9] blur-[90px] opacity-[0.12] dark:opacity-[0.08]"
                            style={{ animation: 'pulse 6s ease-in-out infinite' }}
                        ></div>

                        <div className="relative p-[32px] md:p-[36px] bg-white/80 dark:bg-[#151e2e]/80 backdrop-blur-md border border-slate-200 dark:border-[#263449] rounded-[18px] shadow-2xl font-mono text-[14px] md:text-[15px] text-slate-700 dark:text-[#cbd5e1] hover:scale-[1.02] transition-transform duration-500">
                            <span className="block my-[8px] text-slate-400 dark:text-[#64748b]">
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
                                &nbsp;&nbsp;hobby: <em className="text-cyan-600 dark:text-[#67e8f9] not-italic">"darts"</em>
                            </span>
                            <span className="block my-[8px]">
                                {'}'};
                            </span>
                        </div>
                    </div>
                </RevealOnScroll>

            </div>
        </section>
    );
}
