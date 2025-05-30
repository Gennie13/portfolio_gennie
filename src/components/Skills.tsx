"use client"
import React from "react";
import InfiniteCarousel from "./infiniteCarousel";


const skills = [
  "HTML", "CSS", "TailwindCSS","BootstrapCSS", "BulmaCSS", "C", "Python", "Java", "JavaScript", "TypeScript", "React", "Node JS", "Next JS", "Shadcn","Express", "GraphQL", "Apollo", "MongoDB", "Firebase", "MySQL", "PostgreSQL"
];

export default function Skills() {
  return (
    <section className="w-full my-20 bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-brand-red mb-8">Skills</h2>
        <InfiniteCarousel skills={skills} />
      </div>
    </section>
  );
}
//https://youtu.be/JzE6owy13os?si=y6wj0m20Aq0hcnxV 
//18:00
