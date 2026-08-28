import React from 'react';
import { Mail, Send, SendHorizontal, Phone, PhoneOutgoing } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Typewriter from '../ui/Typewriter';
import RevealOnScroll from '../ui/RevealOnScroll';

export default function Contact({ t, isReducedMotion }) {
    return (
        <section id="contact" aria-labelledby="contact-heading" className="text-center px-[6%] py-[150px] bg-slate-100 dark:bg-transparent dark:bg-[radial-gradient(circle_at_center,rgba(103,232,249,0.08),transparent_50%)] transition-colors duration-300 overflow-hidden">
            <RevealOnScroll isReducedMotion={isReducedMotion}>
                <p className="flex justify-center items-center text-cyan-700 dark:text-[#67e8f9] text-[14px] md:text-[15px] font-bold tracking-[3px] mb-[20px] uppercase" aria-hidden="true">
                    <Mail size={18} className="mr-[8px]"/> 
                    <span>{t.contact.label}</span>
                </p>
                <h2 id="contact-heading" className="text-[clamp(42px,6vw,70px)] tracking-[-3px] mb-[15px] font-bold text-slate-900 dark:text-white min-h-[1.15em] md:min-h-[1.05em]">
                    <span className="min-h-[1.2em]">
                        <Typewriter text={t.contact.title1} speed={30} isReducedMotion={isReducedMotion} />
                    </span>
                    <span className="text-cyan-600 dark:text-[#67e8f9] min-h-[1.2em] whitespace-nowrap">
                        <Typewriter text={t.contact.title2} speed={30} initialDelay={360} isReducedMotion={isReducedMotion} />
                    </span>
                </h2>
                <p className="text-slate-600 dark:text-[#94a3b8] mb-[30px]">{t.contact.desc}</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-[15px]">
                   <a href="mailto:domonkos.lakics@gmail.com" className="group inline-flex items-center justify-center px-[22px] py-[13px] rounded-lg text-sm font-semibold transition-all duration-300 hover:-translate-y-[2px] bg-cyan-600 dark:bg-[#67e8f9] text-white dark:text-[#0b1120] no-underline focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0b1120] outline-none hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] active:scale-95">
                        <Send size={18} className="mr-2 block group-hover:hidden"/>
                        <SendHorizontal size={18} className="mr-2 hidden group-hover:block"/>
                        domonkos.lakics@gmail.com
                    </a>
                </div>
                <div className="mt-[35px] flex flex-wrap justify-center gap-[20px] md:gap-[30px]">
                    <a href="tel:+36304813946" className="group text-slate-600 dark:text-[#94a3b8] font-medium text-[15px] no-underline transition-colors duration-200 hover:text-cyan-600 dark:hover:text-[#67e8f9] focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-sm outline-none hover:-translate-y-0.5 active:scale-95 transition-transform inline-flex items-center">
                        <Phone size={20} className="mr-2 block group-hover:hidden"/>
                        <PhoneOutgoing size={20} className="mr-2 hidden group-hover:block"/>
                        +36 30 481 3946
                    </a>
                    <a href="https://www.linkedin.com/in/domonkos-lakics/" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-[#94a3b8] font-medium text-[15px] no-underline transition-colors duration-200 hover:text-cyan-600 dark:hover:text-[#67e8f9] focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-sm outline-none hover:-translate-y-0.5 active:scale-95 transition-transform inline-flex items-center">
                        <FaLinkedin size={20} className="mr-2"/> LinkedIn <span className="sr-only">(opens in a new tab)</span>
                    </a>
                    <a href="https://github.com/lakicsdomi" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-[#94a3b8] font-medium text-[15px] no-underline transition-colors duration-200 hover:text-cyan-600 dark:hover:text-[#67e8f9] focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-sm outline-none hover:-translate-y-0.5 active:scale-95 transition-transform inline-flex items-center">
                        <FaGithub size={20} className="mr-2"/> GitHub <span className="sr-only">(opens in a new tab)</span>
                    </a>
                </div>
            </RevealOnScroll>
        </section>
    );
}
