const footerLinks = [
  { label: "About", href: "#" },
  { label: "Documentation", href: "#" },
  { label: "Architecture", href: "#architecture" },
  { label: "Security", href: "#" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          © 2026 Self-Evolving Website Engine
        </p>
        <div className="flex flex-wrap items-center gap-6">
          {footerLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
