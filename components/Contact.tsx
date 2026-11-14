
"use client";

import { useEffect, useRef, useState } from "react";

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
  const [copyError, setCopyError] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const copyToClipboard = async (text: string) => {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch {
        // Use fallback method.
      }
    }

    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    textArea.style.pointerEvents = "none";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    let successful = false;

    try {
      successful = document.execCommand("copy");
    } catch {
      successful = false;
    }

    document.body.removeChild(textArea);

    return successful;
  };

  const handleCopyEmail = async () => {
    const success = await copyToClipboard("saifaliikundi@gmail.com");

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setCopied(success);
    setCopyError(!success);

    if (success) {
      timeoutRef.current = setTimeout(() => {
        setCopied(false);
        timeoutRef.current = null;
      }, 2000);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="rounded-3xl border border-(--border) bg-(--surface) p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="eyebrow">10 / Contact</p>

              <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-(--text-primary) sm:text-4xl md:text-5xl">
                Let&apos;s connect around security, engineering, and
                opportunities.
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-(--text-secondary) md:text-base">
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
                    className="group flex items-center justify-between rounded-xl border border-(--border) bg-(--background) px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-(--border-hover)"
                  >
                    <a
                      href={link.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="min-w-0 flex-1"
                    >
                      <p className="text-sm font-medium text-(--text-primary)">
                        {link.label}
                      </p>

                      <p className="mt-1 truncate text-xs text-(--text-muted)">
                        {link.value}
                      </p>
                    </a>

                    {isEmail ? (
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="ml-4 shrink-0 rounded-lg border border-(--border) px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-(--text-muted) transition-all duration-300 hover:border-(--border-hover) hover:text-(--accent)"
                        aria-label="Copy email address"
                      >
                        {copied ? "Copied" : copyError ? "Retry" : "Copy"}
                      </button>
                    ) : (
                      <span
                        aria-hidden="true"
                        className="ml-4 shrink-0 text-(--text-muted) transition-all duration-300 group-hover:translate-x-1 group-hover:text-(--accent)"
                      >
                        ↗
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <p className="sr-only" aria-live="polite" aria-atomic="true">
            {copied
              ? "Email address copied to clipboard."
              : copyError
                ? "Unable to copy email address."
                : ""}
          </p>
        </div>
      </div>
    </section>
  );
}
