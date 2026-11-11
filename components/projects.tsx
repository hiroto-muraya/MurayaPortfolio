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
              <h3 className="font-bold text-2xl text-foreground">
                {work.name}
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
              <div className="mt-6 flex gap-4 font-mono text-sm">
                {work.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent underline-offset-4 hover:underline"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
