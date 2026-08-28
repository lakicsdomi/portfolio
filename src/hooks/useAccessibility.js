import { useState, useEffect } from 'react';

export default function useAccessibility() {
    const [isReducedMotion, setIsReducedMotion] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('reducedMotion');
            if (saved !== null) {
                return saved === 'true';
            }
            // Check system preference
            return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        }
        return false;
    });

    useEffect(() => {
        localStorage.setItem('reducedMotion', isReducedMotion);
    }, [isReducedMotion]);

    const toggleReducedMotion = () => {
        setIsReducedMotion(prev => !prev);
    };

    return { isReducedMotion, toggleReducedMotion };
}
