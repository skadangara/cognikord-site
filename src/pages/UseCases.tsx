import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Package, FileCheck, Landmark, ArrowRight, AlertTriangle, Clock, BarChart3, Users, CheckCircle, CreditCard } from "lucide-react";

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
    accent: "primary" as const,
  },
  {
    icon: FileCheck,
    title: "Procurement Operations",
    description: "Streamline procurement workflows with intelligent validation and reconciliation across vendor ecosystems.",
    items: [
      { icon: FileCheck, text: "Vendor Proposal Evaluation & Compliance Verification" },
      { icon: Users, text: "Vendor reconciliation" },
      { icon: CheckCircle, text: "Purchase validation" },
    ],
    accent: "secondary" as const,
  },
  {
    icon: Landmark,
    title: "Finance Operations",
    description: "Automate financial verification and approval processes with policy-aware orchestration.",
    items: [
      { icon: FileCheck, text: "Invoice verification" },
      { icon: CreditCard, text: "Payment approval workflows" },
    ],
    accent: "primary" as const,
  },
];

const accentStyles = {
  primary: {
    iconBg: "bg-primary/10 border-primary/20",
    iconColor: "text-primary",
    number: "text-primary/20",
    itemHover: "hover:border-primary/40 hover:shadow-[0_0_20px_hsl(152_65%_48%/0.08)]",
    itemIcon: "text-primary",
    line: "from-primary/0 via-primary/20 to-primary/0",
  },
  secondary: {
    iconBg: "bg-secondary/10 border-secondary/20",
    iconColor: "text-secondary",
    number: "text-secondary/20",
    itemHover: "hover:border-secondary/40 hover:shadow-[0_0_20px_hsl(195_80%_50%/0.08)]",
    itemIcon: "text-secondary",
    line: "from-secondary/0 via-secondary/20 to-secondary/0",
  },
};

const UseCases = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-secondary/5 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        </div>
        <div className="container relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-6 animate-fade-in-up">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Use Cases</span>
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Real-World{" "}
            <span className="text-gradient">Applications</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            CogniKord AI powers intelligent orchestration across supply chain, procurement, and finance operations.
          </p>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="relative space-y-8">
            {/* Vertical connecting line */}
            <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-border to-secondary/0 hidden md:block" />

            {useCases.map((useCase, index) => {
              const styles = accentStyles[useCase.accent];
              return (
                <div
                  key={index}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Step number - desktop */}
                  <div className="hidden md:flex absolute -left-4 top-8 h-10 w-10 items-center justify-center rounded-full bg-background border-2 border-border z-10">
                    <span className={`text-sm font-bold ${styles.iconColor}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="md:ml-16 group">
                    <div className="bg-card-gradient rounded-2xl border border-border p-8 md:p-10 transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_40px_hsl(152_65%_48%/0.06)]">
                      {/* Header */}
                      <div className="flex items-start gap-5 mb-8">
                        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${styles.iconBg} border transition-transform duration-300 group-hover:scale-110`}>
                          <useCase.icon className={`h-7 w-7 ${styles.iconColor}`} />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-foreground mb-2">
                            {useCase.title}
                          </h2>
                          <p className="text-muted-foreground leading-relaxed">
                            {useCase.description}
                          </p>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className={`h-px w-full bg-gradient-to-r ${styles.line} mb-6`} />

                      {/* Items */}
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {useCase.items.map((item, i) => (
                          <div
                            key={i}
                            className={`flex items-center gap-3 rounded-xl border border-border bg-background/50 p-4 transition-all duration-200 ${styles.itemHover}`}
                          >
                            <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${styles.iconBg} border`}>
                              <item.icon className={`h-4 w-4 ${styles.itemIcon}`} />
                            </div>
                            <span className="text-sm font-medium text-foreground">
                              {item.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div className="container relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See CogniKord AI{" "}
            <span className="text-gradient">in Action</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Discover how our platform can transform your operational workflows.
          </p>
          <a
            href="/#cta"
            className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-8 py-3.5 font-semibold shadow-lg hover:bg-primary/85 transition-all duration-200 hover:shadow-[0_0_30px_hsl(152_65%_48%/0.25)] hover:-translate-y-0.5"
          >
            Request a Demo <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UseCases;
