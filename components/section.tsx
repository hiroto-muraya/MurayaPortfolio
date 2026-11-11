import type { ReactNode } from "react";

type Props = {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, index, title, children }: Props) {
  return (
    <section id={id} className="border-border border-t py-20">
      <h2 className="mb-10 flex items-baseline gap-3 font-mono">
        <span className="text-muted text-sm">{index}.</span>
        <span className="font-semibold text-2xl text-foreground tracking-tight">
          {title}
        </span>
      </h2>
      {children}
    </section>
  );
}
