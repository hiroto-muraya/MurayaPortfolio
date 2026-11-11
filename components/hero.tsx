import { externalLinkProps } from "@/lib/link";
import { links, profile } from "@/lib/profile";

export function Hero() {
  return (
    <div id="top" className="py-24 sm:py-32">
      <p className="mb-6 font-mono text-muted text-sm">
        <span className="text-accent">$</span> whoami
      </p>
      <h1 className="font-bold text-4xl text-foreground tracking-tight sm:text-6xl">
        {profile.name}
      </h1>
      {profile.nameJa && (
        <p className="mt-2 text-lg text-muted">{profile.nameJa}</p>
      )}
      <p className="mt-6 font-mono text-accent">{profile.role}</p>
      <ul className="mt-10 flex flex-wrap gap-3 font-mono text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              {...externalLinkProps(link.href)}
              className="inline-block rounded border border-border bg-surface px-4 py-2 text-foreground transition-colors hover:border-muted"
            >
              {link.label} ↗
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
