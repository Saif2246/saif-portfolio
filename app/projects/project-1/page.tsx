
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Network Reconnaissance & Database Analyzer | Saif Ali",
  description:
    "Explore a Python-based network security project using Nmap reconnaissance, XML parsing, port and service analysis, and MariaDB integration.",
};

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

const projectRepository =
  "https://github.com/Saif2246/CyberSecurity-Portfolio/tree/main/Project_1_Network_Reconnaissance_Database_Analyzer";

const touchLinkClass =
  "inline-flex min-h-11 items-center gap-2 touch-manipulation rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent)";

export default function ProjectOnePage() {
  return (
    <main className="min-h-screen bg-(--background) text-(--text-primary)">
      <div className="container">
        <header className="border-b border-(--border) py-6 sm:py-10">
          <Link
            href="/#projects"
            className={`${touchLinkClass} text-sm text-(--text-secondary) transition-colors hover:text-(--accent)`}
          >
            <span aria-hidden="true">←</span>
            Back to Projects
          </Link>
        </header>

        <section className="py-14 sm:py-20 md:py-28">
          <p className="eyebrow">02 / Case Study</p>

          <div className="max-w-5xl">
            <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Network Reconnaissance & Database Analyzer
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-(--text-secondary) sm:text-xl md:text-2xl">
              Automated network reconnaissance, Nmap analysis, and structured
              security data processing.
            </p>

            <p className="mt-7 max-w-3xl text-sm leading-7 text-(--text-secondary) sm:text-base sm:leading-8">
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

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={projectRepository}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary inline-flex min-h-11 touch-manipulation items-center justify-center gap-2"
              >
                View Repository
                <span aria-hidden="true">↗</span>
              </a>

              <Link
                href="/#projects"
                className="button button-secondary inline-flex min-h-11 touch-manipulation items-center justify-center"
              >
                All Projects
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-(--border) py-14 sm:py-20 md:py-24">
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
                className="rounded-2xl border border-(--border) bg-(--surface) p-5 sm:p-7 md:p-8"
              >
                <h3 className="text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-(--text-secondary)">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-(--border) py-14 sm:py-20 md:py-24">
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
                className="grid gap-4 rounded-2xl border border-(--border) bg-(--surface) p-5 sm:gap-5 sm:p-6 md:grid-cols-[70px_240px_1fr] md:items-center md:p-7"
              >
                <span className="font-mono text-xs text-(--accent)">
                  {step.number}
                </span>

                <h3 className="text-lg font-semibold tracking-tight">
                  {step.title}
                </h3>

                <p className="text-sm leading-7 text-(--text-secondary)">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-(--border) py-14 sm:py-20 md:py-24">
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
                className="rounded-xl border border-(--border) bg-(--surface) px-4 py-3 text-sm text-(--text-secondary)"
              >
                {capability}
              </span>
            ))}
          </div>
        </section>

        <section className="border-t border-(--border) py-14 sm:py-20 md:py-24">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow">04 / Technical Focus</p>

              <h2 className="section-title">
                Practical network security automation.
              </h2>
            </div>

            <div className="space-y-6 text-sm leading-7 text-(--text-secondary)">
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

        <section className="border-t border-(--border) py-14 sm:py-20 md:py-24">
          <div className="rounded-3xl border border-(--border) bg-(--surface) p-6 sm:p-8 md:p-12">
            <p className="eyebrow">05 / Repository</p>

            <h2 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
              Explore the implementation.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-(--text-secondary)">
              View the complete project implementation, source code, and
              supporting files in the CyberSecurity Portfolio repository.
            </p>

            <a
              href={projectRepository}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary mt-8 inline-flex min-h-11 touch-manipulation items-center justify-center gap-2"
            >
              Open Project Repository
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <footer className="border-t border-(--border) py-8 sm:py-10">
          <Link
            href="/#projects"
            className={`${touchLinkClass} text-sm text-(--text-secondary) transition-colors hover:text-(--accent)`}
          >
            ← Back to all projects
          </Link>
        </footer>
      </div>
    </main>
  );
}
