// src/components/sections/Experience.tsx
"use client";

import { useState, useEffect } from "react";
import { experienceData } from "@/data/experience";
import { ExperienceItem } from "@/types";
import { Badge } from "@/components/ui/Badge";
import {
  Briefcase,
  Calendar,
  MapPin,
  Award,
  X,
  ExternalLink,
} from "lucide-react";

export function Experience() {
  const [selectedCert, setSelectedCert] = useState<{
    url: string;
    title: string;
    company: string;
  } | null>(null);

  // Close modal on Escape key press and freeze background scrolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };

    if (selectedCert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedCert]);

  const isPdf = selectedCert?.url.toLowerCase().endsWith(".pdf");

  return (
    <section
      id="experience"
      className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-[#181d2a]"
    >
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8]">
          <Briefcase className="w-4 h-4" />
          <span>CAREER &amp; LEADERSHIP MILESTONES</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#f1f5f9]">
          Engineering Experience
        </h2>

        <p className="text-sm text-[#94a3b8] max-w-xl">
          Internships and engineering leadership focused on machine learning
          systems, data pipelines, and technical community growth.
        </p>
      </div>

      {/* Timeline List */}
      <div className="relative border-l border-[#1e2433] ml-3 sm:ml-4 space-y-12">
        {experienceData.map((item: ExperienceItem, idx: number) => (
          <div
            key={`${item.company}-${idx}`}
            className="relative pl-6 sm:pl-8 group"
          >
            {/* Timeline Node */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#090a0f] border-2 border-[#38bdf8] group-hover:scale-110 transition-transform" />

            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-[#f1f5f9] tracking-tight">
                  {item.role}{" "}
                  <span className="text-[#38bdf8] font-normal">
                    @ {item.company}
                  </span>
                </h3>

                <div className="flex items-center gap-2">
                  {item.certificateUrl && (
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedCert({
                          url: item.certificateUrl!,
                          title:
                            item.certificateTitle ||
                            "Experience Verification",
                          company: item.company,
                        })
                      }
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono font-medium text-[#38bdf8] bg-[#38bdf8]/10 border border-[#38bdf8]/30 hover:bg-[#38bdf8]/20 transition-all active:scale-95 focus-visible:outline-none"
                    >
                      <Award className="w-3.5 h-3.5" />
                      <span>Verify Credential</span>
                    </button>
                  )}

                  <Badge
                    variant={
                      item.type === "Leadership" ? "accent" : "outline"
                    }
                    className="text-[11px]"
                  >
                    {item.type}
                  </Badge>
                </div>
              </div>

              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#94a3b8]">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#64748b]" />
                  {item.period}
                </span>

                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#64748b]" />
                  {item.location}
                </span>
              </div>

              {/* Highlights */}
              <ul className="space-y-2 pt-2 text-xs text-[#cbd5e1] leading-relaxed">
                {item.highlights.map(
                  (highlight: string, hIdx: number) => (
                    <li
                      key={hIdx}
                      className="flex items-start gap-2"
                    >
                      <span className="text-[#38bdf8] shrink-0 mt-0.5">
                        •
                      </span>
                      <span>{highlight}</span>
                    </li>
                  )
                )}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-3">
                {item.technologies.map((tech: string) => (
                  <Badge
                    key={tech}
                    variant="default"
                    className="text-[11px] py-0.5"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Verification Modal / Lightbox Frame */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-150"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] rounded-xl bg-[#0e1118] border border-[#2b3548] p-4 sm:p-6 shadow-2xl flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-3 border-b border-[#181d2a]">
              <div>
                <span className="text-[11px] font-mono text-[#38bdf8] uppercase tracking-wider">
                  Verified Credential Preview
                </span>

                <h3
                  id="modal-title"
                  className="text-base font-bold text-[#f1f5f9] mt-0.5"
                >
                  {selectedCert.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                aria-label="Close modal"
                className="p-1.5 rounded-lg text-[#94a3b8] hover:text-[#f1f5f9] hover:bg-[#1e2433] transition-colors focus-visible:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* In-Frame Preview Container */}
            <div className="relative w-full h-[65vh] min-h-[360px] rounded-lg bg-[#07080c] border border-[#1e2433] flex items-center justify-center p-2 sm:p-4 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedCert.url}
                alt={selectedCert.title}
                className="w-auto h-auto max-w-full max-h-full object-contain rounded shadow-lg select-none"
                loading="eager"
              />
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between pt-1">
              <span className="text-[11px] font-mono text-[#64748b]">
                Press ESC or click outside to close
              </span>

              <a
                href={selectedCert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#38bdf8] hover:text-[#7dd3fc] transition-colors"
              >
                <span>Open in New Tab</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}