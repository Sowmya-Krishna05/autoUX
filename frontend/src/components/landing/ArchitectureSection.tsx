import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Monitor, Brain, Database } from "lucide-react";

const layers = [
  {
    icon: Monitor,
    title: "Presentation Layer",
    items: ["Dynamic frontend rendering", "Performance-aware asset delivery"],
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Brain,
    title: "Intelligence Layer",
    items: ["Real-time decision engine", "Reinforcement learning models"],
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Database,
    title: "Data & Infrastructure Layer",
    items: ["Event streaming pipeline", "Feature store & model training"],
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

const ArchitectureSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="architecture" className="py-24 md:py-32 relative section-glow" ref={ref}>
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-16 fade-in-up">
          <p className="text-primary text-sm font-medium font-mono mb-3 tracking-wider uppercase">Architecture</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            <span className="gradient-text">3-Layer</span> Architecture
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A modular, scalable stack designed for real-time intelligence and seamless delivery.
          </p>
        </div>

        <div className="space-y-4">
          {layers.map((l, i) => (
            <div
              key={l.title}
              className="fade-in-up p-6 rounded-xl bg-card border border-border card-hover flex flex-col sm:flex-row sm:items-center gap-4"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-lg ${l.bg} flex items-center justify-center shrink-0`}>
                <l.icon size={24} className={l.color} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">{l.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {l.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Connectors */}
        <div className="hidden sm:flex flex-col items-center -mt-2 mb-2 gap-0">
          {[0, 1].map((i) => (
            <div key={i} className="w-px h-0 bg-border" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
