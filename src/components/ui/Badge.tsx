// src/components/ui/Badge.tsx
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "outline" | "accent";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono font-medium tracking-wide transition-colors",
        {
          "bg-[#151922] text-[#94a3b8] border border-[#1e2433]": variant === "default",
          "border border-[#2d3748] text-[#cbd5e1] bg-transparent": variant === "outline",
          "bg-[rgba(56,189,248,0.08)] text-[#38bdf8] border border-[rgba(56,189,248,0.25)]": variant === "accent",
        },
        className
      )}
    >
      {children}
    </span>
  );
}