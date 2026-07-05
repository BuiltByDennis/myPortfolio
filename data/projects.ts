export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  systemArchitecture: string;
  techTags: string[];
  projectOutcomes: string[];
  category: string;
}

export const projectsData: Project[] = [
  {
    id: "agent-guard",
    title: "Agent-guard",
    description: "Autonomous multi-agent systems with strict deterministic boundaries and safety guardrails.",
    url: "https://github.com/BuiltByDennis/Agent-guard",
    systemArchitecture: "Multi-Agent Orchestration Engine",
    techTags: ["Python", "LLMs", "LangChain", "Safety Constraints"],
    projectOutcomes: ["Deterministic agent behavior", "Safe autonomous execution", "Guardrail enforcement"],
    category: "ai-agents"
  },
  {
    id: "ai-statistician",
    title: "AI-Statistician",
    description: "AI-powered statistical analysis engine leveraging Large Language Models to ensure statistical integrity in datasets.",
    url: "https://github.com/BuiltByDennis/AI-Statistician",
    systemArchitecture: "NLP-driven Analysis Pipeline",
    techTags: ["TypeScript", "Data Science", "Next.js", "Statistical Modeling"],
    projectOutcomes: ["Automated hypothesis testing", "Data anomaly detection", "Insight generation"],
    category: "data-science"
  },
  {
    id: "verifoundry",
    title: "VeriFoundry",
    description: "Data infrastructure platform for architecting federated query engines, secure databases, and complex data pipelines.",
    url: "https://github.com/BuiltByDennis/VeriFoundry",
    systemArchitecture: "Federated Query Engine & Data Pipeline",
    techTags: ["Python", "Data Infrastructure", "ETL", "Security"],
    projectOutcomes: ["Optimized query latency", "Secure data federation", "Scalable pipeline architecture"],
    category: "ai-agents" 
  },
  {
    id: "skillfinder-ideas",
    title: "SkillFinder-ideas",
    description: "Platform prototype for skills discovery, mapping, and connecting talent through intelligent search algorithms.",
    url: "https://github.com/BuiltByDennis/SkillFinder-ideas",
    systemArchitecture: "Intelligent Search & Matching System",
    techTags: ["HTML", "JavaScript", "Search Algorithms", "Prototyping"],
    projectOutcomes: ["Talent mapping", "Semantic matching prototype", "User-centric design validation"],
    category: "ai-agents" // Assign to ai-agents to balance
  },
  {
    id: "data-science-projects",
    title: "Data Science Projects",
    description: "A comprehensive collection of academic and practical data science experiments, predictive modeling, and analytics.",
    url: "https://github.com/BuiltByDennis/Data-Science-Projects",
    systemArchitecture: "Jupyter & ML Pipelines",
    techTags: ["Jupyter Notebook", "Machine Learning", "Pandas", "Scikit-Learn"],
    projectOutcomes: ["Predictive accuracy", "Statistical validation", "Academic research applied"],
    category: "data-science"
  }
];
