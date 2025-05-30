"use client";
import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setIsDark(!isDark);
  };

  return (
    <button
      className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-transparent text-gray-700 dark:text-yellow-300 hover:bg-blue-200 dark:hover:bg-blue-600 transition-colors duration-200"
      type="button"
      aria-label="Toggle theme"
      onClick={toggleTheme}
    >
      {isDark ? (
        <i className="ri-moon-clear-fill text-2xl" />
      ) : (
        <i className="ri-sun-line text-2xl text-gray-900" />
      )}
    </button>
  );
}
