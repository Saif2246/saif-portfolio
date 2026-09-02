export type ProjectMetric = {
  label: string;
  value: string;
};

export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  metrics: ProjectMetric[];
  href: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Network Reconnaissance & Database Analyzer",
    category: "Network Security",
    description:
      "A Python-based network reconnaissance and analysis project that parses Nmap XML scan results, analyzes ports and services, and stores structured reconnaissance data in MariaDB.",
    technologies: [
      "Python",
      "Nmap",
      "XML Parsing",
      "MariaDB",
      "Linux",
    ],
    metrics: [
      {
        label: "Workflow",
        value: "4 Stages",
      },
      {
        label: "Input",
        value: "Nmap XML",
      },
      {
        label: "Storage",
        value: "MariaDB",
      },
    ],
    href: "/projects/project-1",
    featured: false,
  },

  {
    number: "02",
    title: "Network Service Enumeration Tool",
    category: "Network Security",
    description:
      "A Python command-line security tool for TCP port scanning, service identification, multithreaded enumeration, and banner grabbing across network services.",
    technologies: [
      "Python",
      "Socket Programming",
      "Multithreading",
      "Kali Linux",
    ],
    metrics: [
      {
        label: "Workflow",
        value: "6 Stages",
      },
      {
        label: "Scanning",
        value: "TCP",
      },
      {
        label: "Concurrency",
        value: "Multithreaded",
      },
    ],
    href: "/projects/project-2",
    featured: false,
  },

  {
    number: "03",
    title: "Automated Firewall & ACL Rule Auditor",
    category: "Security Automation",
    description:
      "An automated firewall and ACL auditing system that analyzes security rules, identifies risky and conflicting configurations, evaluates compliance, calculates risk, and generates security reports.",
    technologies: [
      "Python",
      "JSON",
      "Tkinter",
      "HTML",
      "Kali Linux",
    ],
    metrics: [
      {
        label: "Rules Audited",
        value: "20",
      },
      {
        label: "Findings",
        value: "12",
      },
      {
        label: "Risk Score",
        value: "110",
      },
    ],
    href: "/projects/project-3",
    featured: false,
  },

  {
    number: "04",
    title: "KiroTrace",
    category: "SecOps / AI Security",
    description:
      "An offline-oriented SecOps monitoring and AI-assisted security analysis system featuring log aggregation, normalization, threat detection, event correlation, evidence-grounded RAG, controlled security tools, Docker sandboxing, and audit logging.",
    technologies: [
      "Python",
      "Streamlit",
      "Ollama",
      "RAG",
      "Docker",
    ],
    metrics: [
      {
        label: "Pipeline",
        value: "7 Stages",
      },
      {
        label: "Log Sources",
        value: "3",
      },
      {
        label: "Analysis",
        value: "Evidence-Grounded",
      },
    ],
    href: "/projects/project-4",
    featured: true,
  },
];