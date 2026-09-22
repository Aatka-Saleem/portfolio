// src/components/ui/ProjectCard.tsx
"use client";

import { useState, useRef, MouseEvent } from "react";
import Link from "next/link";
import { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight, GitBranch, Terminal } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-xl bg-[#0e1118] border border-[#1e2433] hover:border-[#2e394e] transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between overflow-hidden group"
    >
      {/* Interactive Cursor Spotlight Glow */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.12), transparent 80%)`,
          }}
        />
      )}

      <div className="relative space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Badge variant="accent" className="text-xs">
            {project.category}
          </Badge>
          <span className="font-mono text-xs text-[#94a3b8] flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-[#38bdf8]" />
            {project.highlightSignal}
          </span>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold text-[#f1f5f9] tracking-tight group-hover:text-[#38bdf8] transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-[#94a3b8] leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        <div className="pt-3 pb-1 border-t border-[#181d2a] space-y-2 text-xs">
          <div>
            <span className="font-mono text-[#cbd5e1] font-medium">Problem: </span>
            <span className="text-[#94a3b8]">{project.caseStudy.problem}</span>
          </div>
          <div>
            <span className="font-mono text-[#cbd5e1] font-medium">Approach: </span>
            <span className="text-[#94a3b8]">{project.caseStudy.approach}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-2" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="default" className="text-[11px] py-0.5">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div className="relative flex items-center justify-between pt-6 mt-6 border-t border-[#181d2a]">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#38bdf8] hover:text-[#7dd3fc] transition-colors group/link"
        >
          <span>Read Technical Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </Link>

        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#94a3b8] hover:text-[#f1f5f9] transition-colors"
          >
            <GitBranch className="w-3.5 h-3.5" />
            <span>Repository</span>
          </a>
        ) : (
          <span className="font-mono text-[11px] text-[#64748b]">
            Code available on request
          </span>
        )}
      </div>
    </article>
  );
}