"use client";
import React from "react";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Golomt Bank",
    position: "Corporate Banking Teller",
    period: "May 2020 - March 2023",
    logo: "/golomtbank.jpg",
    link: "https://www.golomtbank.com/",
  },
  {
    company: "Golomt Bank",
    position: "Collateral Valuation / Contract Employee",
    period: "September 2019 - March 2020",
    logo: "/golomtbank.jpg",
    link: "https://www.golomtbank.com/",
  },
  {
    company: "Khan Bank",
    position: "Customer service",
    period: "May 2019 - September 2019",
    logo: "/khanbank.png",
    link: "https://www.khanbank.com/business/home/",
  },
  {
    company: "Khan Bank",
    position: "Customer service",
    period: "May 2018 - September 2018",
    logo: "/khanbank.png",
    link: "https://www.khanbank.com/business/home/",
  },
];

export default function Work() {
  return (
    <section className="py-20 px-6 bg-white text-brand-black dark:bg-gray-900 dark:text-white relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10 inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-6 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
        {/* Job cards */}
        <div className="space-y-6">
          {experiences.map((job, i) => (
            <motion.a
              key={i}
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white hover:bg-gray-50  dark:hover:bg-gray-400 p-5 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4">
                <img
                  src={job.logo}
                  alt={`${job.company} logo`}
                  className="h-12 w-12 rounded-lg object-cover border border-gray-200"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900 ">
                      {job.company}
                    </h3>
                    <span className="text-sm text-gray-500">{job.period}</span>
                  </div>
                  <p className="text-sm text-gray-700">{job.position}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
