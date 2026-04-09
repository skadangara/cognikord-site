import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText, AlertCircle, Shield, Zap, UserCheck, ClipboardList, ArrowRight, Plug } from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.png";

const capabilities = [
  { icon: FileText, title: "Document Intelligence", desc: "Extract structured data from invoices, POs, and shipment records." },
  { icon: AlertCircle, title: "Exception Detection", desc: "Identify inconsistencies across documents automatically." },
  { icon: Shield, title: "Policy Reasoning", desc: "Apply business rules to determine resolution paths." },
  { icon: Zap, title: "Resolution Engine", desc: "Auto-resolve or escalate based on severity." },
  { icon: UserCheck, title: "Human-in-the-Loop", desc: "Enable approvals for critical decisions." },
  { icon: ClipboardList, title: "Audit & Traceability", desc: "Full visibility of all actions and decisions." },
];

const Product = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-secondary/5 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        </div>
        <div className="container relative z-10 max-w-5xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-6">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Platform</span>
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
            CogniKord AI <span className="text-gradient">Platform</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            A multi-agent orchestration platform designed to manage enterprise operational workflows across systems, documents, and teams.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="text-base px-8 py-6">
              Request Demo <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button variant="heroOutline" size="lg" className="text-base px-8 py-6">
              Talk to Us
            </Button>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 bg-background">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="rounded-2xl border border-border overflow-hidden glow-secondary">
            <div className="bg-muted/50 flex items-center gap-2 px-4 py-2.5 border-b border-border">
              <span className="h-3 w-3 rounded-full bg-destructive/60" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <span className="h-3 w-3 rounded-full bg-primary/60" />
              <span className="text-xs text-muted-foreground ml-2">CogniKord AI — Orchestration Dashboard</span>
            </div>
            <img
              src={dashboardPreview}
              alt="CogniKord AI Orchestration Dashboard showing document pipeline, exception tracking, and audit trail"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-foreground">Core Capabilities</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <div key={i} className="bg-card-gradient rounded-xl border border-border p-6 hover:border-primary/30 transition-colors group">
                <div className="h-11 w-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <cap.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1">{cap.title}</h3>
                <p className="text-sm text-muted-foreground">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-20 bg-background">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <div className="h-14 w-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 mx-auto">
            <Plug className="h-7 w-7 text-secondary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">Seamless Integration</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Seamlessly integrates with existing ERP, TMS, and financial systems. No rip-and-replace — CogniKord AI works as an intelligent layer on top of your current infrastructure.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["SAP", "Oracle", "NetSuite", "TMS", "QuickBooks", "Custom APIs"].map((sys) => (
              <span key={sys} className="rounded-full border border-border bg-muted/50 px-4 py-2 text-sm text-muted-foreground">
                {sys}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Product;
