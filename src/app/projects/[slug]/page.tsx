// src/app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { projectsData } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { ArrowLeft, GitBranch, Cpu, CheckCircle2, AlertCircle, Workflow } from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

// Statically pre-render all known project slugs at build time
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

// Dynamic SEO metadata per case study
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study | Aatka Saleem`,
    description: project.shortDescription,
  };
}

export default async function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      {/* Top Breadcrumb Navigation */}
      <div className="mb-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#94a3b8] hover:text-[#f1f5f9] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* Case Study Header */}
      <header className="space-y-4 pb-8 border-b border-[#181d2a]">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="accent">{project.category}</Badge>
          <span className="text-xs font-mono text-[#94a3b8]">{project.highlightSignal}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#f1f5f9]">
          {project.title}
        </h1>

        <p className="text-base text-[#94a3b8] leading-relaxed max-w-2xl">
          {project.shortDescription}
        </p>

        {/* Tech Stack List */}
        <div className="flex flex-wrap gap-1.5 pt-2" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="default" className="text-xs py-1">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Links */}
        <div className="pt-4 flex items-center gap-4">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#38bdf8] hover:text-[#7dd3fc] transition-colors"
            >
              <GitBranch className="w-4 h-4" />
              <span>View Source Code</span>
            </a>
          ) : (
            <span className="text-xs font-mono text-[#64748b]">
              Code available upon request
            </span>
          )}
        </div>
      </header>

      {/* Case Study Body */}
      <div className="py-10 space-y-12">
        {/* 1. Problem & Motivation */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#f1f5f9] flex items-center gap-2">
            <span className="text-[#38bdf8] font-mono text-sm">01.</span>
            Problem &amp; Context
          </h2>
          <div className="p-5 rounded-lg bg-[#0e1118] border border-[#1e2433] space-y-3">
            <p className="text-sm text-[#cbd5e1] leading-relaxed">
              {caseStudy.problem}
            </p>
            <p className="text-sm text-[#94a3b8] leading-relaxed pt-2 border-t border-[#181d2a]">
              <strong className="text-[#f1f5f9] font-mono text-xs">Engineered Approach: </strong>
              {caseStudy.approach}
            </p>
          </div>
        </section>

        {/* 2. Architecture & Workflow */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-[#f1f5f9] flex items-center gap-2">
            <span className="text-[#38bdf8] font-mono text-sm">02.</span>
            Architecture &amp; System Flow
          </h2>
          <p className="text-sm text-[#94a3b8]">
            {caseStudy.architecture.overview}
          </p>

          {/* Flow representation */}
          <div className="p-4 rounded-lg bg-[#07080c] border border-[#1e2433] font-mono text-xs text-[#38bdf8] flex items-center gap-2 overflow-x-auto">
            <Workflow className="w-4 h-4 shrink-0 text-[#94a3b8]" />
            <span className="whitespace-nowrap">{caseStudy.architecture.workflow}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {caseStudy.architecture.components.map((comp, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-[#0e1118] border border-[#1e2433] text-xs space-y-1"
              >
                <div className="font-mono text-[#38bdf8] font-medium flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Module {idx + 1}</span>
                </div>
                <p className="text-[#cbd5e1] leading-relaxed">{comp}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Engineering Decisions */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#f1f5f9] flex items-center gap-2">
            <span className="text-[#38bdf8] font-mono text-sm">03.</span>
            Key Engineering Decisions
          </h2>
          <ul className="space-y-2">
            {caseStudy.engineeringDecisions.map((decision, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 p-4 rounded-lg bg-[#0e1118] border border-[#1e2433] text-xs text-[#cbd5e1] leading-relaxed"
              >
                <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                <span>{decision}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 4. Engineering Challenges */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#f1f5f9] flex items-center gap-2">
            <span className="text-[#38bdf8] font-mono text-sm">04.</span>
            Challenges &amp; Bottlenecks
          </h2>
          <ul className="space-y-2">
            {caseStudy.challenges.map((challenge, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 p-4 rounded-lg bg-[#0e1118] border border-[#1e2433] text-xs text-[#cbd5e1] leading-relaxed"
              >
                <AlertCircle className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 5. Evaluation & Results */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#f1f5f9] flex items-center gap-2">
            <span className="text-[#38bdf8] font-mono text-sm">05.</span>
            Evaluation &amp; Verified Results
          </h2>
          <div className="p-5 rounded-lg bg-[#0e1118] border border-[#1e2433] space-y-3">
            <p className="text-xs font-mono text-[#94a3b8]">
              <strong>Benchmarking Context: </strong>
              {caseStudy.evaluation}
            </p>
            <div className="pt-2 border-t border-[#181d2a] space-y-1.5">
              {caseStudy.results.map((result, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#f1f5f9]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                  <span>{result}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Lessons Learned */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#f1f5f9] flex items-center gap-2">
            <span className="text-[#38bdf8] font-mono text-sm">06.</span>
            Engineering Lessons Learned
          </h2>
          <div className="p-5 rounded-lg bg-[#0e1118] border border-[#1e2433] space-y-2">
            {caseStudy.lessonsLearned.map((lesson, idx) => (
              <p key={idx} className="text-xs text-[#cbd5e1] leading-relaxed">
                • {lesson}
              </p>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom Navigation */}
      <footer className="pt-8 border-t border-[#181d2a] flex items-center justify-between">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#38bdf8] hover:text-[#7dd3fc] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all projects</span>
        </Link>
      </footer>
    </div>
  );
}