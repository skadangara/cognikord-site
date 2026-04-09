import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CogniKordLogo from "@/components/CogniKordLogo";
import { Target, Eye, Lightbulb, Users, XCircle, CheckCircle } from "lucide-react";

const notList = [
  "Not an ERP replacement",
  "Not RPA",
  "Not a chatbot",
];

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
        </div>
        <div className="container relative z-10 max-w-4xl mx-auto px-4 text-center">
          <CogniKordLogo size={64} />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mt-6 mb-4">About Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building the next generation of enterprise execution infrastructure.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Company Overview</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              CogniKord AI is building the next generation of enterprise execution infrastructure. Our mission is to transform how organisations manage complex operational workflows through AI-native orchestration.
            </p>
          </div>
          <div className="bg-card-gradient rounded-2xl border border-border p-8 glow-primary">
            <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
              <Eye className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground text-lg">
              To become the AI-native execution layer for enterprise operations globally.
            </p>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Why We Exist</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Despite heavy investments in ERP and automation systems, enterprises still rely on manual coordination for exception handling. CogniKord AI addresses this structural gap by introducing intelligent orchestration across systems and teams.
            </p>
          </div>
        </div>
      </section>

      {/* Founding Team */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">Founding Team</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Founded by AI engineers with deep experience in Generative AI, multi-agent systems, and enterprise workflow automation.
          </p>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-10">What Makes Us Different</h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {notList.map((item, i) => (
              <div key={i} className="bg-card-gradient rounded-xl border border-border p-5 flex items-center gap-3">
                <XCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                <span className="text-foreground text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-card-gradient rounded-2xl border border-primary/30 p-8 glow-primary">
            <div className="flex items-center justify-center gap-3 mb-3">
              <CheckCircle className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">CogniKord AI</h3>
            </div>
            <p className="text-muted-foreground text-lg">
              A coordination layer that brings intelligence to operational execution.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
