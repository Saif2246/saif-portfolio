
const certificate = {
  title: "Google Cybersecurity Professional Certificate",
  issuer: "Google Career Certificates",
  platform: "Coursera",
  date: "December 28, 2025",
  courses: "9 Courses",
  certificateUrl:
    "/certificates/google-cybersecurity-professional-certificate.pdf",
  verificationUrl:
    "https://coursera.org/verify/professional-cert/6KW22LPQ6C12",
};

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="border-t border-(--border) py-24 md:py-32"
    >
      <div className="container">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-(--accent)">
            08 / Certifications
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-(--text-primary) sm:text-4xl">
            Professional certifications.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-(--text-secondary)">
            Industry-recognized learning that supports my practical work in
            cybersecurity, security operations, and cloud security.
          </p>
        </div>

        <div className="mt-12 max-w-4xl">
          <article className="group rounded-2xl border border-(--border) bg-(--surface) p-6 transition-all duration-300 hover:border-(--border-hover) hover:bg-(--surface-hover) active:border-(--border-hover) active:bg-(--surface-hover) motion-reduce:transition-none sm:p-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-(--border) px-3 py-1 font-mono text-xs text-(--text-secondary)">
                    {certificate.courses}
                  </span>

                  <span className="rounded-full border border-(--border) px-3 py-1 font-mono text-xs text-(--text-secondary)">
                    {certificate.platform}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold tracking-tight text-(--text-primary)">
                  {certificate.title}
                </h3>

                <p className="mt-3 text-sm text-(--text-secondary)">
                  {certificate.issuer} · {certificate.platform}
                </p>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-(--text-muted)">
                      Completed
                    </p>
                    <p className="mt-2 text-sm text-(--text-secondary)">
                      {certificate.date}
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-(--text-muted)">
                      Credential
                    </p>
                    <p className="mt-2 text-sm text-(--text-secondary)">
                      Professional Certificate
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-7 text-(--text-secondary)">
                  Completed nine courses covering cybersecurity foundations,
                  security risks, networks and network security, Linux and
                  SQL, vulnerabilities, detection and response, Python
                  automation, and cybersecurity career preparation.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={certificate.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-primary min-h-11 transition-transform duration-200 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent)"
                  >
                    View Certificate
                    <span aria-hidden="true">↗</span>
                  </a>

                  <a
                    href={certificate.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-secondary min-h-11 transition-transform duration-200 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent)"
                  >
                    Verify Credential
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>

              <div className="shrink-0 lg:pt-1">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-(--border) bg-(--surface-elevated) font-mono text-lg font-semibold text-(--accent)">
                  G
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
