const principles = [
  {
    number: "01",
    title: "Evidence First",
    description:
      "Security decisions should be grounded in observable telemetry, documented context, and traceable evidence rather than assumptions.",
  },
  {
    number: "02",
    title: "Least Privilege",
    description:
      "Access and execution should be restricted to what is required, with clear boundaries around privileged security operations.",
  },
  {
    number: "03",
    title: "Defense in Depth",
    description:
      "Security should not depend on a single control. Multiple layers provide stronger protection and better failure containment.",
  },
  {
    number: "04",
    title: "Automation with Guardrails",
    description:
      "Automation is useful only when execution boundaries, validation, policy checks, and auditability are built into the workflow.",
  },
];

export default function EngineeringApproach() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">04 / Engineering Approach</p>

            <h2 className="section-title">
              Security systems should be controlled, observable, and explainable.
            </h2>
          </div>

          <p className="section-description">
            I approach security engineering by combining defensive architecture,
            explicit controls, evidence-driven analysis, and practical
            implementation.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[var(--accent)]">
                  {principle.number}
                </span>

                <span className="h-px w-8 bg-[var(--border-hover)] transition-all duration-300 group-hover:w-12 group-hover:bg-[var(--accent)]" />
              </div>

              <h3 className="mt-8 text-lg font-semibold tracking-tight text-[var(--text-primary)]">
                {principle.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}