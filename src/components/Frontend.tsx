"use client"
import React from "react";
import ProjectCard from "./ProjectCard";
import { group } from "console";
const frontProjects = [
    {
        group: "Frontend",
        title: "Frontend Project 1",
        description: "Description of Frontend Project 1",
        tags: ["React", "Next.js", "Tailwind CSS"],
        link: "https://example.com/frontend-project-1",
        images: [
            "/frontend1.jpg",
            "/frontend2.jpg",
            "/frontend3.jpg",
        ]
    },
    {
        group: "Frontend",
        title: "Frontend Project 2",
        description: "Description of Frontend Project 2",
        tags: ["Vue.js", "Vuetify", "Firebase"],
        link: "https://example.com/frontend-project-2",
        images: [
            "/frontend4.jpg",
            "/frontend5.jpg",
            "/frontend6.jpg"
        ]
    },
    {
        group: "Frontend",
        title: "Frontend Project 3",
        description: "Description of Frontend Project 3",
        tags: ["Angular", "Bootstrap", "GraphQL"],
        link: "https://example.com/frontend-project-3",
        images: [
            "/frontend2.jpg",
            "/frontend8.jpg",
            "/frontend9.jpg"
        ]
    },
    {
        group: "Frontend",
        title: "Frontend Project 4",
        description: "Description of Frontend Project 4",
        tags: ["Svelte", "Tailwind CSS", "D3.js"],
        link: "https://example.com/frontend-project-4",
        images: [
            "/frontend3.jpg",
            "/frontend11.jpg",
            "/frontend12.jpg"
        ]
    },
]
export default function Frontend() {
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {frontProjects.map((project, index) => (
                    <ProjectCard
                    group={project.group}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        link={project.link}
                        images={project.images}
                    />
                ))}
            </div>
        </div>
    )
}