import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Lightbulb, Users, XCircle, CheckCircle } from "lucide-react";

const notList = [
  "Not an ERP replacement",
  "Not RPA",
  "Not a chatbot",
];

const team = [
  {
    initials: "SK",
    name: "Sajana Kadangara",
    role: "Founder & CEO",
    bio: "13+ years in IT with deep expertise in multi-agent AI orchestration, having driven 40–60% efficiency gains across supply chain and enterprise AI at companies like Carbmee and Verizon.",
  },
  {
    initials: "BP",
    name: "Bineesh Panangat",
    role: "Co-Founder & CTO",
    bio: "13+ years in IT and 8+ in AI/ML, specialising in production multi-agent systems and LLM-powered platforms — scaled a startup product through a successful Fortune 500 acquisition.",
  },
  {
    initials: "VD",
    name: "Vibhuti Dhimar",
    role: "Founding Product & Research Associate",
    bio: "UK-based market research specialist leading customer discovery and competitive intelligence, with a proven pipeline of enterprise pilot prospects across the Midlands and London.",
  },
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
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">About Us</h1>
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
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Founding Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Founded by AI engineers with deep experience in Generative AI, multi-agent systems, and enterprise workflow automation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.initials} className="bg-card-gradient rounded-2xl border border-border p-6 text-center glow-primary">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-primary">{member.initials}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
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
