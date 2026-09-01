export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming",
    description: "Languages and tools used for security-focused development.",
    skills: ["Python", "C++", "Java", "MySQL"],
  },
  {
    title: "Security",
    description:
      "Core defensive security areas applied across projects and practical work.",
    skills: [
      "Security Operations",
      "Threat Detection",
      "Security Monitoring",
      "Security Automation",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Foundational infrastructure and cloud-security concepts for secure system design.",
    skills: [
      "Cloud Security",
      "Linux",
      "Networking",
      "Access Control",
    ],
  },
  {
    title: "GRC",
    description:
      "Governance, risk, controls, and security-focused documentation concepts.",
    skills: [
      "Risk Management",
      "Security Controls",
      "Compliance",
      "Security Governance",
    ],
  },
  {
    title: "AI Security",
    description:
      "Security-aware AI workflows with evidence grounding and controlled execution.",
    skills: [
      "RAG",
      "Local LLMs",
      "Evidence Grounding",
      "AI-Assisted Security Analysis",
    ],
  },
];