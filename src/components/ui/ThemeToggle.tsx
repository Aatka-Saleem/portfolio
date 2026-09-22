// src/components/ui/ThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-8 h-8 rounded-lg border border-[#1e2433] bg-[#0e1118]/50" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Theme"
      className="relative p-2 rounded-lg border border-[#1e2433] bg-[#0e1118] text-[#94a3b8] hover:text-[#f1f5f9] hover:border-[#38bdf8]/50 transition-all focus-visible:outline-none"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-[#38bdf8] transition-transform hover:rotate-45 duration-200" />
      ) : (
        <Moon className="w-4 h-4 text-[#94a3b8] transition-transform hover:-rotate-12 duration-200" />
      )}
    </button>
  );
}