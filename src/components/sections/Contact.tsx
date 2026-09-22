// src/components/sections/Contact.tsx
"use client";

import { useState, useRef, MouseEvent } from "react";
import { personalData } from "@/data/personal";
import { Button } from "@/components/ui/Button";
import { Mail, Copy, Check, ArrowUpRight, Terminal, Radio } from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);
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

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative rounded-2xl bg-[#0e1118] border border-[#1e2433] hover:border-[#2b3548] p-8 sm:p-12 overflow-hidden transition-all duration-300 shadow-xl"
      >
        {/* Dynamic Cursor Spotlight Effect */}
        {isHovered && (
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.12), transparent 80%)`,
            }}
          />
        )}

        <div className="relative max-w-2xl space-y-6">
          {/* Header & Status Beacon */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8]">
              <Radio className="w-4 h-4 animate-pulse text-[#38bdf8]" />
              <span className="tracking-wider">COMMUNICATION UPLINK</span>
            </div>
            
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#151922] border border-[#1e2433] text-[11px] font-mono text-[#94a3b8]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-emerald-300 font-medium">Inbox Open &amp; Active</span>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#f1f5f9]">
              Let’s Engineer Together
            </h2>
            <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
              I’m actively looking for opportunities in Machine Learning Engineering, AI Agent Architectures, and RAG systems. Whether you have an open role, an engineering challenge, or want to talk system architectures, let’s connect.
            </p>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              href={`mailto:${personalData.email}`}
              variant="primary"
              size="md"
              className="font-mono text-xs shadow-lg shadow-[#38bdf8]/10 hover:shadow-[#38bdf8]/20 transition-all active:scale-95"
            >
              <Mail className="w-3.5 h-3.5 mr-1.5" />
              Initiate Direct Email
            </Button>

            <button
              type="button"
              onClick={handleCopyEmail}
              aria-label="Copy email address"
              className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded text-xs font-mono font-medium border transition-all duration-200 active:scale-95 focus-visible:outline-none ${
                copied
                  ? "bg-[#38bdf8]/15 border-[#38bdf8] text-[#38bdf8]"
                  : "bg-[#171b26] border-[#262f40] text-[#cbd5e1] hover:bg-[#1e2433] hover:text-[#f1f5f9]"
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#38bdf8] animate-in zoom-in-50 duration-150" />
                  <span>Email Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#94a3b8]" />
                  <span>{personalData.email}</span>
                </>
              )}
            </button>
          </div>

          {/* Social Nodes */}
          <div className="pt-6 border-t border-[#181d2a] flex flex-wrap items-center gap-4 text-xs font-mono">
            <span className="text-[#64748b] flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" />
              VERIFIED NODES:
            </span>

            <a
              href={personalData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded bg-[#11141c] border border-[#1e2433] hover:border-[#38bdf8]/50 text-[#94a3b8] hover:text-[#f1f5f9] transition-all flex items-center gap-1 hover:-translate-y-0.5"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-[#38bdf8]" />
            </a>

            <a
              href={personalData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded bg-[#11141c] border border-[#1e2433] hover:border-[#38bdf8]/50 text-[#94a3b8] hover:text-[#f1f5f9] transition-all flex items-center gap-1 hover:-translate-y-0.5"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-[#38bdf8]" />
            </a>

            <a
              href={personalData.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded bg-[#11141c] border border-[#1e2433] hover:border-[#38bdf8]/50 text-[#94a3b8] hover:text-[#f1f5f9] transition-all flex items-center gap-1 hover:-translate-y-0.5"
            >
              <span>LeetCode</span>
              <ArrowUpRight className="w-3 h-3 text-[#38bdf8]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}