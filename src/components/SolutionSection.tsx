import { Layers, Cpu, Network } from "lucide-react";

const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 bg-muted/30">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">The Solution</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6 text-foreground">
              Introducing CogniKord AI
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              CogniKord AI is an AI-native orchestration platform that coordinates cross-department operational workflows. Instead of adding another system, it acts as an intelligent execution layer on top of existing ERP and TMS platforms.
            </p>
            <div className="space-y-4">
              {[
                { icon: Layers, text: "Works on top of existing systems — no rip-and-replace" },
                { icon: Cpu, text: "AI-powered detection and resolution engine" },
                { icon: Network, text: "Cross-department workflow orchestration" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ROI Card */}
          <div className="bg-card-gradient rounded-2xl border border-border p-8 glow-primary">
            <h3 className="text-xl font-bold text-foreground mb-6">Key Value & ROI</h3>
            <div className="space-y-5">
              {[
                { metric: "30–50%", label: "Reduction in exception resolution time" },
                { metric: "↓", label: "Minimize manual coordination across teams" },
                { metric: "↑", label: "Improve auditability and operational visibility" },
                { metric: "Auto", label: "Automate mismatch detection between PO, invoices & shipments" },
                { metric: "100s hrs", label: "Reduction of hundreds of hours in manual document processing and verification efforts across enterprise workflows" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-center">
                    <span className="text-xs font-bold text-primary leading-tight">{item.metric}</span>
                  </div>
                  <span className="text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
