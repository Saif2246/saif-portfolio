import Link from "next/link";
const capabilities = [
  "Network reconnaissance automation",
  "Nmap XML output parsing",
  "Port and service analysis",
  "Security data processing",
  "MariaDB database integration",
  "Structured security data storage",
  "Network scan result analysis",
  "Python security automation",
  "Linux / Kali Linux environment",
];

const workflow = [
  {
    number: "01",
    title: "Network Reconnaissance",
    description:
      "Uses Nmap-based reconnaissance to collect information about available network ports and services.",
  },
  {
    number: "02",
    title: "XML Parsing",
    description:
      "Processes Nmap XML output programmatically so scan results can be handled as structured security data.",
  },
  {
    number: "03",
    title: "Port & Service Analysis",
    description:
      "Analyzes discovered ports and associated services to produce useful reconnaissance information.",
  },
  {
    number: "04",
    title: "Database Integration",
    description:
      "Stores structured reconnaissance results in MariaDB for persistent security data management and analysis.",
  },
];

export default function ProjectOnePage() {
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
          <p className="eyebrow">02 / Case Study</p>

          <div className="max-w-5xl">
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Network Reconnaissance & Database Analyzer
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--text-secondary)] md:text-2xl">
              Automated network reconnaissance, Nmap analysis, and structured
              security data processing.
            </p>

            <p className="mt-7 max-w-3xl text-base leading-8 text-[var(--text-secondary)]">
              A Python-based network security project focused on automating
              reconnaissance workflows, parsing Nmap XML results, analyzing
              discovered ports and services, and storing structured scan data
              in MariaDB.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Python", "Nmap", "XML Parsing", "MariaDB", "Linux"].map(
                (technology) => (
                  <span key={technology} className="tag">
                    {technology}
                  </span>
                ),
              )}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://github.com/Saif2246/CyberSecurity-Portfolio/tree/main/Project_1_Network_Reconnaissance_Database_Analyzer"
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
                Turning reconnaissance output into structured security data.
              </h2>
            </div>

            <p className="section-description">
              The project combines network reconnaissance, structured parsing,
              security analysis, and database storage into a practical
              workflow.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Reconnaissance",
                description:
                  "Automates network reconnaissance using Nmap to collect information about ports and services.",
              },
              {
                title: "Structured Processing",
                description:
                  "Parses Nmap XML output so reconnaissance results can be processed programmatically.",
              },
              {
                title: "Security Analysis",
                description:
                  "Processes discovered ports and services to make scan results more useful for security assessment.",
              },
              {
                title: "Persistent Storage",
                description:
                  "Integrates MariaDB to store structured network reconnaissance results for later analysis.",
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
                From network discovery to stored results.
              </h2>
            </div>

            <p className="section-description">
              The implementation follows a straightforward security data
              processing workflow.
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
              Practical experience across network reconnaissance, security
              automation, structured data processing, and database integration.
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
                Practical network security automation.
              </h2>
            </div>

            <div className="space-y-6 text-sm leading-7 text-[var(--text-secondary)]">
              <p>
                The project focuses on reducing repetitive reconnaissance and
                analysis work through Python-based automation.
              </p>

              <p>
                Nmap XML parsing provides structured input for processing scan
                results, while port and service analysis turns raw
                reconnaissance data into useful security information.
              </p>

              <p>
                MariaDB integration provides persistent storage for the
                structured reconnaissance results.
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
              View the complete project implementation, source code, and
              supporting files in the CyberSecurity Portfolio repository.
            </p>

            <a
              href="https://github.com/Saif2246/CyberSecurity-Portfolio/tree/main/Project_1_Network_Reconnaissance_Database_Analyzer"
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