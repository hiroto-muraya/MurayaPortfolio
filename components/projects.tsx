import { Section } from "@/components/section";
import { projects } from "@/lib/profile";

export function Projects() {
  return (
    <Section id="projects" index="03" title="Personal Projects">
      <div className="grid gap-6">
        {projects.map((work) => (
          <article
            key={work.name}
            className="rounded-lg border border-border bg-surface p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="flex items-center gap-3 font-bold text-2xl text-foreground">
                {work.name}
                {work.status && (
                  <span className="rounded-full border border-border bg-background px-2.5 py-0.5 font-medium font-mono text-muted text-xs">
                    {work.status}
                  </span>
                )}
              </h3>
              <p className="font-mono text-muted text-xs">{work.role}</p>
            </div>
            <p className="mt-4 text-muted leading-relaxed">{work.summary}</p>

            <ul className="mt-6 space-y-2 text-sm">
              {work.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-foreground">
                  <span className="font-mono text-muted">-</span>
                  {highlight}
                </li>
              ))}
            </ul>

            <ul className="mt-6 flex flex-wrap gap-2">
              {work.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded bg-background px-2 py-1 font-mono text-muted text-xs"
                >
                  {tech}
                </li>
              ))}
            </ul>

            {work.links.length > 0 && (
              <ul className="mt-6 space-y-3 border-border border-t pt-6">
                {work.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block rounded border border-border bg-background px-4 py-2 font-mono text-foreground text-sm transition-colors hover:border-muted"
                    >
                      {link.label} ↗
                    </a>
                    {link.note && (
                      <p className="mt-2 text-muted text-xs">{link.note}</p>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
