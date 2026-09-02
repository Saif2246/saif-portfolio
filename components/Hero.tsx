export default function Hero() {
  return (
    <section id="top" className="grid-background relative">
      <div className="container">
        <div className="flex min-h-[calc(100vh-72px)] items-center py-24 md:py-32">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[var(--success)]" />
              <span className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                Available for opportunities
              </span>
            </div>

            <p className="mb-5 font-mono text-sm font-medium text-[var(--accent)]">
              BS Information Technology Student
            </p>

            <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-[var(--text-primary)] sm:text-6xl md:text-7xl lg:text-[5.25rem] lg:leading-[1.02]">
              Building practical systems for{" "}
              <span className="text-[var(--accent)]">
                Cloud Security
              </span>{" "}
              and GRC.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
              I&apos;m Saif Ali, an Information Technology student focused on
              building practical security systems across cloud security,
              security operations, governance, risk, compliance, automation,
              and AI-assisted security analysis.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="button button-primary"
              >
                Explore Projects
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
              >
                Download Resume
                <span aria-hidden="true">↓</span>
              </a>

              <a
                href="#contact"
                className="button button-secondary"
              >
                Get in Touch
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-[var(--border)] pt-6">
              <span className="font-mono text-xs text-[var(--text-muted)]">
                Focus
              </span>

              <span className="text-sm text-[var(--text-secondary)]">
                Cloud Security
              </span>

              <span className="text-sm text-[var(--text-secondary)]">
                GRC
              </span>

              <span className="text-sm text-[var(--text-secondary)]">
                Security Operations
              </span>

              <span className="text-sm text-[var(--text-secondary)]">
                AI Security
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}