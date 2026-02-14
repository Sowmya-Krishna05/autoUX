import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { LayoutTemplate, FlaskConical, Clock } from "lucide-react";

const problems = [
  {
    icon: LayoutTemplate,
    title: "Static Layouts",
    description: "One-size-fits-all designs that ignore individual user context and preferences.",
  },
  {
    icon: FlaskConical,
    title: "Manual Experiments",
    description: "A/B tests require manual setup, analysis, and implementation cycles.",
  },
  {
    icon: Clock,
    title: "Slow Optimization Cycles",
    description: "Weeks or months to gather data, make decisions, and deploy improvements.",
  },
];

const ProblemSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="problem" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Traditional Websites <span className="gradient-text">Don't Adapt</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Static websites rely on manual A/B testing, slow experimentation, and generic user experiences that leave conversions on the table.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className="fade-in-up p-6 rounded-xl bg-card border border-border card-hover"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                <p.icon size={20} className="text-destructive" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
