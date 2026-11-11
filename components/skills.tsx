import { Section } from "@/components/section";
import { skillGroups } from "@/lib/profile";

export function Skills() {
  return (
    <Section id="skills" index="01" title="Skills">
      <div className="grid gap-6 sm:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-lg border border-border bg-surface p-5"
          >
            <h3 className="mb-4 font-mono text-muted text-xs uppercase tracking-widest">
              {group.category}
            </h3>
            <ul className="space-y-3">
              {group.items.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center gap-3 text-foreground text-sm"
                >
                  <span className="flex shrink-0 gap-1">
                    {skill.icons.map((icon) => (
                      // 小さな静的SVGなので next/image ではなく img で十分
                      // biome-ignore lint/performance/noImgElement: static svg icon
                      <img
                        key={icon}
                        src={`/icons/${icon}.svg`}
                        alt=""
                        width={20}
                        height={20}
                        className="h-5 w-5"
                      />
                    ))}
                  </span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
