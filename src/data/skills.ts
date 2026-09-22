// src/data/skills.ts

// src/data/skills.ts

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Machine Learning",
    description:
      "Model development, data preparation, evaluation, and practical machine learning workflows",
    skills: [
      "Python",
      "Scikit-Learn",
      "PyTorch",
      "NumPy",
      "Pandas",
      "Classification",
      "Regression",
      "Feature Engineering",
      "Model Evaluation",
      "ML Pipelines",
    ],
  },

  {
    title: "MLOps & Model Lifecycle",
    description:
      "Experiment tracking, data versioning, deployment workflows, monitoring, and ML automation",
    skills: [
      "MLflow",
      "DVC",
      "Model Registry",
      "Experiment Tracking",
      "Model Monitoring",
      "Data Versioning",
      "CI/CD",
      "GitHub Actions",
      "Great Expectations",
      "Docker",
    ],
  },

  {
    title: "Generative AI & Agents",
    description:
      "LLM applications, retrieval-augmented generation, agent workflows, and contextual AI systems",
    skills: [
      "LLMs",
      "RAG",
      "LangChain",
      "LlamaIndex",
      "AI Agents",
      "Multi-Agent Workflows",
      "Embeddings",
      "Dense Retrieval",
      "Hybrid Search",
      "Reranking",
    ],
  },

  {
    title: "Data, Vision & Infrastructure",
    description:
      "Data processing, computer vision, backend APIs, and deployment infrastructure",
    skills: [
      "SQL",
      "DuckDB",
      "Data Preprocessing",
      "Data Transformation",
      "OpenCV",
      "YOLOv5",
      "Image Classification",
      "Object Detection",
      "Image Segmentation",
      "FastAPI",
      "Flask",
      "REST APIs",
      "Streamlit",
      "Google Cloud Run",
      "Git & GitHub",
    ],
  },
];

