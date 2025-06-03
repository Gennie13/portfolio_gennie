"use client";
import React, { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";

type InfiniteCarouselProps = {
  skills: string[];
  direction?: "left" | "right";
};
type SkillCardProps = {
  skill: string;
  category: string;
  color: string;
  icon: string;
};

const skillCategories = {
  Frontend: {
    skills: [
      "HTML",
      "CSS",
      "TailwindCSS",
      "BootstrapCSS",
      "BulmaCSS",
      "React",
      "Next JS",
      "Shadcn",
    ],
    color: "from-blue-500 to-cyan-500",
    icon: "🎨",
  },
  Backend: {
    skills: ["Node JS", "Express", "GraphQL", "Apollo"],
    color: "from-green-500 to-emerald-500",
    icon: "⚙️",
  },
  Languages: {
    skills: ["C", "Python", "Java", "JavaScript", "TypeScript"],
    color: "from-purple-500 to-indigo-500",
    icon: "💻",
  },
  Databases: {
    skills: ["MongoDB", "Firebase", "MySQL", "PostgreSQL"],
    color: "from-orange-500 to-red-500",
    icon: "🗄️",
  },
};

// Memoized carousel component for better performance
const InfiniteCarousel = React.memo(
  ({ skills, direction = "left" }: InfiniteCarouselProps) => {
    const duplicatedSkills = useMemo(() => [...skills, ...skills], [skills]);

    return (
      <div className="relative overflow-hidden py-4">
        <motion.div
          className="flex space-x-4 min-w-max"
          animate={{
            x: direction === "left" ? [0, -1000] : [-1000, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <motion.div
              key={`${skill}-${index}`}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-slate-200 whitespace-nowrap hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  }
);

InfiniteCarousel.displayName = "InfiniteCarousel";

// Memoized skill card component
const SkillCard = React.memo(
  ({ skill, category, color, icon }: SkillCardProps) => (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
      className={`group relative p-6 bg-gradient-to-br ${color} rounded-2xl cursor-pointer overflow-hidden`}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
      <div className="relative z-10">
        <div className="text-2xl mb-2">{icon}</div>
        <h3 className="text-white font-semibold text-lg">{skill}</h3>
        <div className="mt-2 h-1 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-white/40 rounded-full w-0 group-hover:w-full transition-all duration-500 ease-out" />
        </div>
      </div>
    </motion.div>
  )
);

SkillCard.displayName = "SkillCard";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const backgroundVariants = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.5, 0.3],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Skills() {
  type CategoryKey = keyof typeof skillCategories;
  type CategoryOption = "All" | CategoryKey;
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryOption>("All");

  // Memoized category options
  const categoryOptions: CategoryOption[] = useMemo(
    () => ["All", ...(Object.keys(skillCategories) as CategoryKey[])],
    []
  );

  // Memoized selected skills
  const selectedSkills = useMemo(() => {
    return selectedCategory === "All"
      ? null
      : skillCategories[selectedCategory]?.skills;
  }, [selectedCategory]);

  // Memoized category entries for carousels
  const categoryEntries = useMemo(() => Object.entries(skillCategories), []);

  // Optimized category handler
  const handleCategoryChange = useCallback((category: "All" | CategoryKey) => {
    setSelectedCategory(category);
  }, []);

  return (
    <section className="w-full py-20 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          variants={backgroundVariants}
          animate="animate"
          className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          variants={backgroundVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          variants={backgroundVariants}
          animate="animate"
          style={{ animationDelay: "4s" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2
            className="text-3xl md:text-3xl font-black mb-4"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-white via-cyan-100 to-indigo-100 bg-clip-text text-transparent">
              My Skills
            </span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p
            className="text-lg text-slate-300 max-w-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A comprehensive toolkit of technologies I use to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-6"
        >
          {categoryOptions.map((category) => (
            <motion.button
              key={category}
              variants={itemVariants}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-white/5 backdrop-blur-sm border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white hover:border-white/20"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === "All"
                ? "🚀 All Skills"
                : `${skillCategories[category].icon} ${category}`}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        {selectedCategory !== "All" ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16"
            key={selectedCategory} // Force re-render for better animation
          >
            {selectedSkills &&
              selectedSkills.map((skill) => (
                <SkillCard
                  key={skill}
                  skill={skill}
                  category={selectedCategory}
                  color={skillCategories[selectedCategory].color}
                  icon={skillCategories[selectedCategory].icon}
                />
              ))}
          </motion.div>
        ) : (
          /* Infinite Carousels for All Skills */
          <motion.div
            className="space-y-8 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {categoryEntries.map(([category, data], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{data.icon}</span>
                  <h3
                    className={`text-xl font-bold bg-gradient-to-r ${data.color} bg-clip-text text-transparent`}
                  >
                    {category}
                  </h3>
                </div>
                <InfiniteCarousel
                  skills={data.skills}
                  direction={index % 2 === 0 ? "left" : "right"}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
