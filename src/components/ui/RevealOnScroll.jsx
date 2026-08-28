import React, { useState, useEffect, useRef } from 'react';

const RevealOnScroll = ({ children, className = "", delay = 0, isReducedMotion = false }) => {
    const [isVisible, setIsVisible] = useState(isReducedMotion);
    const ref = useRef(null);

    useEffect(() => {
        if (isReducedMotion) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );
        
        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [isReducedMotion]);

    return (
        <div 
            ref={ref} 
            className={`transition-all ${isReducedMotion ? 'duration-0' : 'duration-1000'} ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
            style={{ transitionDelay: isReducedMotion ? '0ms' : `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default RevealOnScroll;