import React from "react";
import ThemeToggle from "./ThemeToggle";

export default function Menu() {
    return (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 mx-auto mb-4 flex origin-bottom h-full max-h-14">
            <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg dark:bg-background"></div>
            <div className="w-max p-2 rounded-full border z-50 pointer-events-auto relative mx-auto flex gap-6 min-h-full h-full items-center px-1 bg-background shadow-md dark:border dark:shadow-inner ">
                {/* Home button */}
                <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full" style={{ width: "40px" }}>
                <a
                href="/"
                aria-label="Home"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full text-gray-900 hover:text-white bg-gray-100 dark:bg-transparent dark:text-gray-200 hover:bg-blue-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:bg-blue-600 dark:hover:text-white dark:focus:ring-blue-500"
                >
                    <i className="ri-home-smile-line text-2xl"></i>
                </a>
                </div>

                {/* Project Button */}
                <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full" style={{ width: "40px" }}>
                    <a
                        href="/projects"
                        aria-label="Projects"
                        className="w-10 h-10 flex items-center justify-center rounded-full text-gray-900 hover:text-white bg-gray-100 hover:bg-blue-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-transparent dark:text-gray-200 dark:hover:bg-blue-600 dark:hover:text-white dark:focus:ring-blue-500"             
                    >
                        < i className="ri-code-box-line text-2xl"></i>
                    </a>
                </div>

               

                {/* Theme Toggle Button */}
                <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full" style={{ width: "40px" }}>
                    <ThemeToggle/>
                </div>
            </div>
        </div>
    )
}