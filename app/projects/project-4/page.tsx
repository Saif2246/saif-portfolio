
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KiroTrace | Local-Data SecOps Monitoring & AI Analysis | Saif Ali",
  description:
    "KiroTrace analyzes user-provided local security logs using deterministic threat detection, event correlation, evidence-grounded RAG, and local AI assistance without external API dependencies.",
};

const touchLinkClass =
  "inline-flex min-h-11 touch-manipulation items-center justify-center gap-2 rounded-md transition-colors active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent)";

const architectureSteps = [
  {
    number: "01",
    title: "User-Provided Log Input",
    description:
      "Accepts security telemetry supplied by the user through local .log and .json files. No automatic external log ingestion is performed.",
  },
  {
    number: "02",
    title: "Parsing & Normalization",
    description:
      "Parses CloudTrail, Linux SSH, and firewall events into a unified structured format.",
  },
  {
    number: "03",
    title: "Detection & Correlation",
    description:
      "Applies deterministic detection rules and correlation logic to identify security-relevant activity.",
  },
  {
    number: "04",
    title: "Evidence Retrieval",
    description:
      "Retrieves relevant security evidence and local knowledge to ground subsequent analysis.",
  },
  {
    number: "05",
    title: "AI-Assisted Analysis",
    description:
      "Uses a local Ollama model to assist with evidence-grounded security analysis.",
  },
  {
    number: "06",
    title: "Policy-Controlled Tools",
    description:
      "Separates analysis from security-tool execution through intent detection, policy checks, and validation.",
  },
  {
    number: "07",
    title: "Audit & Session Tracking",
    description:
      "Maintains structured audit records and session-aware context for traceability.",
  },
];

const capabilities = [
  "User-provided security log processing",
  "CloudTrail log analysis",
  "Linux SSH log analysis",
  "Firewall log analysis",
  "Log normalization",
  "Deterministic threat detection",
  "Event correlation",
  "Evidence-grounded RAG",
  "Local Ollama LLM",
  "Controlled security tools",
  "Docker sandbox execution",
  "Assistant audit logging",
  "Session and context management",
  "Local vector memory",
];

