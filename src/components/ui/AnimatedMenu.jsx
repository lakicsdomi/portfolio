import React from 'react';

export default function AnimatedMenu({ isOpen, children, className = '' }) {
    return (
        <div
            className={`
                transition-all duration-300 ease-in-out
                ${isOpen 
                    ? 'opacity-100 translate-y-0 pointer-events-auto visible' 
                    : 'opacity-0 -translate-y-2 pointer-events-none invisible'
                }
                ${className}
            `}
        >
            {children}
        </div>
    );
}
