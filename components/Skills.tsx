
"use client";

import { useEffect, useRef } from "react";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = cardsRef.current;

    if (!container) return;

    const cards = container.querySelectorAll<HTMLElement>(
      "[data-reveal-card]"
    );

    const revealAll = () => {
      cards.forEach((card) => {
        card.classList.remove("opacity-0", "translate-y-4");
        card.classList.add("opacity-100", "translate-y-0");
      });
    };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const card = entry.target as HTMLElement;

            card.classList.remove("opacity-0", "translate-y-4");
            card.classList.add("opacity-100", "translate-y-0");

            observer.unobserve(card);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    cards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 100}ms`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

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

        <div
          ref={cardsRef}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group) => (
            <article
              key={group.title}
              data-reveal-card
              className="group translate-y-4 rounded-2xl border border-(--border) bg-(--surface) p-6 opacity-0 transition-all duration-700 ease-out hover:-translate-y-1 hover:border-(--border-hover) hover:bg-(--surface-hover) motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold tracking-tight text-(--text-primary)">
                  {group.title}
                </h3>

                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-(--border-hover) transition-all duration-300 group-hover:w-12 group-hover:bg-(--accent)"
                />
              </div>

              <p className="mt-3 text-sm leading-7 text-(--text-secondary)">
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
