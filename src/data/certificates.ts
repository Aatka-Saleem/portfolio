// src/data/certificates.ts
import { Certificate } from "@/types";

export const certificatesData: Certificate[] = [
  // --- 🎓 Core AI / ML Tracks & Programs ---
  {
    title: "Machine Learning Engineer Career Track",
    issuer: "DataCamp",
    category: "Certification",
    issueDate: "Jul 2, 2026",
    verifyUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/track/f4f133888a6ee9e41c366351050be0f305f8b583?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa",
    imageUrl: "/certificates/datacamp-mle.png",
    skills: ["MLOps Lifecycle", "MLflow", "DVC", "Docker", "ETL Pipelines", "Model Monitoring", "CI/CD Actions"],
    description: "44-hour, 12-course comprehensive track covering production ML pipelines, experiment tracking with MLflow, data versioning with DVC, automated CI/CD with GitHub Actions, and containerized deployment."
  },
  {
    title: "Cohere ML Summer School 2026",
    issuer: "Cohere Labs",
    category: "Certification",
    issueDate: "Jul 27 – Aug 6, 2026",
    verifyUrl: "https://credsverse.com/credentials/b2f77d99-f460-44b9-ab6c-5990a4532db7?preview=1",
    imageUrl: "/certificates/cohere-ml.png",
    skills: ["World Models", "LLM Evaluation", "Agentic Reasoning", "Reinforcement Learning", "Edge AI", "System Observability"],
    description: "11-session deep technical intensive led by researchers from Cohere Labs, Mila, DeepMind, and Meta covering world models, continual RL, edge agentic inference, LLM-as-a-judge evaluation, and AI system reliability."
  },
  {
    title: "IBM RAG and Agentic AI (Specialized Track)",
    issuer: "IBM",
    category: "Certification",
    issueDate: "Aug – Oct 2025",
    imageUrl: "/certificates/ibm-advanced-rag.png",
    skills: ["LangChain", "LlamaIndex", "ChromaDB", "FAISS", "Parent Document Retriever", "Multi-Query"],
    description: "Comprehensive 4-course technical specialization focusing on generative AI application engineering, hybrid RAG systems, high-dimensional vector search, and advanced retrieval patterns.",
    subCertificates: [
      {
        title: "Develop Generative AI Applications: Get Started",
        courseNumber: "Course 1 of 8",
        issueDate: "Aug 2025",
        verifyUrl: "https://coursera.org/share/77fbae9d7e1d5054ac5db090eaa821a5",
        imageUrl: "/certificates/ibm-genai-apps.png",
        skills: ["LangChain", "JsonOutputParser", "Flask Web Apps", "Prompt Engineering"],
        summary: "Built Flask web apps with LangChain, structured outputs using JsonOutputParser, and benchmarked open models (Llama 3, Granite, Mixtral)."
      },
      {
        title: "Build RAG Applications: Get Started",
        courseNumber: "Course 2 of 8",
        issueDate: "Sep 2025",
        verifyUrl: "https://coursera.org/share/df26d3772e434cba63210e5114b746a3",
        imageUrl: "/certificates/ibm-build-rag.png",
        skills: ["LangChain", "LlamaIndex", "Document Chunking", "watsonx.ai", "Gradio"],
        summary: "Engineered end-to-end RAG workflows summarizing private documents, managing conversation memory, and contrasting retrieval architectures across LangChain and LlamaIndex."
      },
      {
        title: "Vector Databases for RAG: An Introduction",
        courseNumber: "Course 3 of 8",
        issueDate: "Sep 2025",
        verifyUrl: "https://coursera.org/share/0cba8b134f40769e07111d9be5fffd8d",
        imageUrl: "/certificates/ibm-vector-dbs.png",
        skills: ["ChromaDB", "Vector Indexing", "Similarity Search", "Recommendation Systems"],
        summary: "Implemented high-dimensional vector storage, manual similarity search algorithms, and recommendation pipelines integrated with ChromaDB."
      },
      {
        title: "Advanced RAG with Vector Databases and Retrievers",
        courseNumber: "Course 4 of 8",
        issueDate: "Oct 2025",
        verifyUrl: "https://coursera.org/share/d65ff2bdd2612810b21a4abba884eecb",
        imageUrl: "/certificates/ibm-advanced-rag.png",
        skills: ["Advanced Retrievers", "FAISS", "Parent Document Retriever", "Multi-Query", "Gradio"],
        summary: "Built semantic search engines with FAISS and ChromaDB, implemented multi-query and parent-document retrieval patterns, and deployed context-aware RAG interfaces."
      }
    ]
  },
  {
    title: "5-Day AI Agent Intensive & Hackathon",
    issuer: "Kaggle & Google",
    category: "Certification",
    issueDate: "Jun 15 – Jul 7, 2026",
    verifyUrl: "https://www.kaggle.com/certification/badges/aatkasaleem/108",
    imageUrl: "/certificates/kaggle-agents.png",
    skills: ["Autonomous Agents", "Tool Calling", "Multi-Agent Systems", "Agent Memory", "Production Guardrails"],
    description: "Intensive focused on engineering autonomous multi-agent systems, schema-validated tool calling, long-term agent memory, execution security guardrails, and observable agent deployment."
  },
  {
    title: "Generative AI Application Developer (Cohort 2)",
    issuer: "NCEAC / PakAngels HEC",
    category: "Certification",
    issueDate: "Jan – Feb 2026",
    verifyUrl: "https://quiz.ideagist.com/ideagist-certificate?cert_hash=82d33378ddadebf4",
    imageUrl: "/certificates/nceac-genai.png",
    skills: ["Generative AI", "LLM Integration", "Prompt Systems", "Application Development"],
    description: "Top Performer credential in the PakAngels HEC training cohort focusing on end-to-end generative AI development and production prompt architectures."
  },

  // --- 🏆 Competitive Achievements ---
  {
    title: "Meta Hacker Cup 2025 — Round 2 Qualifier",
    issuer: "Meta",
    category: "Achievement",
    issueDate: "2025",
    verifyUrl: "",
    imageUrl: "/certificates/meta-hacker-cup.png",
    skills: ["Algorithmic Optimization", "Data Structures", "Competitive Programming"],
    description: "Qualified past preliminary rounds into Round 2 of Meta's international competitive programming tournament, competing in the algorithmic track."
  }
];