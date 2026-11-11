import { Section } from "@/components/section";
import { career } from "@/lib/profile";

export function Career() {
  return (
    <Section id="career" index="02" title="Career">
      <ol className="relative ml-1 border-border border-l">
        {career.map((item) => (
          <li
            key={`${item.period}-${item.title}`}
            className="mb-10 ml-6 last:mb-0"
          >
            <span className="absolute -left-[5px] mt-2 h-2.5 w-2.5 rounded-full border border-muted bg-background" />
            <p className="font-mono text-muted text-xs">{item.period}</p>
            <h3 className="mt-1 font-semibold text-foreground">{item.title}</h3>
            {item.organization && (
              <p className="text-muted text-sm">{item.organization}</p>
            )}
            {item.description && (
              <p className="mt-2 max-w-2xl text-muted text-sm leading-relaxed">
                {item.description}
              </p>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
