import Link from "next/link";

const capabilities = [
  "TCP port scanning",
  "Socket programming",
  "Multithreaded scanning",
  "Service enumeration",
  "Service identification",
  "Banner grabbing",
  "Common port detection",
  "Security results reporting",
  "Python network automation",
  "Kali Linux environment",
];

const workflow = [
  {
    number: "01",
    title: "Target Analysis",
    description:
      "Defines the target and prepares the network service enumeration workflow.",
  },
  {
    number: "02",
    title: "TCP Scanning",
    description:
      "Uses socket-based TCP connections to identify accessible ports on the target.",
  },
  {
    number: "03",
    title: "Multithreaded Enumeration",
    description:
      "Uses concurrent scanning to make the port enumeration process more efficient.",
  },
  {
    number: "04",
    title: "Service Identification",
    description:
      "Analyzes discovered services and attempts to identify useful service information.",
  },
  {
    number: "05",
    title: "Banner Grabbing",
    description:
      "Collects available service banners to provide additional information about discovered network services.",
  },
  {
    number: "06",
    title: "Security Reporting",
    description:
      "Presents the resulting network-service information in a useful security-oriented format.",
  },
];

export default function ProjectTwoPage() {
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
          <p className="eyebrow">03 / Case Study</p>

          <div className="max-w-5xl">
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Network Service Enumeration Tool
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--text-secondary)] md:text-2xl">
              TCP scanning, service identification, multithreaded enumeration,
              and banner grabbing.
            </p>

            <p className="mt-7 max-w-3xl text-base leading-8 text-[var(--text-secondary)]">
              A Python command-line security tool focused on network service
              enumeration through TCP socket programming, multithreaded
              scanning, service identification, and banner grabbing.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Python",
                "Socket Programming",
                "Multithreading",
                "Kali Linux",
              ].map((technology) => (
                <span key={technology} className="tag">
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://github.com/Saif2246/CyberSecurity-Portfolio/tree/main/Project_2_Service_Enumeration"
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
                Discovering and identifying network services.
              </h2>
            </div>

            <p className="section-description">
              The project demonstrates how Python socket programming and
              concurrent scanning can be combined into a practical network
              enumeration workflow.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "TCP Scanning",
                description:
                  "Performs TCP-based port scanning to identify accessible network services.",
              },
              {
                title: "Socket Programming",
                description:
                  "Uses Python socket programming as the foundation for network connection and service enumeration.",
              },
              {
                title: "Service Enumeration",
                description:
                  "Processes discovered ports to identify available network services.",
              },
              {
                title: "Banner Grabbing",
                description:
                  "Attempts to retrieve service banners that can provide additional information about exposed services.",
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
                From port discovery to service information.
              </h2>
            </div>

            <p className="section-description">
              The enumeration process is organized into clear stages from
              network scanning through security-oriented result reporting.
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
              Practical networking and Python automation skills applied to
              defensive security assessment workflows.
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
                Practical network enumeration with Python.
              </h2>
            </div>

            <div className="space-y-6 text-sm leading-7 text-[var(--text-secondary)]">
              <p>
                The project uses Python socket programming to interact with
                network services and identify accessible TCP ports.
              </p>

              <p>
                Multithreaded scanning improves the efficiency of the
                enumeration workflow while keeping the implementation focused
                on network-service discovery.
              </p>

              <p>
                Service identification and banner grabbing provide additional
                context about the services exposed through discovered ports.
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
              href="https://github.com/Saif2246/CyberSecurity-Portfolio/tree/main/Project_2_Service_Enumeration"
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