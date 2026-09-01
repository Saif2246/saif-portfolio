export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
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
    href: "/projects/project-4",
    featured: true,
  },
];