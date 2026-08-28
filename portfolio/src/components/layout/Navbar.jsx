import React from 'react';
import { Sun, Moon, Menu, X, Accessibility } from 'lucide-react';
import AnimatedMenu from '../ui/AnimatedMenu';

export default function Navbar({ isMenuActive, toggleMenu, closeMenu, toggleLanguage, language, toggleTheme, theme, isReducedMotion, toggleReducedMotion, t }) {
    return (
        <header className="sticky top-0 z-[100] h-[76px] flex items-center justify-between px-[5%] md:px-[6%] bg-white/80 dark:bg-[#0b1120]/80 backdrop-blur-[16px] border-b border-slate-200 dark:border-slate-400/10 transition-colors duration-300">
            <a href="#" aria-label="Domonkos Lakics Portfolio Home" className="text-[26px] text-slate-900 dark:text-white font-extrabold no-underline tracking-[-1px] focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-sm outline-none hover:scale-105 active:scale-95 transition-transform">
                DL<span className="text-cyan-600 dark:text-[#67e8f9]">.</span>
            </a>

            <div className="flex items-center gap-[15px] md:gap-[30px]">
                <AnimatedMenu
                    isOpen={isMenuActive}
                    className={`
                        absolute top-[76px] left-0 right-0 p-[25px] flex flex-col bg-white dark:bg-[#0b1120] border-b border-slate-200 dark:border-[#263449] shadow-lg
                        md:static md:flex md:flex-row md:gap-[30px] md:border-none md:p-0 md:bg-transparent md:shadow-none md:opacity-100 md:translate-y-0 md:pointer-events-auto md:visible
                    `}
                >
                    <nav 
                        id="main-navigation"
                        aria-label="Main Navigation"
                        className="flex flex-col md:flex-row md:gap-[30px]"
                    >
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
                </AnimatedMenu>

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
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <button
                        onClick={toggleReducedMotion}
                        aria-label={isReducedMotion ? "Enable animations" : "Disable animations"}
                        className={`p-2 rounded-full transition-all duration-300 active:scale-75 focus-visible:ring-2 focus-visible:ring-cyan-500 outline-none ${isReducedMotion ? 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-[#67e8f9]' : 'text-slate-600 dark:text-[#94a3b8] hover:bg-slate-100 dark:hover:bg-[#1e293b]'}`}
                    >
                        <Accessibility size={20} />
                    </button>
                </div>

                <button 
                    className="block md:hidden bg-transparent border-none text-slate-900 dark:text-[#f1f5f9] cursor-pointer focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-sm outline-none active:scale-90 transition-transform" 
                    aria-expanded={isMenuActive}
                    aria-controls="main-navigation"
                    aria-label={isMenuActive ? "Close menu" : "Open menu"}
                    onClick={toggleMenu}
                >
                    {isMenuActive ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </header>
    );
}
