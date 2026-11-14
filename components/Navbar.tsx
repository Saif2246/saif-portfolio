
"use client";

import { useEffect, useRef, useState } from "react";

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

  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const handleOutsideClick = (event: PointerEvent) => {
      const target = event.target;

      if (
        target instanceof Node &&
        !menuRef.current?.contains(target) &&
        !menuButtonRef.current?.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-(--border) bg-[rgba(7,11,18,0.82)] backdrop-blur-xl">
      <div className="container">
        <nav
          className="flex min-h-18 items-center justify-between"
          aria-label="Primary navigation"
        >
          <a
            href="#top"
            onClick={closeMenu}
            aria-label="Saif Ali home"
            className="group flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-(--accent) focus-visible:outline-offset-4"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-(--border) bg-(--surface) font-mono text-sm font-semibold text-(--accent) transition-all duration-200 group-hover:border-(--accent) group-active:scale-95">
              SA
            </span>

            <span className="hidden text-sm font-semibold tracking-tight text-(--text-primary) sm:block">
              Saif Ali
            </span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-sm text-sm font-medium text-(--text-secondary) transition-colors duration-200 hover:text-(--text-primary) focus-visible:outline-2 focus-visible:outline-(--accent) focus-visible:outline-offset-4"
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
              className="button button-secondary min-h-11 px-4 text-xs transition-transform duration-200 active:scale-95 focus-visible:outline-2 focus-visible:outline-(--accent) focus-visible:outline-offset-4"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/saif-ali-a22230409/"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary min-h-11 px-4 text-xs transition-transform duration-200 active:scale-95 focus-visible:outline-2 focus-visible:outline-(--accent) focus-visible:outline-offset-4"
            >
              LinkedIn
            </a>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className="flex h-11 w-11 touch-manipulation items-center justify-center rounded-lg border border-(--border) text-(--text-primary) transition-all duration-200 hover:border-(--border-hover) active:scale-90 active:bg-(--surface) focus-visible:outline-2 focus-visible:outline-(--accent) md:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="sr-only">
              {isOpen ? "Close menu" : "Open menu"}
            </span>

            <span
              aria-hidden="true"
              className="flex w-5 flex-col gap-1.5"
            >
              <span
                className={`block h-px w-full bg-current transition-transform duration-200 ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />

              <span
                className={`block h-px w-full bg-current transition-opacity duration-200 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`block h-px w-full bg-current transition-transform duration-200 ${
                  isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>

        <div
          ref={menuRef}
          id="mobile-navigation"
          style={{ display: isOpen ? "block" : "none" }}
          className="border-t border-(--border) bg-[#111927] p-4 md:hidden"
        >
          <div className="flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="flex min-h-11 items-center border-b border-(--border) py-3 text-sm font-medium text-(--text-secondary) transition-colors duration-200 hover:text-(--text-primary) active:translate-x-1 active:text-(--accent) focus-visible:outline-2 focus-visible:outline-(--accent) focus-visible:outline-offset-2"
              >
                {item.label}
              </a>
            ))}

            <div className="mt-4 flex gap-3">
              <a
                href="https://github.com/Saif2246"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary flex min-h-11 flex-1 items-center justify-center px-4 text-xs transition-transform duration-200 active:scale-95 focus-visible:outline-2 focus-visible:outline-(--accent) focus-visible:outline-offset-4"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/saif-ali-a22230409/"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary flex min-h-11 flex-1 items-center justify-center px-4 text-xs transition-transform duration-200 active:scale-95 focus-visible:outline-2 focus-visible:outline-(--accent) focus-visible:outline-offset-4"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
