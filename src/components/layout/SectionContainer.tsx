// src/components/layout/SectionContainer.tsx
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export function SectionContainer({ id, className, children }: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-[#181d2a] last:border-b-0",
        className
      )}
    >
      {children}
    </section>
  );
}