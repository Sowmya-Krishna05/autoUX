import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Eye, Cpu, RotateCcw } from "lucide-react";

const steps = [
  {
    icon: Eye,
    step: "01",
    title: "Understands Every Visitor",
    description: "Collects device, network, and behavioral signals to build a real-time visitor profile.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "Makes Intelligent Decisions",
    description: "Uses contextual learning models to choose the optimal layout and content variant.",
  },
  {
    icon: RotateCcw,
    step: "03",
    title: "Learns and Improves",
    description: "A closed-loop feedback system feeds outcomes back into the model for continuous improvement.",
  },
];

const HowItWorksSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="how-it-works" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-16 fade-in-up">
          <p className="text-primary text-sm font-medium font-mono mb-3 tracking-wider uppercase">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Three Steps to <span className="gradient-text">Autonomous Optimization</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className="fade-in-up relative p-6 rounded-xl bg-card border border-border card-hover"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <span className="text-5xl font-extrabold text-primary/10 absolute top-4 right-4 font-mono">
                {s.step}
              </span>
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

export default HowItWorksSection;
