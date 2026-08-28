import React, { useState, useEffect, useRef } from 'react';

const Typewriter = ({ text, speed = 60, initialDelay = 0, isReducedMotion = false }) => {
    const [currentIndex, setCurrentIndex] = useState(isReducedMotion ? text.length : 0);
    const [isStarted, setIsStarted] = useState(false);
    const [isWaiting, setIsWaiting] = useState(initialDelay > 0 && !isReducedMotion);
    const ref = useRef(null);

    useEffect(() => {
        if (isReducedMotion) {
            setCurrentIndex(text.length);
            setIsWaiting(false);
            setIsStarted(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsStarted(true);
                } else {
                    setIsStarted(false);
                    setCurrentIndex(0);
                    setIsWaiting(initialDelay > 0);
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );
        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [initialDelay, isReducedMotion, text.length]);

    useEffect(() => {
        if (isReducedMotion) return;
        if (!isStarted) return;

        let timeout;
        if (isWaiting) {
            timeout = setTimeout(() => setIsWaiting(false), initialDelay);
        } else if (currentIndex < text.length) {
            timeout = setTimeout(() => {
                setCurrentIndex(prev => prev + 1); 
            }, speed);
        }
        return () => clearTimeout(timeout);
    }, [currentIndex, isStarted, isWaiting, speed, initialDelay, text.length, isReducedMotion]);

    const currentText = text.substring(0, currentIndex);
    const isFinished = currentIndex >= text.length;
    const showCursor = isStarted && !isWaiting && !isFinished && !isReducedMotion;

    return (
        <span ref={ref}>
            {currentText}
            {showCursor && (
                <span className="inline-block w-[0.1em] h-[1em] ml-[2px] bg-cyan-600 dark:bg-[#67e8f9] animate-pulse align-middle"></span>
            )}
        </span>
    );
};

export default Typewriter;