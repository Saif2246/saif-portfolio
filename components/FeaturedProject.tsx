import Image from "next/image";

export default function FeaturedProject() {
  return (
    <section className="section" aria-labelledby="featured-project-title">
      <div className="container">
        <div className="mb-10">
          <p className="eyebrow">02 / Featured Project</p>

          <h2 id="featured-project-title" className="section-title">
            KiroTrace
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-7 md:p-10">
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="tag">Python</span>
                <span className="tag">Streamlit</span>
                <span className="tag">SecOps</span>
                <span className="tag">RAG</span>
                <span className="tag">Ollama</span>
              </div>

              <h3 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)] md:text-3xl">
                Offline-Oriented SecOps Monitoring & AI-Assisted Analysis
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] md:text-base">
                KiroTrace is a defensive security monitoring and AI-assisted
                analysis system designed around local telemetry, evidence
                grounding, controlled tool execution, audit logging, and
                session-aware security assistance.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-[var(--border)] p-5">
                  <p className="font-mono text-xs uppercase tracking-wider text-[var(--accent)]">
                    Detection
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                    Parses and normalizes security logs before applying
                    deterministic detection and correlation logic.
                  </p>
                </div>

                <div className="rounded-xl border border-[var(--border)] p-5">
                  <p className="font-mono text-xs uppercase tracking-wider text-[var(--accent)]">
                    Evidence
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                    Grounds AI responses in retrieved security evidence rather
                    than relying on unsupported model output.
                  </p>
                </div>

                <div className="rounded-xl border border-[var(--border)] p-5">
                  <p className="font-mono text-xs uppercase tracking-wider text-[var(--accent)]">
                    Controls
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                    Separates security analysis from controlled tool
                    execution and applies policy checks before execution.
                  </p>
                </div>

                <div className="rounded-xl border border-[var(--border)] p-5">
                  <p className="font-mono text-xs uppercase tracking-wider text-[var(--accent)]">
                    Auditability
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                    Records security assistant activity through structured
                    audit logging for traceability.
                  </p>
                </div>
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/projects/project-4"
                  className="button button-primary"
                >
                  View Case Study
                  <span aria-hidden="true">→</span>
                </a>

                <a
                  href="https://github.com/Saif2246/CyberSecurity-Portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-secondary"
                >
                  View Repository
                </a>
              </div>
            </div>

            <div className="border-t border-[var(--border)] bg-[var(--surface-muted)] p-7 lg:border-l lg:border-t-0 md:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]">
                System Pipeline
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "Log Collection",
                  "Parsing & Normalization",
                  "Detection & Correlation",
                  "Evidence Retrieval",
                  "AI-Assisted Analysis",
                  "Policy-Controlled Tools",
                  "Audit & Session Tracking",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-4 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3"
                  >
                    <span className="font-mono text-xs text-[var(--accent)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm text-[var(--text-secondary)]">
                      {step}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-[var(--border)] pt-6">
                <p className="text-xs leading-6 text-[var(--text-muted)]">
                  Designed as a practical security engineering project rather
                  than an enterprise SIEM replacement.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-[var(--border)] p-7 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
                  Demo Evidence
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
                  Evidence-Grounded Security Analysis
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                  A live KiroTrace analysis showing retrieved security
                  telemetry, evidence-grounded assessment, and defensive
                  recommendations for suspicious SSH authentication activity.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] p-4">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                      Evidence
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
                      Retrieved
                    </p>
                  </div>

                  <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] p-4">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                      Analysis
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
                      Grounded
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface-muted)]">
                <Image
                  src="/images/05-kirotrace-evidence.png"
                  alt="KiroTrace evidence-grounded security analysis showing suspicious SSH authentication activity"
                  width={1600}
                  height={900}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}