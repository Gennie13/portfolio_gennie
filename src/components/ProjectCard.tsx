import React from "react";
import Image from "next/image";
export default function ProjectCard({group, title, description, tags, link, images}: {
    group: string;
    title: string;
    description: string;
    tags: string[];
    link: string;
    images: string[];
}) {
    return (
        <div className="flex flex-col p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        
        <div className="overflow-hidden w-full h-[30vh] sm:w-4/5 sm:h-[20vh] md:w-[160px] md:h-[160px] mb-4">
            {images[0] && (
                <Image src={images[0]} alt="" className="rounded-lg " width={160} height={160} layout="responsive" objectFit="cover"/>
            )}
        </div>
        <h2 className="text-xl mb-2">{title}</h2>
        <p className="text-[14px] text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
            <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
            >
                {tag}
            </span>
            ))}
        </div>
        <div className="flex justify-end items-end">
            
            <a
                href={`/projects/${group}-${title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white border-1 border-gray-200 rounded-full text-center transition duration-300 ease-in-out px-2 py-1 "
            >
                <i className="ri-arrow-right-fill"></i>
            </a>
        </div>
        
        </div>
    );
}