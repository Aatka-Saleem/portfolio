
// src/components/sections/Hero.tsx
"use client";

import { useState } from "react";
import { personalData } from "@/data/personal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { NeuralGraph } from "@/components/ui/NeuralGraph";
import { Code2, ArrowDown, FileText, MapPin } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export function Hero() {
  const [copiedTrace, setCopiedTrace] = useState(false);

  const handleCopyCmd = () => {
    navigator.clipboard.writeText("npx aatka-profile@latest");
    setCopiedTrace(true);
    setTimeout(() => setCopiedTrace(false), 2000);
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-28 sm:pb-24 border-b border-[#181d2a]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Bio & Positioning */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          <div className="flex items-center gap-2">
            <Badge variant="accent" className="py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-ping mr-1" />
              AI &amp; ML Engineering
            </Badge>

            <span className="flex items-center gap-1 text-xs font-mono text-[#94a3b8]">
              <MapPin className="w-3.5 h-3.5" />
              {personalData.location}
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#f1f5f9]">
              {personalData.name}
            </h1>

            <p className="text-xl sm:text-2xl font-mono text-[#38bdf8] font-medium">
              {personalData.role}
            </p>
          </div>

          <p className="text-base sm:text-lg text-[#94a3b8] leading-relaxed">
            Hi! I&apos;m a Computer &amp; Information Systems Engineering
            student at NED University. I focus on building practical,
            real-world AI/ML systems. Through hands-on projects and
            internships, I actively explore{" "}
            <span className="text-[#f1f5f9] font-medium underline decoration-[#38bdf8]/40 underline-offset-4">
              Computer Vision
            </span>
            ,{" "}
            <span className="text-[#f1f5f9] font-medium underline decoration-[#38bdf8]/40 underline-offset-4">
              Retrieval-Augmented Generation (RAG)
            </span>
            , and{" "}
            <span className="text-[#f1f5f9] font-medium underline decoration-[#38bdf8]/40 underline-offset-4">
              autonomous AI agents
            </span>
            .
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              href="#projects"
              variant="primary"
              size="md"
              className="font-mono text-xs shadow-lg shadow-[#f1f5f9]/5"
            >
              View Case Studies
              <ArrowDown className="w-3.5 h-3.5 ml-1.5" />
            </Button>

            <Button
              href={personalData.socials.resume}
              isExternal
              variant="secondary"
              size="md"
              className="font-mono text-xs"
            >
              <FileText className="w-3.5 h-3.5 mr-1.5" />
              Resume
            </Button>
          </div>

          <div className="flex items-center gap-5 pt-4 border-t border-[#181d2a] w-full max-w-md">
            <a
              href={personalData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-[#94a3b8] hover:text-[#f1f5f9] transition-all hover:scale-105"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={personalData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-[#94a3b8] hover:text-[#f1f5f9] transition-all hover:scale-105"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href={personalData.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-[#94a3b8] hover:text-[#f1f5f9] transition-all hover:scale-105"
            >
              <Code2 className="w-4 h-4" />
              <span>LeetCode</span>
            </a>
          </div>
        </div>

        {/* Right: Neural Graph */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-[390px]">
            <NeuralGraph />
          </div>
        </div>
      </div>
    </section>
  );
}
