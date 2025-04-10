"use client"
import React from "react";
import { Button } from "./ui/button";
import InfiniteCarousel from "./infiniteCarousel";


const skills = [
  "HTML", "CSS", "TailwindCSS","BootstrapCSS", "BulmaCSS", "C", "Python", "Java", "JavaScript", "TypeScript", "React", "Node JS", "Next JS","Express", "GraphQL", "Apollo", "MongoDB", "Firebase", "MySQL", "PostgreSQL"
];

export default function Skills() {
  return (
    <div className="overflow-hidden w-full my-10">
      <h2 className="text-xl font-bold mb-4">Skills</h2>
      <div className="relative w-full whitespace-nowrap">
        <div className="flex animate-infinite_scroll  space-x-2  overflow-x-auto py-2">
          {[...skills,...skills].map((skill, index) => (
            <Button key={index} variant="secondary" className="min-w-max bg-blue-300">
              {skill}
            </Button>
          ))}
        </div>
      </div>


      <InfiniteCarousel skills={skills}/>
    </div>
  );
}
//https://youtu.be/JzE6owy13os?si=y6wj0m20Aq0hcnxV 
//18:00
