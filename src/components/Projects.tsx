"use client"
import { projects } from "@/data/projects";
import Link from "next/link";
export function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-gray-100 text-brand-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 border-b-4 border-brand-red inline-block">
          Projects
        </h2>

        <div className="space-y-12">
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-brand-red">
                {project.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex justify-between gap-4 flex-wrap">
                <div className=" flex gap-4">
                  {project.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    {link.label}
                  </a>
                ))}
                </div>
                <Link
                  href={`/projects/${project.id}`}
                  className="text-brand-red hover:underline "
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
