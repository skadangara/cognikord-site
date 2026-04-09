import { Button } from "@/components/ui/button";
import CogniKordLogo from "@/components/CogniKordLogo";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <CogniKordLogo size={36} />
          <span className="text-xl font-bold text-foreground">CogniKord AI</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#problem" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Problem</a>
          <a href="#solution" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Solution</a>
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
          <Button variant="hero" size="sm">Request Demo</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
