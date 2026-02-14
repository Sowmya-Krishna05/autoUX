import { ArrowRight, Layers } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background glow */}
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary/50 text-xs text-muted-foreground mb-8 font-mono">
          <Layers size={14} className="text-primary" />
          AI-Powered Autonomous Optimization
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6 font-sans md:text-5xl">
          Websites That{" "}
          <span className="gradient-text text-teal-400">Improve Themselves.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          An AI-powered optimization engine that continuously adapts your website's layout, performance, and conversion flow — automatically.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex h-12 px-8 items-center rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity gap-2 glow-sm">

            Get Started <ArrowRight size={16} />
          </a>
          <a
            href="#architecture"
            className="inline-flex h-12 px-8 items-center rounded-lg border border-border bg-secondary/30 text-foreground font-medium hover:bg-secondary/60 transition-colors">

            View Architecture
          </a>
        </div>

        {/* Decorative grid */}
        <div className="mt-20 relative">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="grid grid-cols-3 gap-px mt-px">
            {[...Array(3)].map((_, i) =>
            <div key={i} className="h-32 bg-secondary/20 rounded-b-lg border border-border/50" />
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      </div>
    </section>);

};

export default HeroSection;