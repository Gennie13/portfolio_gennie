import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

interface ProjectDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) return notFound();

  return (
    <main className="max-w-5xl mx-auto py-20 px-6 text-brand-black">
      <h1 className="text-4xl font-bold text-brand-red mb-6">{project.title}</h1>
      <p className="text-lg leading-relaxed mb-6">{project.description}</p>

      <h2 className="text-xl font-semibold mt-10 mb-2 text-brand-red">Technologies Used</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech, i) => (
          <span key={i} className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full font-medium">
            {tech}
          </span>
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-2 text-brand-red">Source Links</h2>
      <div className="flex flex-wrap gap-4">
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
    </main>
  );
}
