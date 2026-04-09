import { FileText, Brain, AlertCircle, Shield, UserCheck, ClipboardList } from "lucide-react";

const steps = [
  { icon: FileText, title: "Document Ingestion", desc: "PO, invoices, and shipment documents are ingested automatically." },
  { icon: Brain, title: "AI Extraction & Validation", desc: "AI extracts key fields and validates against expected data." },
  { icon: AlertCircle, title: "Exception Detection", desc: "Mismatches and anomalies are flagged in real-time." },
  { icon: Shield, title: "Policy-Driven Resolution", desc: "Business rules determine the resolution path automatically." },
  { icon: UserCheck, title: "Human-in-the-Loop Approvals", desc: "Critical decisions are routed for human review." },
  { icon: ClipboardList, title: "Full Audit Trail", desc: "Every action is logged for compliance and visibility." },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Process</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4 text-foreground">How It Works</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">From document intake to resolution — fully orchestrated.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative bg-card-gradient rounded-xl border border-border p-6 hover:border-primary/30 transition-colors group">
              <div className="absolute top-4 right-4 text-4xl font-extrabold text-muted/30 select-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <step.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-1">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
