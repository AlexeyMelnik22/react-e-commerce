import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ({ trigger, children, className = "" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close if click was outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    return (
        <div className={`dropdown__container ${className}`} ref={dropdownRef}>
            <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
                {trigger}
            </div>

            {isOpen && (
                <div className="dropdown__content">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Dropdown;