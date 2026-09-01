export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="container flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-[var(--text-primary)]">
            Saif Ali
          </p>

          <p className="mt-1 text-xs text-[var(--text-muted)]">
            Information Technology Student · Cloud Security & GRC
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Saif2246"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/saif-ali-a22230409/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          >
            LinkedIn
          </a>

          <span className="text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}