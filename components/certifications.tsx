import { Section } from "@/components/section";
import { certifications } from "@/lib/profile";

export function Certifications() {
  return (
    <Section id="certifications" index="04" title="Certifications">
      <ul className="divide-y divide-border rounded-lg border border-border bg-surface">
        {certifications.map((cert) => (
          <li
            key={cert.name}
            className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:gap-6"
          >
            <span className="w-24 shrink-0 font-mono text-muted text-xs">
              {cert.date}
            </span>
            <span className="font-medium text-foreground">{cert.name}</span>
            <span className="text-muted text-xs sm:ml-auto">{cert.issuer}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
