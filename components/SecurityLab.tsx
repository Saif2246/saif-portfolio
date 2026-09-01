const capabilities = [
  {
    number: "01",
    title: "Security Telemetry",
    description:
      "Working with structured and unstructured security events to identify patterns, anomalies, and useful defensive signals.",
  },
  {
    number: "02",
    title: "Threat Detection",
    description:
      "Applying deterministic rules and correlation logic to turn raw security events into actionable findings.",
  },
  {
    number: "03",
    title: "Security Automation",
    description:
      "Building controlled workflows that reduce repetitive analysis while keeping execution boundaries explicit.",
  },
  {
    number: "04",
    title: "Evidence-Grounded AI",
    description:
      "Using retrieval and local AI models to produce security analysis grounded in available evidence and context.",
  },
];

export default function SecurityLab() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">05 / Security Lab</p>

            <h2 className="section-title">
              Turning security concepts into working systems.
            </h2>
          </div>

          <p className="section-description">
            The lab represents the practical side of my learning: building,
            testing, debugging, and documenting security-focused systems.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {capabilities.map((capability) => (
            <article
              key={capability.number}
              className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)] md:p-8"
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[var(--accent)] opacity-[0.03] blur-2xl transition-opacity duration-300 group-hover:opacity-[0.08]" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[var(--accent)]">
                    {capability.number}
                  </span>

                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    Lab
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-semibold tracking-tight text-[var(--text-primary)]">
                  {capability.title}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--text-secondary)]">
                  {capability.description}
                </p>

                <div className="mt-7 h-px w-12 bg-[var(--border-hover)] transition-all duration-300 group-hover:w-20 group-hover:bg-[var(--accent)]" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] p-7 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
                Build → Test → Refine
              </p>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--text-secondary)]">
                Every project is treated as an engineering exercise: define
                the problem, implement the controls, test the behavior, and
                improve the system based on what the results reveal.
              </p>
            </div>

            <span className="shrink-0 font-mono text-xs text-[var(--text-muted)]">
              PRACTICAL / DEFENSIVE / ITERATIVE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}