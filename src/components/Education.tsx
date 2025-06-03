"use client";
import React from "react";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 px-6 text-brand-black relative overflow-hidden dark:bg-gray-900 dark:text-white "
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0  opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10 inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-6 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
        {/* Education Card */}
        <motion.a
          href="https://portal.num.edu.mn/en/"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white hover:bg-gray-50 p-5 rounded-xl shadow-md hover:shadow-lg  dark:hover:bg-gray-400 transition-all border border-gray-100"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4">
            <img
              src="/num.jpg"
              alt="National University of Mongolia"
              className="h-12 w-12 rounded-lg object-cover border border-gray-200"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  National University of Mongolia
                </h3>
                <span className="text-sm text-gray-500">
                  Sept 2016 – May 2020
                </span>
              </div>
              <p className="text-sm text-gray-700">
                Bachelor of Business Administration
              </p>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
