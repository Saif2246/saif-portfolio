export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">07 / Education</p>

            <h2 className="section-title">
              Building the foundation for a career in security.
            </h2>
          </div>

          <p className="section-description">
            My academic work is focused on developing strong foundations in
            information technology while moving toward cloud security and GRC.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 md:p-9">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
                  2024 — 2028
                </p>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
                  BS Information Technology
                </h3>

                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  University of Layyah
                </p>
              </div>

              <span className="w-fit rounded-full border border-[var(--border)] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                Undergraduate
              </span>
            </div>

            <div className="mt-8 border-t border-[var(--border)] pt-7">
              <p className="text-sm leading-7 text-[var(--text-secondary)]">
                Developing a broad technical foundation across programming,
                computer networks, algorithms, databases, systems, and
                information technology, with a growing specialization toward
                cloud security and GRC.
              </p>
            </div>
          </article>

          <aside className="rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] p-7 md:p-9">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
              Current Direction
            </p>

            <h3 className="mt-4 text-xl font-semibold tracking-tight text-[var(--text-primary)]">
              Cloud Security & GRC
            </h3>

            <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
              Building practical experience around secure cloud architecture,
              security operations, governance, risk, controls, and
              evidence-driven security engineering.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Security Engineering",
                "Cloud Security",
                "Governance & Risk",
                "Security Operations",
              ].map((focus) => (
                <div
                  key={focus}
                  className="flex items-center gap-3 text-sm text-[var(--text-secondary)]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  {focus}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}