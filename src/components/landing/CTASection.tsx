import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 hero-glow opacity-50" />
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight mb-6 md:text-4xl font-sans">
          Ready to Let Your Website{" "}
          <span className="gradient-text font-extrabold">Optimize Itself?</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto text-center">
          Join the next generation of intelligent web experiences. Start building with the Self-Evolving Engine today.
        </p>
        <a
          href="#"
          className="inline-flex h-12 px-8 items-center rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity gap-2 glow">

          Start Building <ArrowRight size={16} />
        </a>
      </div>
    </section>);

};

export default CTASection;