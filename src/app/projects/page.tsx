"use client";
import { DrawerClose } from "@/components/ui/drawer";

import React, { useState } from "react";
import { projects } from "@/data/projects";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function ProjectListPage() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <section className="py-16 px-6 bg-gray-100 text-brand-black min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 border-b-4 border-brand-red inline-block">
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Drawer key={project.id}>
              <DrawerTrigger asChild>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="bg-white p-6 rounded-xl shadow-md w-full text-left hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-semibold text-brand-red mb-2">
                    {project.title}
                  </h3>
                  <img
                    src={project.image[0]}
                    alt={project.title}
                    className="w-full h-100 object-cover rounded-lg mb-4"
                  />

                  <p className="text-sm text-gray-700 line-clamp-3">
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
                </button>
              </DrawerTrigger>

              <DrawerContent>
                {selectedProject && (
                  <div className="p-6 max-w-4xl mx-auto">
                    <DrawerHeader>
                      <DrawerTitle className="text-xl font-bold text-brand-red">
                        {selectedProject.title}
                      </DrawerTitle>
                    </DrawerHeader>
                    <div className="flex gap-4 overflow-x-auto pb-2">
                      {selectedProject.image.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`${selectedProject.title} screenshot ${i + 1}`}
                          className="h-48 rounded-lg object-cover"
                        />
                      ))}
                    </div>
                    <p className="mt-2 text-base leading-relaxed text-gray-800">
                      {selectedProject.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-4">
                      {selectedProject.links.map((link, i) => (
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
                  </div>
                )}
              </DrawerContent>
            </Drawer>
          ))}
        </div>
      </div>
    </section>
  );
}
