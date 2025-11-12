import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">PT</span>
            </div>
            <span className="text-xl font-bold text-foreground">PUBBS Transit</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("resources")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Resources
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("resources")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Resources
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Contact Us
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
