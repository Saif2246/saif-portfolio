"use client";

import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Career", href: "#career" },
  { label: "Contact", href: "#contact" },

];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(7,11,18,0.82)] backdrop-blur-xl">
      <div className="container">
        <nav
          className="flex min-h-[72px] items-center justify-between"
          aria-label="Primary navigation"
        >
          <a
            href="#top"
            className="group flex items-center gap-3"
            aria-label="Saif Ali home"
            onClick={() => setIsOpen(false)}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] font-mono text-sm font-semibold text-[var(--accent)] transition-colors group-hover:border-[var(--accent)]">
              SA
            </span>

            <span className="hidden text-sm font-semibold tracking-tight text-[var(--text-primary)] sm:block">
              Saif Ali
            </span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="https://github.com/Saif2246"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-secondary min-h-10 px-4 text-xs"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/saif-ali-a22230409/"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary min-h-10 px-4 text-xs"
            >
              LinkedIn
            </a>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-primary)] transition-colors hover:border-[var(--border-hover)] md:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">
              {isOpen ? "Close menu" : "Open menu"}
            </span>

            <span className="flex w-5 flex-col gap-1.5">
              <span
                className={`block h-px w-full bg-current transition-transform ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />

              <span
                className={`block h-px w-full bg-current transition-opacity ${
                  isOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`block h-px w-full bg-current transition-transform ${
                  isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>

        {isOpen && (
          <div className="border-t border-[var(--border)] py-4 md:hidden">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-[var(--border)] py-3 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                >
                  {item.label}
                </a>
              ))}

              <div className="mt-4 flex gap-3">
                <a
                  href="https://github.com/Saif2246"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-secondary min-h-10 flex-1 px-4 text-xs"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/saif-ali-a22230409/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-primary min-h-10 flex-1 px-4 text-xs"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}