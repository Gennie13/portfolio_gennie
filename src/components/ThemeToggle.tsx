"use client"
import React, { use, useEffect, useState } from "react";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const html = document.documentElement;
        if(isDark){
            html.classList.add("dark");
        } else {
            html.classList.remove("dark");
        }
    }, [isDark]);
    const toggleTheme = () => setIsDark(!isDark);
    return (
        <button className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-transparent text-gray-700 dark:text-yellow-300 hover:bg-blue-200 dark:hover:bg-blue-600 transition-colors duration-200" type="button" aria-label="Toggle theme" onClick={toggleTheme} >
            {
                isDark 
                ? (<i className="ri-moon-clear-fill text-2xl "></i>) 
                : (< i className="ri-sun-line text-2xl text-gray-900"></i>)
            }
        </button>
    )
}