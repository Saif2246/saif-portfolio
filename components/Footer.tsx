
export default function Footer() {
  return (
    <footer className="border-t border-(--border)">
      <div className="container flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-(--text-primary)">
            Saif Ali
          </p>

          <p className="mt-1 text-xs text-(--text-muted)">
            Information Technology Student · Cloud Security & GRC
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:gap-5">
          <a
            href="https://github.com/Saif2246"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center rounded-md px-2 text-xs text-(--text-muted) transition-colors hover:text-(--text-primary) active:text-(--accent) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent) motion-reduce:transition-none"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/saif-ali-a22230409/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center rounded-md px-2 text-xs text-(--text-muted) transition-colors hover:text-(--text-primary) active:text-(--accent) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent) motion-reduce:transition-none"
          >
            LinkedIn
          </a>

          <span className="text-xs text-(--text-muted)">
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}