export default function KiroTracePage() {
  return (
    <main className="min-h-screen bg-(--background) text-(--text-primary)">
      <div className="container">
        <header className="border-b border-(--border) py-6 sm:py-10">
          <Link
            href="/#projects"
            className={`${touchLinkClass} justify-start text-sm text-(--text-secondary) hover:text-(--accent)`}
          >
            <span aria-hidden="true">←</span>
            Back to Projects
          </Link>
        </header>

        <section className="py-14 sm:py-20 md:py-28">
          <p className="eyebrow">04 / Case Study</p>

          <div className="max-w-5xl">
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-(--text-primary) sm:text-5xl md:text-6xl">
              KiroTrace
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-(--text-secondary) sm:text-xl md:text-2xl">
              Offline-Oriented SecOps Monitoring & AI-Assisted Security
              Analysis
            </p>

            <p className="mt-7 max-w-3xl text-sm leading-7 text-(--text-secondary) sm:text-base sm:leading-8">
              KiroTrace is a local-data security monitoring and AI-assisted
              analysis system. Users provide security log files for parsing,
              threat detection, event correlation, evidence retrieval, and
              controlled security analysis without relying on external APIs
              or automatic live log ingestion.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Python",
                "Streamlit",
                "Ollama",
                "RAG",
                "Docker",
                "Security Monitoring",
              ].map((technology) => (
                <span key={technology} className="tag">
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="https://github.com/Saif2246/CyberSecurity-Portfolio/tree/main/Cloud_SecOps_Log_Monitoring"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary min-h-11 touch-manipulation justify-center active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent)"
              >
                View Repository
                <span aria-hidden="true">↗</span>
              </a>

              <Link
                href="/#projects"
                className="button button-secondary min-h-11 touch-manipulation justify-center active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent)"
              >
                All Projects
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-(--border) py-14 sm:py-20 md:py-24">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / Overview</p>
              <h2 className="section-title">
                A controlled pipeline for security telemetry and analysis.
              </h2>
            </div>

            <p className="section-description">
              The system combines deterministic security processing with local
              AI assistance while keeping evidence, execution, and audit
              boundaries explicit.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
            {[
              {
                title: "Detection",
                description:
                  "User-provided security logs are parsed and normalized before deterministic detection rules and event correlation are applied.",
              },
              {
                title: "Evidence",
                description:
                  "Analysis is grounded in retrieved security evidence instead of relying exclusively on unsupported model output.",
              },
              {
                title: "Controls",
                description:
                  "Security analysis is separated from tool execution through policy and intent controls.",
              },
              {
                title: "Auditability",
                description:
                  "Assistant activity is recorded through structured audit logging to provide traceability.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-(--border) bg-(--surface) p-5 transition-colors duration-200 active:border-(--accent) sm:p-7 md:p-8"
              >
                <h3 className="text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-(--text-secondary)">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-(--border) py-14 sm:py-20 md:py-24">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / Architecture</p>
              <h2 className="section-title">
                From raw telemetry to controlled security assistance.
              </h2>
            </div>

            <p className="section-description">
              KiroTrace is organized as a sequence of processing, analysis,
              control, and audit stages.
            </p>
          </div>

          <div className="grid gap-4">
            {architectureSteps.map((step) => (
              <article
                key={step.number}
                className="group grid gap-3 rounded-2xl border border-(--border) bg-(--surface) p-5 transition-colors duration-200 active:border-(--accent) hover:border-(--border-hover) sm:gap-5 sm:p-6 md:grid-cols-[70px_220px_1fr] md:items-center md:p-7"
              >
                <span className="font-mono text-xs text-(--accent)">
                  {step.number}
                </span>

                <h3 className="text-lg font-semibold tracking-tight">
                  {step.title}
                </h3>

                <p className="text-sm leading-7 text-(--text-secondary)">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-(--border) py-14 sm:py-20 md:py-24">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / Capabilities</p>
              <h2 className="section-title">
                What the system demonstrates.
              </h2>
            </div>

            <p className="section-description">
              The implementation covers monitoring, detection, AI assistance,
              controlled execution, and traceability.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {capabilities.map((capability) => (
              <span
                key={capability}
                className="rounded-xl border border-(--border) bg-(--surface) px-4 py-3 text-sm text-(--text-secondary)"
              >
                {capability}
              </span>
            ))}
          </div>
        </section>

        <section className="border-t border-(--border) py-14 sm:py-20 md:py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            <div>
              <p className="eyebrow">04 / Security Model</p>
              <h2 className="section-title">
                Evidence first. Execution controlled.
              </h2>
            </div>

            <div className="space-y-6 text-sm leading-7 text-(--text-secondary)">
              <p>
                KiroTrace analyzes user-provided local security data and does
                not depend on external APIs or automatic live log ingestion.
                Security analysis is separated from tool execution, preventing
                the AI analysis layer from becoming an unrestricted execution
                mechanism.
              </p>

              <p>
                Evidence retrieval provides context for analysis, while policy
                checks, intent detection, target validation, and execution
                boundaries control supported security-tool operations.
              </p>

              <p>
                Audit logging and session management add traceability and
                contextual continuity to the assistant workflow.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-(--border) py-14 sm:py-20 md:py-24">
          <div className="rounded-3xl border border-(--border) bg-(--surface) p-6 sm:p-8 md:p-12">
            <p className="eyebrow">05 / Repository</p>

            <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-4xl">
              Explore the implementation.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-(--text-secondary)">
              The complete KiroTrace implementation, documentation, tests,
              logs, reports, and supporting components are maintained in the
              GitHub repository.
            </p>

            <a
              href="https://github.com/Saif2246/CyberSecurity-Portfolio/tree/main/Cloud_SecOps_Log_Monitoring"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary mt-8 min-h-11 touch-manipulation justify-center active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent)"
            >
              Open KiroTrace Repository
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <footer className="border-t border-(--border) py-8 sm:py-10">
          <Link
            href="/#projects"
            className={`${touchLinkClass} justify-start text-sm text-(--text-secondary) hover:text-(--accent)`}
          >
            ← Back to all projects
          </Link>
        </footer>
      </div>
    </main>
  );
}
