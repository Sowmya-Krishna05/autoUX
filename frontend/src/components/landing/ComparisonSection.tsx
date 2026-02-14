import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { X, Check } from "lucide-react";

const rows = [
  { feature: "Setup", traditional: "Manual", engine: "Autonomous" },
  { feature: "Traffic Allocation", traditional: "Fixed splits", engine: "Dynamic allocation" },
  { feature: "Learning Speed", traditional: "Slow (weeks)", engine: "Continuous (real-time)" },
  { feature: "Safety", traditional: "No guardrails", engine: "Automatic rollback" },
  { feature: "Personalization", traditional: "None", engine: "Per-visitor optimization" },
  { feature: "Scaling", traditional: "Manual effort", engine: "Self-scaling" },
];

const ComparisonSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="features" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16 fade-in-up">
          <p className="text-primary text-sm font-medium font-mono mb-3 tracking-wider uppercase">Comparison</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Traditional A/B Testing <span className="gradient-text">vs Self-Evolving Engine</span>
          </h2>
        </div>

        <div className="fade-in-up rounded-xl border border-border overflow-hidden">
          <div className="grid grid-cols-3 bg-secondary/50 text-sm font-semibold">
            <div className="p-4">Feature</div>
            <div className="p-4 text-center border-l border-border">Traditional</div>
            <div className="p-4 text-center border-l border-border text-primary">Self-Evolving</div>
          </div>
          {rows.map((r, i) => (
            <div
              key={r.feature}
              className={`grid grid-cols-3 text-sm ${
                i % 2 === 0 ? "bg-card" : "bg-card/50"
              }`}
            >
              <div className="p-4 font-medium">{r.feature}</div>
              <div className="p-4 text-center text-muted-foreground border-l border-border flex items-center justify-center gap-1.5">
                <X size={14} className="text-destructive shrink-0" />
                <span className="hidden sm:inline">{r.traditional}</span>
              </div>
              <div className="p-4 text-center border-l border-border flex items-center justify-center gap-1.5">
                <Check size={14} className="text-primary shrink-0" />
                <span className="hidden sm:inline">{r.engine}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
