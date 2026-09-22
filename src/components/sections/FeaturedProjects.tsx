// src/components/sections/FeaturedProjects.tsx
import { projectsData } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Cpu } from "lucide-react";

export function FeaturedProjects() {
  const featured = projectsData.filter((p) => p.featured);

  return (
    <section id="projects" className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-[#181d2a]">
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8]">
          <Cpu className="w-4 h-4" />
          <span>PRODUCTION &amp; RESEARCH IMPLEMENTATIONS</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#f1f5f9]">
          Featured AI Engineering Projects
        </h2>
        <p className="text-sm text-[#94a3b8] max-w-xl">
          Detailed case studies showcasing system architecture, data flow design, and engineering trade-offs.
        </p>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-8">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}