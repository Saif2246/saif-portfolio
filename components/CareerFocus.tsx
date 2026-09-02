const opportunities = [
  {
    number: "01",
    title: "Cloud Security",
    description:
      "Interested in opportunities involving cloud security architecture, identity and access control, security monitoring, and defensive cloud practices.",
  },
  {
    number: "02",
    title: "Security Operations",
    description:
      "Interested in practical SecOps work involving threat detection, security telemetry, event correlation, incident analysis, and security automation.",
  },
  {
    number: "03",
    title: "GRC & Risk",
    description:
      "Interested in governance, risk assessment, security controls, compliance, audit readiness, and translating technical security requirements into practical controls.",
  },
];

const strengths = [
  "Hands-on security projects",
  "Python-based security automation",
  "Evidence-driven security analysis",
  "Cloud Security & GRC focus",
];

export default function CareerFocus() {
  return (
    <section
      id="career"
      className="border-t border-[var(--border)] py-24 md:py-32"
    >
      <div className="container">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            09 / Career Focus
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Building toward a career in security engineering.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
            I am focused on developing practical experience across cloud
            security, security operations, and governance, risk, and
            compliance while continuing to build security systems that solve
            real problems.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {opportunities.map((opportunity) => (
            <article
              key={opportunity.number}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors duration-200 hover:border-[var(--border-hover)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[var(--text-muted)]">
                  {opportunity.number}
                </span>

                <span className="h-2 w-2 rounded-full bg-[var(--success)]" />
              </div>

              <h3 className="mt-8 text-xl font-semibold tracking-tight text-[var(--text-primary)]">
                {opportunity.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                {opportunity.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
              What I bring
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {strengths.map((strength) => (
                <div
                  key={strength}
                  className="flex items-center gap-3 text-sm text-[var(--text-secondary)]"
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
                  />

                  <span>{strength}</span>
                </div>
              ))}
            </div>
          </div>

          <a href="#contact" className="button button-primary">
            Let&apos;s Connect
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}