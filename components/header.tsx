const navItems = [
  { href: "#skills", label: "skills" },
  { href: "#career", label: "career" },
  { href: "#projects", label: "projects" },
  { href: "#certifications", label: "certs" },
  { href: "#contact", label: "contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-border border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-center gap-4 px-6 sm:justify-between font-mono text-xs sm:text-sm">
        <a href="#top" className="hidden shrink-0 text-foreground sm:inline">
          <span className="text-muted">~/</span>muraya
        </a>
        <nav>
          <ul className="flex gap-3 text-muted sm:gap-5">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
