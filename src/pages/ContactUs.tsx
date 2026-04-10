import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Building2, Send, Briefcase, HeadsetIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:vdhimar@cognikord.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      toast({
        title: "Opening your email client",
        description: "Please send the pre-filled email to complete your submission.",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="container max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-6">
            <Mail className="h-4 w-4" />
            Get in Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Request a <span className="text-primary">Demo</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            See how CogniKord AI can transform your enterprise operations. Fill out the form and our team will reach out.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="pb-24 px-4">
        <div className="container max-w-xl">
          {/* Direct Contact Cards */}
          <div className="flex flex-col gap-4 mb-8">
            <div className="rounded-xl border border-border bg-card p-5 flex items-center gap-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm font-semibold text-foreground">Sales Enquiries:</p>
              <a href="mailto:vdhimar@cognikord.com" className="text-sm text-primary hover:underline whitespace-nowrap">
                vdhimar@cognikord.com
              </a>
            </div>
            <div className="rounded-xl border border-border bg-card p-5 flex items-center gap-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <HeadsetIcon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm font-semibold text-foreground">Customer Support:</p>
              <a href="mailto:skadangara@cognikord.com" className="text-sm text-primary hover:underline whitespace-nowrap">
                skadangara@cognikord.com
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 md:p-10 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={100}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  maxLength={255}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your company name"
                    className="pl-10"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    maxLength={200}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your use case or questions..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={1000}
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Request a Demo
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
