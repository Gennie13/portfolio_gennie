import React from "react";

export default function About() {
  return (
   <section id="about" className="py-16 px-6 bg-white text-brand-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-brand-red inline-block">About Me</h2>
        <p className="text-lg leading-relaxed mb-6">
          Hello, my name is Gennie — I’m a full-stack developer who is more passionate about backend development, database architecture, security, and data flow.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          I enjoy working with technologies like Node.js, Express, MongoDB, and PostgreSQL to build APIs, handle authentication, and work with real-time data. What excites me most is building clean and efficient backend solutions.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          While I have less experience with UI/UX and frontend design, I focus on developing systems with clean architecture and logical structure. My goal is to write reusable and maintainable backend code for every project I build.
        </p>
        <p className="text-lg leading-relaxed">
          In my free time, I enjoy studying data structures, learning performance optimization techniques, and experimenting with my own side projects. I also care deeply about code quality, scalability, and security.
        </p>
      </div>
    </section>
  );
}
