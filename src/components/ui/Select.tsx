'use client'
import React, { useState, useRef, useEffect } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


interface Option {
    value: string;
    label: string;
}

interface CustomSelectProps {
    options: Option[];
    value: string;
    onChange: (option: Option) => void;
}

const Select: React.FC<CustomSelectProps> = ({ options, value, onChange }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const selectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleToggle = () => setIsOpen(!isOpen);

    const handleSelect = (option: Option) => {
        onChange(option);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left" ref={selectRef}>
            <div>
                <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={handleToggle}
                >
                    {value}
                    <MdOutlineKeyboardArrowDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </button>
            </div>

            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {options.map((option) => (
                            <button
                                key={option.value}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                                onClick={() => handleSelect(option)}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Select;