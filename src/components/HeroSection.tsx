import heroImage from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section id="hero" className="section-padding flex flex-col items-center text-center pt-28 pb-24">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-secondary tracking-tight animate-fade-up">
        Board<span className="text-primary">era</span>
      </h1>
      <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-up" style={{ animationDelay: "0.15s" }}>
        Bringing people together, one game at a time. Discover, play, and share the joy of board games.
      </p>
      <a
        href="#social"
        className="mt-10 inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-base card-hover hover:opacity-90 animate-fade-up"
        style={{ animationDelay: "0.3s" }}
      >
        Explore More ↓
      </a>
      <img
        src={heroImage}
        alt="People playing board games"
        width={1024}
        height={768}
        className="mt-16 max-w-md md:max-w-lg lg:max-w-xl w-full animate-fade-up"
        style={{ animationDelay: "0.4s" }}
      />
    </section>
  );
};

export default HeroSection;
