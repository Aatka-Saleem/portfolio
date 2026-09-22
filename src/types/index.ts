// src/types/index.ts

export type ProjectCategory = 
  | "Agentic AI" 
  | "Machine Learning" 
  | "Computer Vision" 
  | "RAG & Retrieval";

export interface ProjectMetric {
  label: string;
  value: string;
  verified: boolean;
}

export interface CaseStudy {
  problem: string;
  approach: string;
  architecture: {
    overview: string;
    components: string[];
    workflow: string;
  };
  engineeringDecisions: string[];
  challenges: string[];
  evaluation: string;
  results: string[];
  lessonsLearned: string[];
}

export interface Project {
  title: string;
  slug: string;
  category: ProjectCategory;
  shortDescription: string;
  highlightSignal: string; // e.g. "U-Net Semantic Segmentation" or "SEO Decay Modeling"
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  liveUrl?: string;
  caseStudy: CaseStudy;
  metrics?: ProjectMetric[];
  featured: boolean;
  order: number;
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  type: "Internship" | "Leadership" | "Fellowship";
  highlights: string[];
  technologies: string[];
}

export interface Certificate {
  title: string;
  issuer: string;
  category: "Certification" | "Achievement";
  issueDate?: string;
  verifyUrl?: string;
  skills: string[];
  description?: string;
}



export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  type: "Internship" | "Leadership" | "Fellowship";
  highlights: string[];
  technologies: string[];
  certificateUrl?: string; // Image path (e.g. /certificates/flyrank.png) or PDF link
  certificateTitle?: string;
}


export interface SubCertificate {
  title: string;
  courseNumber: string;
  issueDate: string;
  verifyUrl?: string;
  imageUrl: string;
  skills: string[];
  summary: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  category: "Certification" | "Achievement";
  issueDate?: string;
  verifyUrl?: string;
  imageUrl?: string;
  skills: string[];
  description?: string;
  subCertificates?: SubCertificate[];
}

