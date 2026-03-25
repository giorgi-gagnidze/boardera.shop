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
        <a href="#hero" className="flex-shrink-0">
          <img src={logo} alt="Boardera logo" width={48} height={48} className="rounded-full" />
        </a>

        <a href="#hero" className="text-xl md:text-2xl font-extrabold text-secondary tracking-tight">
          Board<span className="text-primary">era</span>
        </a>

        <p className="text-sm md:text-base font-semibold text-secondary max-w-[180px] text-right leading-tight">
          Your Board Games
        </p>
      </div>
    </header>
  );
};

export default Header;
