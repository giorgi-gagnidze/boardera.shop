import logo from "@/assets/boardera-logo.png";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Social", href: "#social" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#hero" className="flex items-center gap-3">
          <img src={logo} alt="Boardera logo" width={44} height={44} className="rounded-lg" />
          <span className="text-lg font-bold text-secondary hidden sm:inline">Boardera</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <p className="text-sm font-medium text-muted-foreground max-w-[180px] text-right leading-tight">
          Where every game night begins ✨
        </p>
      </div>
    </header>
  );
};

export default Header;
