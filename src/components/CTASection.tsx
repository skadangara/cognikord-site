import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-hero relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>
      <div className="container relative z-10 text-center max-w-2xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Ready to transform your operational workflows?
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          See how CogniKord AI can streamline your supply chain exception management.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg" className="text-base px-8 py-6">
            Book a Demo <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
          <Button variant="heroOutline" size="lg" className="text-base px-8 py-6">
            <MessageCircle className="mr-1 h-4 w-4" /> Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
