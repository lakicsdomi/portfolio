import React from 'react';

export default function Footer({ handleBackToTop, t }) {
    return (
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
    );
}
