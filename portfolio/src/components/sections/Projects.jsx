import React from 'react';
import { FolderGit2, Lock, ExternalLink } from 'lucide-react';
import { FaLinkedin, FaGithub, FaGitlab } from 'react-icons/fa';
import Typewriter from '../ui/Typewriter';
import RevealOnScroll from '../ui/RevealOnScroll';

export default function Projects({ t, isReducedMotion }) {
    return (
        <section id="projects" aria-labelledby="projects-heading" className="max-w-[1200px] mx-auto px-[6%] py-[90px] md:py-[120px]">
            <RevealOnScroll className="max-w-[750px] mb-[60px]" isReducedMotion={isReducedMotion}>
                <p className="flex items-center text-cyan-700 dark:text-[#67e8f9] text-[14px] md:text-[15px] font-bold tracking-[3px] mb-[20px] uppercase" aria-hidden="true">
                    <FolderGit2 size={18} className="mr-[8px]"/> 
                    <span>{t.projects.label}</span>
                </p>
                <h2 id="projects-heading" className="text-[clamp(34px,5vw,52px)] leading-[1.15] tracking-[-1px] md:tracking-[-2px] font-bold text-slate-900 dark:text-white min-h-[1.2em] md:min-h-[1.1em]">
                    <span className="min-h-[1.3em]">
                        <Typewriter text={t.projects.title1} speed={30} isReducedMotion={isReducedMotion} />
                    </span>
                    <span className="text-cyan-600 dark:text-[#67e8f9] min-h-[1.3em]">
                        <Typewriter text={t.projects.title2} speed={30} initialDelay={360} isReducedMotion={isReducedMotion} />
                    </span>
                </h2>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                {t.projects.list.map((proj, index) => (
                    <RevealOnScroll key={index} delay={(index + 1) * 100} className={index === 0 ? "md:col-span-2" : ""} isReducedMotion={isReducedMotion}>
                        <article className={`relative h-full min-h-[380px] flex flex-col justify-between p-[35px] bg-white dark:bg-[#151e2e] border border-slate-200 dark:border-[#263449] rounded-[14px] overflow-hidden transition-all duration-300 hover:-translate-y-[6px] hover:border-cyan-300 dark:hover:border-[#67e8f9]/40 hover:shadow-xl dark:hover:shadow-[0_10px_40px_rgba(6,182,212,0.15)] shadow-sm dark:shadow-none ${index === 0 ? 'dark:bg-[radial-gradient(circle_at_90%_20%,rgba(103,232,249,0.08),transparent_40%),_#151e2e]' : ''}`}>
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
                                <a 
                                    href={proj.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="inline-flex items-center self-start text-cyan-600 dark:text-[#67e8f9] text-[13px] font-semibold no-underline mt-auto focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-sm outline-none transition-transform hover:translate-x-2 active:scale-95"
                                >
                                    {(proj.link.includes('gitlab') || proj.tags.includes('GitLab')) && <FaGitlab size={16} className="mr-[6px]" />}
                                    {proj.link.includes('github') && <FaGithub size={16} className="mr-[6px]" />}
                                    {!proj.link.includes('gitlab') && !proj.link.includes('github') && !proj.tags.includes('GitLab') && <ExternalLink size={16} className="mr-[6px]" />}
                                    
                                    <span>{proj.linkText}</span>
                                    <span className="sr-only">(opens in a new tab)</span>
                                </a>
                            ) : (
                                <span className="inline-flex items-center text-slate-500 dark:text-[#94a3b8] text-[13px] mt-6 md:mt-0 opacity-80 font-medium">
                                    <Lock size={15} className="text-cyan-600 dark:text-[#67e8f9] shrink-0 mr-[6px]" />
                                    <span>{proj.note.replace('🔒 ', '')}</span>
                                </span>
                            )}
                        </article>
                    </RevealOnScroll>
                ))}
            </div>
        </section>
    );
}
