"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-950">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.2) 25%, transparent 50%)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 via-transparent to-cyan-900/10" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              i % 4 === 0
                ? "bg-cyan-400/40"
                : i % 4 === 1
                ? "bg-indigo-400/40"
                : i % 4 === 2
                ? "bg-purple-400/40"
                : "bg-emerald-400/40"
            }`}
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1000),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1000),
            }}
            animate={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1000),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1000),
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto"
      >
        {/* Developer Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-full text-sm text-cyan-100 mb-6"
        >
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-sm shadow-emerald-400/50" />
          Backend Developer
        </motion.div>
        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-black mb-6"
        >
          <span className="inline-block bg-gradient-to-r from-slate-100 via-white to-cyan-100 bg-clip-text text-transparent">
            Hi, I'm{" "}
          </span>
          <motion.span
            className="inline-block bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Gerelee
          </motion.span>
          <motion.span
            className="inline-block ml-4 text-6xl"
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            👋
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-8 max-w-2xl mx-auto"
        >
          Passionate about{" "}
          <span className="relative">
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent font-semibold">
              APIs, databases & cloud architecture
            </span>
            <motion.span
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            />
          </span>{" "}
          — crafting robust backend solutions that powers seamless user
          experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-2"
        >
          <motion.a
            href="/projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-2xl overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-500"
              initial={{ x: "-100%" }}
              animate={{ x: isHovered ? "0%" : "-100%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              View My Projects
              <motion.span
                animate={{ x: isHovered ? 4 : 0 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </span>
          </motion.a>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex items-center justify-center gap-8 text-slate-400"
        >
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              2+
            </div>
            <div className="text-sm text-slate-300">Projects</div>
          </div>
          <div className="w-px h-8 bg-gray-600" />
          <div className="text-center ">
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              1+
            </div>
            <div className="text-sm text-slate-300">Years Experience</div>
          </div>
          <div className="w-px h-8 bg-slate-600" />
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
              ∞
            </div>
            <div className="text-sm text-slate-300">Lines of Code</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
