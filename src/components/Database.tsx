"use client"

import { title } from "process"
import ProjectCard from "./ProjectCard"

const databaseProjects = [
    {
        group: "Database",
        title: "Database Project 1",
        description: "Description of Database Project 1",
        tags: ["MySQL"],
        link: "https://example.com/database-project-1",
        images: [
            "/database1.jpg",
            "/database2.jpg",
            "/database3.jpg",
        ]
    },
    {
        group: "Database",
        title: "Database Project 2",
        description: "Description of Database Project 2",
        tags: ["PostgreSQL"],
        link: "https://example.com/database-project-2",
        images: [
            "/database4.jpg",
            "/database5.jpg",
            "/database6.jpg"
        ]
    },
    {
        group: "Database",
        title: "Database Project 3",
        description: "Description of Database Project 3",
        tags: ["MongoDB"],
        link: "https://example.com/database-project-3",
        images: [
            "/database2.jpg",
            "/database8.jpg",
            "/database9.jpg"
        ]
    },
]
export default function Database() {
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {databaseProjects.map((project, index) => (
                    <ProjectCard group={project.group} title={project.title} description={project.description} tags={project.tags} link={project.link} images={project.images}/>
                ))}
            </div>
        </div>
    )
}