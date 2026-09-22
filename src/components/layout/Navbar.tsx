// src/components/layout/Navbar.tsx
"use client";

import { useState } from "react";
import { personalData } from "@/data/personal";
import { Button } from "@/components/ui/Button";
import { Menu, X, FileText } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#181d2a] dark:border-[#181d2a] bg-[#090a0f]/80 dark:bg-[#090a0f]/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group focus-visible:outline-none"
          aria-label={`${personalData.name} - Home`}
        >
          <span className="font-mono text-sm font-semibold tracking-wider text-[#f1f5f9] group-hover:text-[#38bdf8] transition-colors">
            {personalData.name.toUpperCase()}
          </span>
          <span className="text-xs font-mono text-[#94a3b8] hidden sm:inline-block">
            / AI Eng
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          {personalData.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-mono text-[#94a3b8] hover:text-[#f1f5f9] transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}

          {/* Actions: Resume + Theme Toggle */}
          <div className="flex items-center gap-3 pl-2">
            <Button
              href={personalData.socials.resume}
              isExternal
              variant="outline"
              size="sm"
              className="font-mono text-xs"
            >
              <FileText className="w-3.5 h-3.5 mr-1" />
              Resume
            </Button>
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Menu & Theme Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            href={personalData.socials.resume}
            isExternal
            variant="outline"
            size="sm"
            className="font-mono text-xs"
          >
            <FileText className="w-3.5 h-3.5" />
          </Button>
          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="p-2 rounded text-[#94a3b8] hover:text-[#f1f5f9] hover:bg-[#171b26] focus-visible:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-[#f1f5f9]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#181d2a] bg-[#0c0e15] px-4 pt-2 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {personalData.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="px-3 py-2 rounded text-sm font-mono text-[#94a3b8] hover:text-[#f1f5f9] hover:bg-[#151922] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}