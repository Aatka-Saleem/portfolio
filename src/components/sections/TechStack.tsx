// src/components/sections/TechStack.tsx
import { skillsData, SkillCategory } from "@/data/skills";
import { Badge } from "@/components/ui/Badge";
import { Layers } from "lucide-react";

export function TechStack() {
  return (
    <section id="skills" className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-[#181d2a]">
      {/* Section Header */}
      <div className="space-y-2 mb-12"> 
        <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8]"> 
          <Layers className="w-4 h-4" /> 
          <span>TECHNICAL STACK</span> 
        </div> 
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#f1f5f9]"> 
            Tools I Build With 
          </h2> 
          <p className="text-sm text-[#94a3b8] max-w-xl"> 
            A practical stack spanning machine learning, generative AI, retrieval systems, computer vision, and backend development. 
          </p> 
      </div>
    
      {/* Grid of Architectural Layers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((category: SkillCategory) => (
          <div
            key={category.title}
            className="p-6 rounded-xl bg-[#0e1118] border border-[#1e2433] hover:border-[#38bdf8]/40 hover:-translate-y-1 transition-all duration-200 shadow-md hover:shadow-xl hover:shadow-[#38bdf8]/5 flex flex-col justify-between group"
          >
            <div>
              <h3 className="text-base font-semibold text-[#f1f5f9] tracking-tight">
                {category.title}
              </h3>
              <p className="text-xs text-[#94a3b8] mt-1 mb-4 leading-relaxed">
                {category.description}
              </p>
            </div>

            <ul className="flex flex-wrap gap-2 pt-2 border-t border-[#181d2a]" aria-label={`${category.title} technologies`}>
              {category.skills.map((skill: string) => (
                <li key={skill}>
                  <Badge variant="default" className="text-[11px] py-1">
                    {skill}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}