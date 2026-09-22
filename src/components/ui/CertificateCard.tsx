// src/components/ui/CertificateCard.tsx
"use client";

import { useState, useRef, MouseEvent } from "react";
import { Certificate } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Award, Trophy, Eye, ExternalLink, Calendar, Layers } from "lucide-react";

interface CertificateCardProps {
  cert: Certificate;
  onPreview: (cert: Certificate) => void;
}

export function CertificateCard({ cert, onPreview }: CertificateCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const isAchievement = cert.category === "Achievement";
  const hasSubCerts = Boolean(cert.subCertificates && cert.subCertificates.length > 0);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-xl p-6 bg-[#0e1118] border border-[#1e2433] hover:border-[#2b3548] transition-all duration-300 flex flex-col justify-between overflow-hidden group"
    >
      {/* Dynamic Cursor Spotlight Border Accent */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.15), transparent 80%)`,
          }}
        />
      )}

      <div className="relative space-y-4">
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Badge variant={isAchievement ? "accent" : "outline"} className="text-[11px]">
              {isAchievement ? (
                <Trophy className="w-3 h-3 text-[#38bdf8] mr-1" />
              ) : (
                <Award className="w-3 h-3 text-[#94a3b8] mr-1" />
              )}
              {cert.category}
            </Badge>

            {hasSubCerts && (
              <Badge variant="accent" className="text-[10px] py-0 px-2">
                <Layers className="w-3 h-3 mr-1" />
                {cert.subCertificates?.length} Courses Completed
              </Badge>
            )}
          </div>

          {cert.issueDate && (
            <span className="font-mono text-[11px] text-[#64748b] flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {cert.issueDate}
            </span>
          )}
        </div>

        {/* Title & Issuer */}
        <div>
          <h3 className="text-base font-bold text-[#f1f5f9] tracking-tight group-hover:text-[#38bdf8] transition-colors">
            {cert.title}
          </h3>
          <p className="font-mono text-xs text-[#94a3b8] mt-0.5">
            {cert.issuer}
          </p>
        </div>

        {/* Full Unclipped Description */}
        {cert.description && (
          <p className="text-xs text-[#94a3b8] leading-relaxed">
            {cert.description}
          </p>
        )}

        {/* Skill Chips */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {cert.skills.map((skill) => (
            <Badge key={skill} variant="default" className="text-[10px] py-0.5 px-2">
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      {/* Action Links */}
      <div className="relative flex items-center justify-between pt-5 mt-5 border-t border-[#181d2a]">
        <button
          type="button"
          onClick={() => onPreview(cert)}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#38bdf8] hover:text-[#7dd3fc] transition-colors focus-visible:outline-none"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>
            {hasSubCerts
              ? `Inspect All ${cert.subCertificates?.length} Credentials`
              : "Inspect Credential"}
          </span>
        </button>

        {cert.verifyUrl && (
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-mono text-[#94a3b8] hover:text-[#f1f5f9] transition-colors"
          >
            <span>External Record</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
}