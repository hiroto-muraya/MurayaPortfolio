import { Section } from "@/components/section";
import { profile, type SkillLevel, skillGroups } from "@/lib/profile";

const levelStyle: Record<SkillLevel, string> = {
  実務: "border-accent/60 text-foreground",
  個人開発: "border-border text-muted",
  学習中: "border-dashed border-border text-muted",
};

export function About() {
  return (
    <Section id="about" index="01" title="About & Skills">
      <div className="max-w-2xl space-y-4 text-muted leading-relaxed">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-lg border border-border bg-surface p-5"
          >
            <h3 className="mb-4 font-mono text-muted text-xs uppercase tracking-widest">
              {group.category}
            </h3>
            <ul className="space-y-2">
              {group.items.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center justify-between gap-2 text-sm"
                >
                  <span className="text-foreground">{skill.name}</span>
                  <span
                    className={`shrink-0 rounded border px-1.5 py-0.5 font-mono text-[10px] ${levelStyle[skill.level]}`}
                  >
                    {skill.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
