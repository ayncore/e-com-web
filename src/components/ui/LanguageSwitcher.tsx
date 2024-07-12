'use client'

import React, { useState } from 'react';
import { IoIosGlobe } from "react-icons/io";

import Select from './Select';


interface LanguageOption {
    value: string;
    label: string;
}

const LanguageSwitcher: React.FC = () => {
    const [language, setLanguage] = useState<LanguageOption>({ value: 'en', label: 'English' });

    const languageOptions: LanguageOption[] = [
        { value: 'en', label: 'English' },
        { value: 'hi', label: 'हिन्दी' },
    ];

    const handleLanguageChange = (selectedOption: LanguageOption) => {
        setLanguage(selectedOption);
        // Here you would typically update your app's language context or state
        console.log(`Language changed to ${selectedOption.label}`);
    };

    return (
        <div className="flex items-center space-x-2">
            <IoIosGlobe className="w-5 h-5 text-gray-500" />
            <Select
                options={languageOptions}
                value={language.label}
                onChange={handleLanguageChange}
            />
        </div>
    );
};

export default LanguageSwitcher;