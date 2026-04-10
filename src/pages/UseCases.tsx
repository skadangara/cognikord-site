import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Package, FileCheck, DollarSign, ArrowRight, AlertTriangle, Clock, BarChart3, Users, CheckCircle, CreditCard } from "lucide-react";

const useCases = [
  {
    icon: Package,
    title: "Supply Chain Exception Management",
    description: "Detect and resolve supply chain discrepancies automatically across your procurement and logistics workflows.",
    items: [
      { icon: AlertTriangle, text: "PO vs Invoice mismatch" },
      { icon: Clock, text: "Shipment delays" },
      { icon: BarChart3, text: "Quantity discrepancies" },
    ],
  },
  {
    icon: FileCheck,
    title: "Procurement Operations",
    description: "Streamline procurement workflows with intelligent validation and reconciliation across vendor ecosystems.",
    items: [
      { icon: Users, text: "Vendor reconciliation" },
      { icon: CheckCircle, text: "Purchase validation" },
    ],
  },
  {
    icon: DollarSign,
    title: "Finance Operations",
    description: "Automate financial verification and approval processes with policy-aware orchestration.",
    items: [
      { icon: FileCheck, text: "Invoice verification" },
      { icon: CreditCard, text: "Payment approval workflows" },
    ],
  },
];

const UseCases = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-secondary/5 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        </div>
        <div className="container relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-6">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Use Cases</span>
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Real-World Applications
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            CogniKord AI powers intelligent orchestration across supply chain, procurement, and finance operations.
          </p>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container max-w-5xl mx-auto px-4 space-y-16">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-card-gradient rounded-2xl border border-border p-8 md:p-10"
            >
              <div className="flex items-start gap-5 mb-8">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                  <useCase.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    {useCase.title}
                  </h2>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {useCase.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-xl border border-border bg-muted/30 p-4 transition-colors hover:border-primary/30"
                  >
                    <item.icon className="h-5 w-5 text-secondary shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            See CogniKord AI in Action
          </h2>
          <p className="text-muted-foreground mb-8">
            Discover how our platform can transform your operational workflows.
          </p>
          <a href="/#cta" className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-6 py-3 font-semibold shadow-lg hover:bg-primary/85 transition-colors">
            Request a Demo <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UseCases;
