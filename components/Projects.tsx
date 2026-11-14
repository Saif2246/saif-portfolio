
"use client";

import { projects } from "@/data/projects";

export default function Projects() {
  const handlePointerMove = (
    event: React.PointerEvent<HTMLElement>
  ) => {
    if (
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 3;
    const rotateX = ((centerY - y) / centerY) * 3;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;

    card.style.setProperty("--spot-x", `${x}px`);
    card.style.setProperty("--spot-y", `${y}px`);
  };

  const handlePointerLeave = (
    event: React.PointerEvent<HTMLElement>
  ) => {
    const card = event.currentTarget;

    card.style.transform = "";
    card.style.setProperty("--spot-x", "50%");
    card.style.setProperty("--spot-y", "50%");
  };

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
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
              className={`group relative isolate overflow-hidden rounded-2xl border border-(--border) bg-(--surface) p-7 transition-[transform,border-color,background-color,box-shadow] duration-300 ease-out hover:border-[rgba(34,211,238,0.4)] hover:bg-(--surface-hover) hover:shadow-[0_15px_35px_rgba(0,0,0,0.18)] active:border-[rgba(34,211,238,0.4)] active:bg-(--surface-hover) active:shadow-[0_8px_24px_rgba(0,0,0,0.12)] md:p-8 ${
                project.featured ? "md:col-span-2" : ""
              }`}
              style={{
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100"
                style={{
                  background:
                    "radial-gradient(450px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(34,211,238,0.09), transparent 65%)",
                }}
              />

              <div className="relative">
                <div className="flex items-start justify-between gap-6">
                  <span className="font-mono text-xs text-(--accent)">
                    {project.number}
                  </span>

                  <span className="rounded-full border border-(--border) px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-(--text-muted) transition-colors duration-300 group-hover:border-[rgba(34,211,238,0.35)]">
                    {project.category}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-semibold tracking-tight text-(--text-primary)">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-(--text-secondary)">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="tag">
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-7 grid gap-3 border-t border-(--border) pt-5 sm:grid-cols-3">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-(--text-muted)">
                        {metric.label}
                      </p>

                      <p className="mt-1 text-sm font-semibold text-(--text-primary)">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-(--text-primary) transition-all duration-200 group-hover:text-(--accent) active:scale-[0.97] active:text-(--accent) focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent)"
                >
                  View Project

                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
