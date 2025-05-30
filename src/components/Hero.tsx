import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-brand-black text-brand-white">
      <h1 className="text-5xl md:text-6xl font-bold text-brand-red">
        Hi, I'm Gennie 👋
      </h1>
      <p className="mt-4 text-xl md:text-2xl max-w-xl text-brand-white">
        A passionate Frontend Developer crafting elegant web experiences.
      </p>
      <a
        href="/projects"
        className="mt-6 px-6 py-3 bg-brand-red text-brand-white font-semibold rounded-full shadow-md hover:bg-red-600 transition"
      >
        See My Projects
      </a>
    </section>
  );
}
