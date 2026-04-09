import { AlertTriangle, Clock, Eye } from "lucide-react";

const problems = [
  { icon: AlertTriangle, title: "Fragmented Systems", desc: "Procurement, logistics, and finance operate in silos with no unified coordination." },
  { icon: Clock, title: "Manual Coordination", desc: "Exception handling requires endless back-and-forth across teams, causing delays." },
  { icon: Eye, title: "Zero Visibility", desc: "No single view into mismatches between purchase orders, shipments, and invoices." },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 bg-background">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">The Challenge</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4 text-foreground">
            The Hidden Cost of Operational Chaos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Enterprise operations today are fragmented across procurement, logistics, and finance systems. Exception handling requires manual coordination across teams, leading to delays, errors, and lack of visibility.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((item, i) => (
            <div key={i} className="bg-card-gradient rounded-xl border border-border p-6 hover:glow-secondary transition-shadow duration-300">
              <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
