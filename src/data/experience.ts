// src/data/experience.ts
import { ExperienceItem } from "@/types";

export const experienceData: ExperienceItem[] = [
{
  company: "FlyRank AI",
  role: "Machine Learning Intern",
  location: "Remote",
  period: "Jul 2026 – Aug 2026",
  type: "Internship",
  highlights: [
    "Built a leakage-safe machine learning pipeline to prioritize web pages for content refresh based on search and engagement signals.",
    "Engineered temporal features and analytical transformations using DuckDB and Python across anonymized content-performance data.",
    "Benchmarked Logistic Regression, Decision Tree, and Random Forest models using time-aware validation and ranking metrics.",
    "Developed reproducible evaluation and reporting workflows with explainable outputs for human-in-the-loop editorial decision support."
  ],
  technologies: [
    "Python",
    "DuckDB",
    "Scikit-Learn",
    "Pandas",
    "SQL"
  ],
  certificateUrl:
    "/certificates/flyrank-certificate-of-completion-machine-learning-1.png",
  certificateTitle:
    "FlyRank AI — Machine Learning Internship Completion Credential"
},

{
  company: "CIS Community, NEDUET",
  role: "Co-Head, Team Coding & Innovation",
  location: "Karachi, Pakistan",
  period: "Apr 2024 – Present",
  type: "Leadership",
  highlights: [
    "Progressed from Team Member to Co-Head, contributing to the growth and technical direction of a student-led engineering community.",
    "Recruited and onboarded engineering students while coordinating technical initiatives and collaborative project activities.",
    "Designed and organized The Logic Forge, a 3-week competitive DSA challenge, and co-led CIS Coders Arena, a 24-hour programming event with 3 rounds and 11 challenges.",
    "Served as Technical Judge for PulseCode Ramadan Hackathon, evaluating AI/ML submissions for code quality, readability, and software architecture.",
    "Led technical evaluation for ZeroToShip, a summer project initiative involving phase-wise development, project reviews, evaluation criteria, and technical feedback."
  ],
  technologies: [
    "Python",
    "Data Structures & Algorithms",
    "AI/ML",
    "Software Engineering",
    "Technical Evaluation",
    "Project Management"
  ],
  certificateUrl: "/certificates/cis-community-cohead-certificate.png",
  certificateTitle: "CIS Community, NEDUET — Co-Head, Team Coding & Innovation"
},
 {
  company: "Pakistan Airports Authority (PAA)",
  role: "Data & BI Analytics Intern",
  location: "Headquarters, Karachi",
  period: "Dec 2025 – Jan 2026",
  type: "Internship",
  highlights: [
    "Built an interactive Aero Billing Business Intelligence dashboard to analyze airport revenue across airports, operators, charge heads, flight categories, and sectors.",
    "Cleaned and modeled transactional billing data, creating time hierarchies, validation checks, and interactive slicers for multi-dimensional analysis.",
    "Developed KPI cards and visual analytics including revenue trends, airport comparisons, operator rankings, and domestic versus international analysis.",
    "Provided transaction-level views for validation and deeper analysis while improving the efficiency and accessibility of financial reporting."
  ],
  technologies: [
    "Power BI",
    "Data Modeling",
    "ETL & Data Cleaning",
    "Financial Analytics",
    "Spreadsheet Tools"
  ],
  certificateUrl:
   "/certificates/paa-data-bi-analytics-internship-certificate.png",
  certificateTitle:
  "Pakistan Airports Authority — Data & BI Analytics Internship Completion Certificate"

}
  
];