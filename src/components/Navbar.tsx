import { Button } from "@/components/ui/button";
import bannerLogo from "@/assets/banner-v2.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
              <path d="M20 6L8 14v12l12 8 12-8V14L20 6z" fill="hsl(152, 65%, 48%)" opacity="0.8"/>
              <path d="M20 6L8 14l12 8 12-8L20 6z" fill="hsl(195, 80%, 50%)"/>
              <path d="M8 14v12l12 8V22L8 14z" fill="hsl(152, 65%, 48%)"/>
            </svg>
            <span className="text-xl font-bold text-foreground">CogniKord AI</span>
          </div>
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
