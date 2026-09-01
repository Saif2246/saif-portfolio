import Link from "next/link";

const architectureSteps = [
  {
    number: "01",
    title: "Log Collection",
    description:
      "Collects local security telemetry from supported log sources for analysis.",
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
  "Security log aggregation",
  "CloudTrail analysis",
  "Linux SSH log analysis",
  "Firewall log analysis",
  "Log normalization",
  "Threat detection",
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
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <div className="container">
        <header className="border-b border-[var(--border)] py-10">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
          >
            <span aria-hidden="true">←</span>
            Back to Projects
          </Link>
        </header>

        <section className="py-20 md:py-28">
          <p className="eyebrow">01 / Case Study</p>

          <div className="max-w-5xl">
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-5xl md:text-6xl">
              KiroTrace
            </h1>

            <p className="mt-5 max-w-3xl text-xl leading-8 text-[var(--text-secondary)] md:text-2xl">
              Offline-Oriented SecOps Monitoring & AI-Assisted Security
              Analysis
            </p>

            <p className="mt-7 max-w-3xl text-base leading-8 text-[var(--text-secondary)]">
              KiroTrace is a defensive security monitoring and AI-assisted
              analysis system designed around local telemetry, evidence
              grounding, controlled tool execution, audit logging, and
              session-aware security assistance.
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

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://github.com/Saif2246/CyberSecurity-Portfolio/tree/main/Cloud_SecOps_Log_Monitoring"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary"
              >
                View Repository
                <span aria-hidden="true">↗</span>
              </a>

              <Link href="/#projects" className="button button-secondary">
                All Projects
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--border)] py-20 md:py-24">
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

          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Detection",
                description:
                  "Security logs are parsed and normalized before deterministic detection and correlation logic is applied.",
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
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 md:p-8"
              >
                <h3 className="text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-[var(--border)] py-20 md:py-24">
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
                className="group grid gap-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:border-[var(--border-hover)] md:grid-cols-[70px_220px_1fr] md:items-center md:p-7"
              >
                <span className="font-mono text-xs text-[var(--accent)]">
                  {step.number}
                </span>

                <h3 className="text-lg font-semibold tracking-tight">
                  {step.title}
                </h3>

                <p className="text-sm leading-7 text-[var(--text-secondary)]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-[var(--border)] py-20 md:py-24">
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

          <div className="flex flex-wrap gap-3">
            {capabilities.map((capability) => (
              <span
                key={capability}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text-secondary)]"
              >
                {capability}
              </span>
            ))}
          </div>
        </section>

        <section className="border-t border-[var(--border)] py-20 md:py-24">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow">04 / Security Model</p>

              <h2 className="section-title">
                Evidence first. Execution controlled.
              </h2>
            </div>

            <div className="space-y-6 text-sm leading-7 text-[var(--text-secondary)]">
              <p>
                KiroTrace separates security analysis from tool execution.
                This prevents the AI analysis layer from becoming an
                unrestricted execution mechanism.
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

        <section className="border-t border-[var(--border)] py-20 md:py-24">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-12">
            <p className="eyebrow">05 / Repository</p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Explore the implementation.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--text-secondary)]">
              The complete KiroTrace implementation, documentation, tests,
              logs, reports, and supporting components are maintained in the
              GitHub repository.
            </p>

            <a
              href="https://github.com/Saif2246/CyberSecurity-Portfolio/tree/main/Cloud_SecOps_Log_Monitoring"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary mt-8"
            >
              Open KiroTrace Repository
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <footer className="border-t border-[var(--border)] py-10">
          <Link
            href="/#projects"
            className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
          >
            ← Back to all projects
          </Link>
        </footer>
      </div>
    </main>
  );
}