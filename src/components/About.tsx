"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-white text-brand-black dark:bg-gray-900 dark:text-white"
    >
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Section 1: Overview */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold mb-6 inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent dark:text-white">
            About Me
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Hi, I’m <span className="font-semibold">Gereltsetseg</span> — a
              full-stack developer who enjoys working across the stack but is
              most passionate about backend development, system architecture,
              and secure data handling.
            </p>
            <p>
              I love building RESTful APIs, handling authentication flows, and
              working with tools like{" "}
              <span className="font-medium">Node.js</span>,{" "}
              <span className="font-medium">Express</span>,{" "}
              <span className="font-medium">MongoDB</span>, and{" "}
              <span className="font-medium">PostgreSQL</span> to create powerful
              backend systems.
            </p>
          </div>
        </motion.div>

        {/* Section 2: Philosophy & Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 text-brand-red">
            My Development Philosophy
          </h3>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              While I have less experience with UI/UX, I put strong emphasis on
              writing maintainable, reusable, and logically structured backend
              code. I value clarity over cleverness and always aim for scalable
              architecture.
            </p>
            <p>
              In my free time, I enjoy diving into data structures, exploring
              performance tuning techniques, and building side projects to
              challenge myself. I’m deeply committed to code quality, security,
              and clean engineering practices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
