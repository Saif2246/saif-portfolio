import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">06 / Skills</p>

            <h2 className="section-title">
              Technical capabilities built around security.
            </h2>
          </div>

          <p className="section-description">
            A focused set of technical skills spanning programming, security,
            infrastructure, cloud security, GRC, and AI-assisted security
            engineering.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-hover)] hover:bg-[var(--surface-hover)]"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">
                  {group.title}
                </h3>

                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-[var(--border-hover)] transition-all duration-300 group-hover:w-12 group-hover:bg-[var(--accent)]"
                />
              </div>

              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                {group.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}