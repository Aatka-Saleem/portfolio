// src/data/projects.ts
import { Project } from "@/types";

export const projectsData: Project[] = [

  {
  title: "ResearchPilot AI: Secure Multi-Agent Research System",
  slug: "researchpilot-ai",
  category: "Agentic AI",
  shortDescription:
    "Secure multi-agent research system that transforms a research topic into grounded findings, an executive report, and a presentation through decoupled agents, MCP-based retrieval, and security guardrails.",
  highlightSignal:
    "Capability Separation & MCP-Based Secure Retrieval",
  technologies: [
    "Python",
    "Google ADK",
    "Gemini",
    "MCP",
    "FastMCP",
    "FAISS",
    "RAG",
    "Streamlit",
    "Pydantic",
    "Docker"
  ],
  githubUrl:
    "https://github.com/Aatka-Saleem/ResearchPilot",
  demoUrl:
    "https://researchpilot-yf9a3dfzcb4hwxuze4gvar.streamlit.app/",
  caseStudy: {
    problem:
      "Autonomous research agents that browse the web, write to a knowledge base, and generate reports within one unrestricted loop can be exposed to indirect prompt injection, knowledge-base poisoning, and fabricated citations. Enterprise research workflows therefore need stronger separation between untrusted web content, persistent retrieval infrastructure, and report generation.",

    approach:
      "Built a sequential multi-agent research pipeline that separates web research, knowledge indexing, and report generation into distinct capability boundaries. ResearchAgent performs grounded web research and sanitizes retrieved content, IndexAgent manages chunking and vector indexing through an isolated FastMCP server, and ReportAgent performs read-only retrieval before generating and validating the final report and presentation.",

    architecture: {
      overview:
        "Capability-separated multi-agent workflow using Google ADK, FastMCP over stdio, Gemini grounding and embeddings, and a local FAISS vector index.",

      components: [
        "ResearchAgent: Performs Google Search Grounding and aggregates literature without database-write access",
        "Security Sanitizer: Detects and removes known prompt-injection patterns before indexing",
        "IndexAgent: Chunks sanitized research and sends typed indexing requests through MCP",
        "FastMCP Server: Isolates FAISS persistence, embeddings, and vector-store operations from the agents",
        "ReportAgent: Performs focused read-only retrieval and synthesizes grounded research outputs",
        "Citation Validator: Cross-checks generated URLs against indexed source metadata before inclusion",
        "Presentation Generator: Converts structured Pydantic slide-deck output into a PowerPoint presentation",
        "Streamlit UI: Provides an interactive interface for running the pipeline and downloading generated artifacts"
      ],

      workflow:
        "Research Topic -> ResearchAgent + Google Search Grounding -> Sanitization -> IndexAgent -> FastMCP Vector Store -> FAISS Retrieval -> ReportAgent -> Citation Validation -> Markdown Report + PowerPoint"
    },

    engineeringDecisions: [
      "Separated internet access from vector-store write access so the research agent cannot directly modify persistent knowledge storage.",
      "Placed FAISS persistence and embedding operations behind a FastMCP subprocess instead of exposing the vector store directly to every agent.",
      "Sanitized research content before embedding to reduce the risk of malicious instructions entering the retrieval corpus.",
      "Used structured Pydantic output for presentation generation to make slide-deck creation predictable and machine-readable.",
      "Validated generated URLs against indexed source metadata before allowing citations into the final report.",
      "Added a human-readable Streamlit interface while retaining a CLI workflow for reproducible execution.",
      "Added pre-commit protection against accidentally committing Gemini-style API keys."
    ],

    challenges: [
      "Preventing untrusted web content from crossing directly into persistent knowledge storage or downstream report generation.",
      "Maintaining useful research context while filtering potential prompt-injection instructions from retrieved literature.",
      "Keeping retrieval and report generation grounded without assuming that every generated citation is authentic.",
      "Coordinating multiple agents through a predictable sequential workflow while maintaining clear capability boundaries.",
      "Handling model quota limitations with a fallback model path without silently failing the research workflow."
    ],

    evaluation:
      "Verified the multi-agent configuration, orchestration, and FAISS vector-store operations through automated tests. The example pipeline also performs an explicit citation audit after report generation and reports the number of generated URLs that could not be matched against the indexed source corpus.",

    results: [
      "Implemented a complete research workflow producing research findings, an executive Markdown report, and a PowerPoint presentation.",
      "Separated web research, indexing, and reporting capabilities across independent agents.",
      "Indexed 23 semantic research fragments into the FAISS retrieval layer during the documented example run.",
      "The documented example run completed its citation audit with 0 unmatched generated URLs.",
      "Packaged the system with Docker and deployment automation for Google Cloud Run.",
      "Exposed the complete workflow through both CLI execution and an interactive Streamlit application."
    ],

    lessonsLearned: [
      "Multi-agent architecture becomes more valuable when agent boundaries enforce meaningful capability separation rather than simply dividing prompts between agents.",
      "MCP can provide a useful interface boundary between AI agents and sensitive infrastructure such as persistent vector stores.",
      "Prompt-injection sanitization and citation validation reduce specific failure modes but should be treated as practical guardrails rather than complete security guarantees.",
      "A research agent should distinguish grounded evidence from generated synthesis instead of assuming that fluent model output is inherently trustworthy.",
      "Security controls are most useful when integrated directly into the data flow rather than added only at the final output stage."
    ]
  },
  featured: true,
  order: 1
},
  
{
  title: "FlyRank Content Refresh ML Pipeline",
  slug: "flyrank-ml-pipeline",
  category: "Machine Learning",
  shortDescription:
    "Leakage-safe ML pipeline that ranks web pages by content refresh opportunity, turning search and engagement signals into an explainable editorial review queue.",
  highlightSignal:
    "Leakage-Safe Feature Engineering & Precision@K Ranking",
  technologies: [
    "Python",
    "DuckDB",
    "Scikit-Learn",
    "Pandas",
    "SQL",
    "GitHub Actions"
  ],
  githubUrl:
    "https://github.com/Aatka-Saleem/flyrank-ml-internship-starter",
  liveUrl:
    "https://aatka-saleem.github.io/flyrank-ml-internship-starter/",
  caseStudy: {
    problem:
      "Large content portfolios accumulate thousands of pages whose search performance can decline over time. Manually identifying which pages deserve attention first is inefficient, while careless feature engineering can introduce future-information leakage and produce misleading model performance.",

    approach:
      "Built a reproducible ML workflow that transforms anonymized search and engagement signals into a ranked content-refresh queue. The pipeline establishes a transparent rule-based baseline, engineers leakage-safe temporal features, trains multiple supervised learning models, evaluates ranking quality, and exports results with human-readable decision signals.",

    architecture: {
      overview:
        "Modular end-to-end ML pipeline combining data preparation, analytical feature engineering, baseline scoring, supervised modeling, ranking evaluation, reporting, and human-in-the-loop review.",

      components: [
        "Data Preparation: Cleans and validates anonymized content and search-performance records",
        "DuckDB Analytics: Performs efficient SQL-based temporal aggregations and feature calculations",
        "Feature Engineering: Builds observable historical signals while isolating future target windows",
        "Baseline Scoring: Establishes an interpretable rule-based benchmark before ML modeling",
        "Model Training: Compares Logistic Regression, Decision Tree, and Random Forest approaches",
        "Evaluation & Ranking: Measures Precision@K, AUC, and Average Precision for prioritization quality",
        "Reporting Layer: Generates charts, Markdown findings, and a shareable PDF research report",
        "Decision Support: Produces a ranked refresh queue with human review and editorial guardrails"
      ],

      workflow:
        "Anonymized Search & Content Data -> Data Preparation -> DuckDB Temporal Aggregations -> Leakage-Safe Features -> Rule-Based Baseline -> ML Training -> Ranking Evaluation -> Refresh Opportunity Queue -> Human Review",

    },

    engineeringDecisions: [
      "Separated historical feature windows from future outcome windows to prevent temporal target leakage and lookahead bias.",
      "Established an interpretable rule-based baseline before training ML models, providing a transparent benchmark for model improvement.",
      "Used DuckDB SQL for analytical transformations and temporal aggregations to keep the workflow efficient and reproducible.",
      "Evaluated the system as a ranking problem using Precision@K, AUC, and Average Precision rather than relying only on generic classification accuracy.",
      "Kept product-derived decision fields out of model features to prevent the model from learning the answer directly.",
      "Designed the output as human-in-the-loop decision support rather than fully automated content modification."
    ],

    challenges: [
      "Preventing future search-performance information from leaking into historical model features.",
      "Handling missing and irregular time-series observations without introducing forward-looking information.",
      "Selecting evaluation metrics that reflect the real business objective of prioritizing a limited number of pages for review.",
      "Balancing model performance with explainability so that editorial teams can understand why a page was prioritized.",
      "Keeping the public repository safe by working with anonymized data and excluding client-identifying information."
    ],

    evaluation:
      "Compared the learned models against a rule-based baseline using ranking-oriented metrics including Precision@20, Precision@50, AUC, and Average Precision. The selected Random Forest achieved 55% Precision@20 and 62% Precision@50 versus a 10% baseline precision, demonstrating substantially stronger prioritization of high-value refresh candidates.",

    results: [
      "Built a complete reproducible ML workflow from feature preparation through model evaluation and reporting.",
      "The selected Random Forest reached 55% Precision@20 and 62% Precision@50 compared with 10% baseline precision.",
      "Produced a ranked content-refresh queue that can help editorial teams focus limited review capacity on higher-priority pages.",
      "Implemented leakage controls separating historical features from future outcome windows.",
      "Created a public-safe capstone report documenting methodology, validation, feature importance, and operational decision rules."
    ],

    lessonsLearned: [
      "Temporal validation and strict feature boundaries are essential when predicting future outcomes from time-series data.",
      "A simple baseline provides an important sanity check before interpreting improvements from more complex models.",
      "For operational prioritization problems, ranking metrics such as Precision@K can be more meaningful than overall classification accuracy.",
      "Useful ML systems need to connect model predictions with a clear human decision workflow rather than stopping at model output.",
      "Public-facing ML projects require the same attention to data governance and leakage prevention as the modeling itself."
    ]
  },
  featured: true,
  order: 2
},
{
  title: "Trail Vision: Semantic Segmentation for Outdoor Trail Scene Understanding",
  slug: "trail-vision-segmentation",
  category: "Computer Vision",
  shortDescription:
    "Multiclass pixel-level semantic segmentation pipeline benchmarking a custom from-scratch U-Net, YOLOv8-seg, and transfer-learning U-Net variants for unpaved trail navigation.",
  highlightSignal:
    "U-Net Transfer Learning & Multi-Class Terrain Segmentation",
  technologies: [
    "Python",
    "TensorFlow / Keras",
    "OpenCV",
    "Roboflow",
    "Ultralytics YOLOv8",
    "Segmentation Models",
    "PyCOCOTools",
    "NumPy",
    "Matplotlib"
  ],
  githubUrl: "https://github.com/Aatka-Saleem",
  caseStudy: {
    problem:
      "Autonomous navigation in unpaved outdoor environments requires distinguishing traversable surfaces from rough trails, obstacles, foliage, and non-traversable boundaries under varying terrain and lighting conditions.",

    approach:
      "Engineered and benchmarked multiple segmentation approaches across different configurations: a from-scratch U-Net with skip connections, YOLOv8-seg, and transfer-learning U-Net variants using ImageNet-pretrained ResNet50 and MobileNetV2 encoders. Models were trained and evaluated on an annotated six-class outdoor trail dataset.",

    architecture: {
      overview:
        "Comparative semantic segmentation pipeline combining a four-level from-scratch U-Net with transfer-learning U-Net architectures using ResNet50 and MobileNetV2 encoders, alongside YOLOv8-seg as an alternative segmentation approach.",

      components: [
        "Data Pipeline: Parses COCO-format polygon annotations and converts category mappings into aligned pixel-level segmentation masks",
        "Dataset Processing: Resizes RGB frames, normalizes image inputs, and prepares training, validation, and test splits",
        "Custom U-Net: Four-level encoder-decoder architecture with convolutional blocks, Batch Normalization, He-Normal initialization, and skip connections",
        "Transfer U-Net: ImageNet-pretrained ResNet50 and MobileNetV2 encoders with decoder-side skip connections for fine-grained spatial reconstruction",
        "YOLOv8-seg: Ultralytics segmentation model evaluated as an alternative architecture for outdoor scene segmentation",
        "Post-Processing: Morphological opening and closing operations to reduce pixel noise and improve semantic mask continuity",
        "Inference: Pixel-wise class prediction followed by color-coded semantic visualization"
      ],

      workflow:
        "RGB Frame (640x640 / 320x320) -> Annotation Parsing -> Image Normalization -> Model Inference -> Pixel/Class Mask Generation -> Morphological Filtering -> Semantic Overlay"
    },

    engineeringDecisions: [
      "Retained separate smooth-trail and rough-trail classes to preserve useful navigability information rather than reducing the task to binary traversable/non-traversable segmentation.",
      "Used a hybrid Weighted Cross-Entropy + Dice Loss strategy to address class imbalance and improve segmentation of underrepresented terrain classes.",
      "Compared training from scratch against ImageNet-pretrained encoders to measure the practical benefit of transfer learning on a constrained outdoor dataset.",
      "Applied bottleneck dropout and learning-rate reduction on plateau to improve generalization and control overfitting in the custom convolutional baseline.",
      "Used morphological opening and closing during inference to reduce high-frequency mask noise and fill small discontinuities along semantic boundaries."
    ],

    challenges: [
      "Managing high-frequency salt-and-pepper noise and background confusion in the from-scratch segmentation baseline.",
      "Mapping non-sequential COCO annotation category IDs into consistent integer class labels for pixel-level masks.",
      "Handling inconsistent ground-truth mask offsets across evaluation batches.",
      "Maintaining sufficient representation of rare terrain classes across training and validation splits.",
      "Preserving narrow trail boundaries while dealing with significant class imbalance."
    ],

    evaluation:
      "Evaluated the segmentation models on held-out validation and test data using Pixel Accuracy, Mean Dice Coefficient, and Mean Intersection-over-Union (mIoU) across six semantic classes: non-traversal, obstacle, rough trail, sky, smooth trail, and vegetation.",

    results: [
      "MobileNetV2 U-Net achieved 91.13% validation pixel accuracy, 0.8911 validation Dice, and 0.6949 test Mean IoU.",
      "The Smooth Trail class achieved a test IoU of 0.8325 with the top-performing MobileNetV2 U-Net configuration.",
      "The custom from-scratch U-Net achieved 81.05% test pixel accuracy and 0.6616 test Mean IoU, demonstrating a functional segmentation baseline without pretrained weights.",
      "The comparative experiments demonstrated the practical value of transfer-learning encoders for semantic segmentation on a constrained outdoor dataset."
    ],

    lessonsLearned: [
      "Transfer-learning backbones can provide stronger feature representations and cleaner semantic boundaries than training deep segmentation encoders entirely from scratch when labeled data is limited.",
      "Hybrid Dice and weighted cross-entropy objectives are useful for maintaining segmentation quality across imbalanced classes and narrow trail regions.",
      "Comparing multiple architectures provides more useful engineering insight than evaluating a single model in isolation.",
      "Dataset annotation consistency and class-label alignment are critical because small mask-processing errors can directly affect pixel-level evaluation."
    ]
  },
  featured: true,
  order: 3
},
];