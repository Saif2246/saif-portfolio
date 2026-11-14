
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const pipelineSteps = [
  "Log Collection",
  "Parsing & Normalization",
  "Detection & Correlation",
  "Evidence Retrieval",
  "AI-Assisted Analysis",
  "Policy-Controlled Tools",
  "Audit & Session Tracking",
];

export default function FeaturedProject() {
  const [isImageOpen, setIsImageOpen] = useState(false);

  useEffect(() => {
    if (!isImageOpen) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsImageOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isImageOpen]);

  return (
    <section className="section" aria-labelledby="featured-project-title">
      <div className="container">
        <div className="mb-10">
          <p className="eyebrow">02 / Featured Project</p>

          <h2 id="featured-project-title" className="section-title">
            KiroTrace
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-(--border) bg-(--surface)">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-7 md:p-10">
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="tag">Python</span>
                <span className="tag">Streamlit</span>
                <span className="tag">SecOps</span>
                <span className="tag">RAG</span>
                <span className="tag">Ollama</span>
              </div>

              <h3 className="text-2xl font-semibold tracking-tight text-(--text-primary) md:text-3xl">
                Offline-Oriented SecOps Monitoring & AI-Assisted Analysis
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-(--text-secondary) md:text-base">
                KiroTrace is a defensive security monitoring and AI-assisted
                analysis system designed around local telemetry, evidence
                grounding, controlled tool execution, audit logging, and
                session-aware security assistance.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Detection",
                    description:
                      "Parses and normalizes security logs before applying deterministic detection and correlation logic.",
                  },
                  {
                    title: "Evidence",
                    description:
                      "Grounds AI responses in retrieved security evidence rather than relying on unsupported model output.",
                  },
                  {
                    title: "Controls",
                    description:
                      "Separates security analysis from controlled tool execution and applies policy checks before execution.",
                  },
                  {
                    title: "Auditability",
                    description:
                      "Records security assistant activity through structured audit logging for traceability.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="group rounded-xl border border-(--border) bg-(--surface) p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(34,211,238,0.4)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.16)]"
                  >
                    <p className="font-mono text-xs uppercase tracking-wider text-(--accent)">
                      {item.title}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-(--text-secondary)">
                      {item.description}
                    </p>
                  </div>
                ))}
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

            <div className="border-t border-(--border) bg-(--surface-muted) p-7 lg:border-l lg:border-t-0 md:p-10">
              <div className="flex items-center justify-between gap-3">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-(--text-muted)">
                  System Pipeline
                </p>

                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-(--accent)">
                  <span className="h-1.5 w-1.5 rounded-full bg-(--accent) shadow-[0_0_8px_var(--accent)]" />
                  07 Stages
                </span>
              </div>

              <div className="relative mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {pipelineSteps.map((step, index) => (
                  <div
                    key={step}
                    className="group relative flex min-h-19 items-center gap-3 overflow-hidden rounded-xl border border-(--border) bg-(--surface) px-3 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(34,211,238,0.45)] hover:shadow-[0_8px_24px_rgba(34,211,238,0.08)]"
                  >
                    <span className="absolute bottom-0 left-0 h-px w-0 bg-(--accent) shadow-[0_0_8px_var(--accent)] transition-all duration-300 group-hover:w-full" />

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[rgba(34,211,238,0.2)] bg-[rgba(34,211,238,0.06)] font-mono text-xs text-(--accent)">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-xs leading-5 text-(--text-secondary) sm:text-sm">
                      {step}
                    </span>

                    {index < pipelineSteps.length - 1 && (
                      <span className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-(--accent) opacity-50 shadow-[0_0_7px_var(--accent)]" />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-7 flex items-center justify-between border-t border-(--border) pt-5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-(--text-muted)">
                  Processing Architecture
                </span>

                <span className="font-mono text-[10px] text-(--accent)">
                  LOCAL PIPELINE
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-(--border) p-7 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-(--accent)">
                  Demo Evidence
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-(--text-primary)">
                  Evidence-Grounded Security Analysis
                </h3>

                <p className="mt-4 text-sm leading-7 text-(--text-secondary)">
                  A KiroTrace analysis showing retrieved security telemetry,
                  evidence-grounded assessment, and defensive recommendations
                  for suspicious SSH authentication activity.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-(--border) bg-(--surface-muted) p-4 transition-colors duration-300 hover:border-[rgba(34,211,238,0.4)]">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-(--text-muted)">
                      Evidence
                    </p>

                    <div className="mt-2 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-(--accent) shadow-[0_0_8px_var(--accent)]" />
                      <p className="font-mono text-sm font-semibold text-(--text-primary)">
                        RETRIEVED
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-(--border) bg-(--surface-muted) p-4 transition-colors duration-300 hover:border-[rgba(34,211,238,0.4)]">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-(--text-muted)">
                      Analysis
                    </p>

                    <div className="mt-2 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-(--accent) shadow-[0_0_8px_var(--accent)]" />
                      <p className="font-mono text-sm font-semibold text-(--text-primary)">
                        GROUNDED
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border border-(--border) bg-(--surface-muted) shadow-[0_15px_40px_rgba(0,0,0,0.2)]">
                <div className="flex h-9 items-center gap-2 border-b border-(--border) bg-(--surface) px-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

                  <span className="ml-3 font-mono text-[10px] text-(--text-muted)">
                    KiroTrace / Evidence Analysis
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setIsImageOpen(true)}
                  aria-label="Open KiroTrace evidence screenshot"
                  className="group relative block w-full cursor-zoom-in overflow-hidden text-left"
                >
                  <Image
                    src="/images/05-kirotrace-evidence.png"
                    alt="KiroTrace evidence-grounded security analysis showing suspicious SSH authentication activity"
                    width={1600}
                    height={900}
                    className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.025]"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/35">
                    <span className="flex items-center gap-2 rounded-lg border border-white/20 bg-black/70 px-4 py-2 font-mono text-xs text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                      <span aria-hidden="true">⌕</span>
                      EXPAND EVIDENCE
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isImageOpen && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md md:p-10"
          onClick={() => setIsImageOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="KiroTrace evidence screenshot preview"
        >
          <button
            type="button"
            onClick={() => setIsImageOpen(false)}
            aria-label="Close image preview"
            className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white transition-colors hover:bg-white/20"
          >
            ×
          </button>

          <div
            className="relative max-h-full w-full max-w-6xl overflow-hidden rounded-xl border border-white/15 bg-(--surface) shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src="/images/05-kirotrace-evidence.png"
              alt="Expanded KiroTrace evidence-grounded security analysis screenshot"
              width={1600}
              height={900}
              className="h-auto max-h-[85vh] w-full object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
