"use client";
import React from "react";
import { Button } from "./ui/button";

const InfiniteCarousel = ({ skills }: { skills: string[] }) => {
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-pink-500",
  ];

  return (
    <div className="w-full overflow-x-auto whitespace-nowrap px-2 py-4 scroll-smooth scroll-snap-x scrollbar-hide">
      <div className="inline-flex gap-3 min-w-max">
        {skills.map((skill, i) => (
          <Button
            key={`${skill}-${i}`}
            className={`snap-start ${colors[i % colors.length]} text-white px-4 py-2 rounded-full shadow font-medium`}
          >
            {skill}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
