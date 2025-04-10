import React from "react";
import ProjectCard from "./ProjectCard";
import { group } from "console";

const backProjects = [
    {
        group: "Backend",
        title: "Backend Project 1",
        description: "Description of Backend Project 1",
        tags: ["NodeJS", "Express", "MongoDB"],
        link: "https://example.com/backend-project-1",
        images: [
            "/backend1.jpg",
            "/backend2.jpg",
            "/backend1.jpg",
        ]
    },
    {
        group: "Backend",
        title: "Backend Project 2",
        description: "Description of Backend Project 2",
        tags: ["Python", "Flask", "PostgreSQL"],
        link: "https://example.com/backend-project-2",
        images: [
            "/backend3.jpg",
            "/backend4.jpg",
            "/backend5.jpg"
        ]
    },
]
export default function Backend() {
    
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {backProjects.map((project, index) => (
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