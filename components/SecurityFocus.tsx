const securityAreas = [
  {
    number: "01",
    title: "Cloud Security",
    description:
      "Designing security-focused cloud environments with attention to identity, access control, monitoring, and defensive architecture.",
  },
  {
    number: "02",
    title: "Security Operations",
    description:
      "Building practical detection and monitoring workflows for analyzing security telemetry, identifying threats, and supporting incident response.",
  },
  {
    number: "03",
    title: "GRC",
    description:
      "Developing an understanding of governance, risk, controls, compliance requirements, and security-focused documentation.",
  },
  {
    number: "04",
    title: "AI-Assisted Security",
    description:
      "Exploring evidence-grounded AI systems that assist security analysis while maintaining strict boundaries around tools, evidence, and execution.",
  },
];

export default function SecurityFocus() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / Security Focus</p>
            <h2 className="section-title">
              Security engineering with a practical mindset.
            </h2>
          </div>

          <p className="section-description">
            My focus is on understanding how security controls work in real
            systems and turning that understanding into practical,
            demonstrable projects.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2">
          {securityAreas.map((area) => (
            <article
              key={area.number}
              className="bg-[var(--surface)] p-7 transition-colors hover:bg-[var(--surface-hover)] md:p-8"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-mono text-xs text-[var(--accent)]">
                  {area.number}
                </span>

                <span className="h-px w-10 bg-[var(--border-hover)]" />
              </div>

              <h3 className="text-xl font-semibold tracking-tight text-[var(--text-primary)]">
                {area.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}