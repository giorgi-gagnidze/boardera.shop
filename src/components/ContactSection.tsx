import { Mail, MessageCircle, Facebook, Instagram } from "lucide-react";

const contacts = [
  {
    label: "Email",
    value: "info@boardera.shop",
    href: "mailto:info@boardera.shop",
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/15551234567",
    icon: MessageCircle,
  },
  {
    label: "Messenger",
    value: "Send a message",
    href: "https://m.me/boardera.ge",
    icon: Facebook,
  },
  {
    label: "Instagram",
    value: "@boardera.ge",
    href: "https://instagram.com/boardera.ge",
    icon: Instagram,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-muted">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center">საკონტაქტო ინფორმაცია</h2>
        <p className="mt-3 text-muted-foreground text-center max-w-md mx-auto">
          შესაკვეთად  და კითხვებისთვის დაგვიკავშირდი
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-card rounded-2xl p-5 card-shadow card-hover"
            >
              <div className="bg-primary/10 text-primary p-3 rounded-xl">
                <c.icon size={22} />
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{c.label}</p>
                <p className="text-sm font-semibold text-secondary">{c.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
