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
      <div className="container flex items-center justify-between h-20 md:h-24">
        <a href="#hero" className="text-xl md:text-2xl font-extrabold text-secondary tracking-tight">
          Board<span className="text-primary">era</span>
        </a>

        <div className="flex flex-col items-center -mb-1">
          <a href="#hero" className="flex-shrink-0">
            <img src="/lovable-uploads/f3d1ed88-24b4-423c-ab30-95a6d6d9d649.png" alt="Boardera logo" width={44} height={44} className="rounded-full" />
          </a>
          <p className="text-[10px] md:text-xs font-semibold text-secondary leading-tight mt-0.5">
            Your <span className="text-primary">Board</span> Games
          </p>
        </div>

        <a href="#hero" className="text-xl md:text-2xl font-extrabold text-secondary tracking-tight">
          Board<span className="text-primary">era</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
