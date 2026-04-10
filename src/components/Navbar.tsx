import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import CogniKordLogo from "@/components/CogniKordLogo";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <CogniKordLogo size={36} />
          <span className="text-xl font-bold text-foreground">CogniKord AI</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
          <Link to="/product" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Product</Link>
          <Link to="/use-cases" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Use Cases</Link>
          <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link>
          <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
