import { Facebook, Instagram, Music, Youtube } from "lucide-react";

const socials = [
  {
    name: "Facebook",
    icon: Facebook,
    description: "Join our community for game night announcements and exclusive giveaways.",
    url: "https://facebook.com",
    color: "bg-[hsl(220,55%,20%)]",
  },
  {
    name: "Instagram",
    icon: Instagram,
    description: "Follow us for beautiful game photography, unboxings, and behind-the-scenes.",
    url: "https://instagram.com",
    color: "bg-primary",
  },
  {
    name: "TikTok",
    icon: Music,
    description: "Watch quick game reviews, funny moments, and tips in 60 seconds.",
    url: "https://tiktok.com",
    color: "bg-foreground",
  },
  {
    name: "YouTube",
    icon: Youtube,
    description: "Subscribe for full game tutorials, strategy guides, and live play sessions.",
    url: "https://youtube.com",
    color: "bg-[hsl(0,80%,50%)]",
  },
];

const SocialSection = () => {
  return (
    <section id="social" className="section-padding bg-muted">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center">
          Follow Us
        </h2>
        <p className="mt-3 text-muted-foreground text-center max-w-md mx-auto">
          Stay connected and never miss a game night update.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-2xl p-6 card-shadow card-hover flex flex-col items-start gap-4"
            >
              <div className={`${s.color} p-3 rounded-xl text-primary-foreground`}>
                <s.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-secondary">{s.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {s.description}
              </p>
              <span className="mt-auto inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 gap-1 transition-all">
                Visit page →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
