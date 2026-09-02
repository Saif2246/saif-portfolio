"use client";

import { useState } from "react";

const contactLinks = [
  {
    label: "Email",
    value: "saifaliikundi@gmail.com",
    href: "mailto:saifaliikundi@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/Saif2246",
    href: "https://github.com/Saif2246",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/saif-ali-a22230409",
    href: "https://www.linkedin.com/in/saif-ali-a22230409/",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("saifaliikundi@gmail.com");
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="eyebrow">10 / Contact</p>

              <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl">
                Let&apos;s connect around security, engineering, and
                opportunities.
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] md:text-base">
                I&apos;m interested in practical security engineering,
                cloud security, GRC, and opportunities where I can continue
                building real-world technical experience.
              </p>
            </div>

            <div className="space-y-3">
              {contactLinks.map((link) => {
                const isEmail = link.label === "Email";
                const isExternal = link.href.startsWith("http");

                return (
                  <div
                    key={link.label}
                    className="group flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--background)] px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border-hover)]"
                  >
                    <a
                      href={link.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="min-w-0 flex-1"
                    >
                      <p className="text-sm font-medium text-[var(--text-primary)]">
                        {link.label}
                      </p>

                      <p className="mt-1 truncate text-xs text-[var(--text-muted)]">
                        {link.value}
                      </p>
                    </a>

                    {isEmail ? (
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="ml-4 shrink-0 rounded-lg border border-[var(--border)] px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] transition-all duration-300 hover:border-[var(--border-hover)] hover:text-[var(--accent)]"
                        aria-label="Copy email address"
                      >
                        {copied ? "Copied" : "Copy"}
                      </button>
                    ) : (
                      <span
                        aria-hidden="true"
                        className="ml-4 shrink-0 text-[var(--text-muted)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent)]"
                      >
                        ↗
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}