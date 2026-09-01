import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / Projects</p>

            <h2 className="section-title">
              Projects built to demonstrate real skills.
            </h2>
          </div>

          <p className="section-description">
            A selection of completed work spanning network security,
            security automation, SecOps monitoring, and AI-assisted security
            analysis.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className={`group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)] md:p-8 ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-6">
                <span className="font-mono text-xs text-[var(--accent)]">
                  {project.number}
                </span>

                <span className="rounded-full border border-[var(--border)] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                  {project.category}
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
                {project.title}
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--text-secondary)]">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span key={technology} className="tag">
                    {technology}
                  </span>
                ))}
              </div>

              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent)]"
              >
                View Project
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  ↗
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}