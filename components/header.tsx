const navItems = [
  { href: "#about", label: "about" },
  { href: "#career", label: "career" },
  { href: "#works", label: "works" },
  { href: "#contact", label: "contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-border border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6 font-mono text-sm">
        <a href="#top" className="text-foreground">
          <span className="text-muted">~/</span>muraya
        </a>
        <nav>
          <ul className="flex gap-5 text-muted">
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
