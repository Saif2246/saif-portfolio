import Link from "next/link";

const capabilities = [
  "Firewall rule auditing",
  "ACL rule analysis",
  "Risk identification",
  "Conflicting rule detection",
  "Security control analysis",
  "Compliance evaluation",
  "Risk scoring",
  "JSON-based rule processing",
  "HTML security reporting",
  "Tkinter interface",
];

const workflow = [
  {
    number: "01",
    title: "Rule Input",
    description:
      "Processes structured firewall and ACL rule data for automated security analysis.",
  },
  {
    number: "02",
    title: "Rule Analysis",
    description:
      "Evaluates configured rules to identify potentially risky, weak, or problematic security configurations.",
  },
  {
    number: "03",
    title: "Conflict Detection",
    description:
      "Analyzes rule relationships to identify conflicting or potentially unsafe configurations.",
  },
  {
    number: "04",
    title: "Risk Assessment",
    description:
      "Applies security-oriented risk evaluation to identified findings and configurations.",
  },
  {
    number: "05",
    title: "Compliance Analysis",
    description:
      "Evaluates firewall and ACL configurations against defined security and compliance considerations.",
  },
  {
    number: "06",
    title: "Security Reporting",
    description:
      "Produces structured security findings and reports to make audit results easier to review.",
  },
];

export default function ProjectThreePage() {
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
          <p className="eyebrow">04 / Case Study</p>

          <div className="max-w-5xl">
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Automated Firewall & ACL Rule Auditor
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--text-secondary)] md:text-2xl">
              Automated analysis of firewall and ACL configurations for
              security risks and compliance considerations.
            </p>

            <p className="mt-7 max-w-3xl text-base leading-8 text-[var(--text-secondary)]">
              A security automation project designed to analyze firewall and
              ACL rules, identify risky and conflicting configurations,
              evaluate security and compliance considerations, calculate risk,
              and generate security reports.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Python",
                "JSON",
                "Tkinter",
                "HTML",
                "Kali Linux",
              ].map((technology) => (
                <span key={technology} className="tag">
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://github.com/Saif2246/CyberSecurity-Portfolio/tree/main/Project_3_Automated_Firewall_ACL_Auditor"
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
                Turning firewall and ACL rules into actionable audit findings.
              </h2>
            </div>

            <p className="section-description">
              The project automates the review of security rules so potentially
              risky configurations and compliance concerns can be identified
              systematically.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Rule Auditing",
                description:
                  "Analyzes firewall and ACL configurations to identify security-relevant rule conditions.",
              },
              {
                title: "Risk Detection",
                description:
                  "Identifies potentially risky configurations and produces security-oriented findings.",
              },
              {
                title: "Conflict Analysis",
                description:
                  "Examines rule relationships to identify conflicting or problematic configurations.",
              },
              {
                title: "Compliance Review",
                description:
                  "Evaluates rule configurations against defined security and compliance considerations.",
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
              <p className="eyebrow">02 / Workflow</p>

              <h2 className="section-title">
                From rule configuration to security report.
              </h2>
            </div>

            <p className="section-description">
              The auditor follows a structured process for analyzing,
              evaluating, and reporting firewall and ACL configurations.
            </p>
          </div>

          <div className="grid gap-4">
            {workflow.map((step) => (
              <article
                key={step.number}
                className="grid gap-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:grid-cols-[70px_240px_1fr] md:items-center md:p-7"
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
                What this project demonstrates.
              </h2>
            </div>

            <p className="section-description">
              Practical security automation across rule analysis, risk
              assessment, compliance review, and reporting.
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
              <p className="eyebrow">04 / Technical Focus</p>

              <h2 className="section-title">
                Automated firewall and ACL security auditing.
              </h2>
            </div>

            <div className="space-y-6 text-sm leading-7 text-[var(--text-secondary)]">
              <p>
                The project applies Python-based automation to reduce the
                repetitive work involved in reviewing firewall and ACL
                configurations.
              </p>

              <p>
                Structured JSON rule data provides an input format for analysis,
                while the auditing workflow evaluates risky and conflicting
                configurations.
              </p>

              <p>
                Security findings are further evaluated for risk and compliance
                considerations and presented through generated security
                reporting.
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
              View the complete source code and supporting project files in
              the CyberSecurity Portfolio repository.
            </p>

            <a
              href="https://github.com/Saif2246/CyberSecurity-Portfolio/tree/main/Project_3_Automated_Firewall_ACL_Auditor"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary mt-8"
            >
              Open Project Repository
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