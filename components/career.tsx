import { HiddenText } from "@/components/hidden-text";
import { Section } from "@/components/section";
import { career } from "@/lib/profile";

export function Career() {
  return (
    <Section id="career" index="02" title="Career">
      <ol className="relative ml-1 border-border border-l">
        {career.map((item) => (
          <li key={item.period} className="mb-10 ml-6 last:mb-0">
            <span className="absolute -left-[5px] mt-2 h-2.5 w-2.5 rounded-full border border-muted bg-background" />
            <p className="font-mono text-muted text-xs">{item.period}</p>
            <h3 className="mt-1 font-semibold text-foreground">
              {typeof item.title === "string" ? (
                item.title
              ) : (
                <HiddenText encoded={item.title.hidden} />
              )}
            </h3>
            {item.projects && (
              <div className="mt-3">
                <p className="font-mono text-muted text-xs">案件</p>
                <ul className="mt-1 space-y-1 text-muted text-sm">
                  {item.projects.map((project) => (
                    <li key={project} className="flex gap-3">
                      <span className="font-mono">-</span>
                      {project}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
