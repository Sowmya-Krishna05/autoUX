import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Zap, Brain, Gauge, ShieldCheck } from "lucide-react";

const solutions = [
  {
    icon: Zap,
    title: "Real-Time Optimization",
    description: "Instantly adjust layouts, content, and CTAs based on live user signals.",
  },
  {
    icon: Brain,
    title: "Continuous Learning",
    description: "Reinforcement learning models improve with every visitor interaction.",
  },
  {
    icon: Gauge,
    title: "Performance-Aware Delivery",
    description: "Serve optimized assets based on device capability and network conditions.",
  },
  {
    icon: ShieldCheck,
    title: "Built-in Guardrails",
    description: "Automatic rollback and safety constraints prevent regressions.",
  },
];

const SolutionSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="solution" className="py-24 md:py-32 relative section-glow" ref={ref}>
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-16 fade-in-up">
          <p className="text-primary text-sm font-medium font-mono mb-3 tracking-wider uppercase">The Solution</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Meet the <span className="gradient-text">Self-Evolving Website Engine</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {solutions.map((s, i) => (
            <div
              key={s.title}
              className="fade-in-up p-6 rounded-xl bg-card border border-border card-hover gradient-border"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <s.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
