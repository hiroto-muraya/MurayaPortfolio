import { Section } from "@/components/section";
import { externalLinkProps } from "@/lib/link";
import { links } from "@/lib/profile";

export function Contact() {
  return (
    <Section id="contact" index="04" title="Contact">
      <p className="mb-8 max-w-2xl text-muted leading-relaxed">
        お仕事のご相談や、制作物へのご感想などはこちらからどうぞ。
      </p>
      <ul className="grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              {...externalLinkProps(link.href)}
              className="flex items-center justify-between gap-4 rounded-lg border border-border bg-surface px-5 py-4 transition-colors hover:border-muted"
            >
              <span className="font-mono text-muted text-sm">{link.label}</span>
              <span className="truncate text-foreground text-sm">
                {link.handle} ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
