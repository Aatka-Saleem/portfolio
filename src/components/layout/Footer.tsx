// src/components/layout/Footer.tsx
import { personalData } from "@/data/personal";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#181d2a] bg-[#07080c] py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#64748b]">
        <div>
          <span>© {currentYear} {personalData.name}. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[#94a3b8]">System Status: Operational</span>
        </div>
      </div>
    </footer>
  );
}