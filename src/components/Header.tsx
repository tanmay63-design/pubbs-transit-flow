import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    }, 100);
  };

  const featurePages = [
    { name: "Network", path: "/features/network" },
    { name: "Frequency Settings", path: "/features/frequency-settings" },
    { name: "Scheduling", path: "/features/scheduling" },
    { name: "Crew Rostering", path: "/features/crew-rostering" },
    { name: "Control System", path: "/features/control-system" },
    { name: "Driver Console", path: "/features/driver-console" },
  ];

  const resourcePages = [
    { name: "Software", path: "/resources/software" },
    { name: "Research Project", path: "/resources/research-project" },
    { name: "Publication", path: "/resources/publication" },
    { name: "Case Study", path: "/resources/case-study" },
    { name: "Videos", path: "/resources/videos" },
    { name: "Driver Console", path: "/resources/driver-console" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">PT</span>
            </div>
            <span className="text-xl font-bold text-foreground">PUBBS Transit</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-colors">
              Home
            </button>
            <Link to="/software" className="text-foreground hover:text-primary transition-colors">
              Software
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                Features <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {featurePages.map((page) => (
                  <DropdownMenuItem key={page.path} asChild>
                    <Link to={page.path}>{page.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
                Resources <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {resourcePages.map((page) => (
                  <DropdownMenuItem key={page.path} asChild>
                    <Link to={page.path}>{page.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors">
              Contact Us
            </button>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-colors text-left">Home</button>
            <Link to="/software" className="text-foreground hover:text-primary transition-colors text-left" onClick={() => setIsMenuOpen(false)}>Software</Link>
            <div className="text-sm font-semibold text-muted-foreground">Features</div>
            {featurePages.map((page) => (
              <Link key={page.path} to={page.path} className="text-foreground hover:text-primary transition-colors text-left pl-4" onClick={() => setIsMenuOpen(false)}>{page.name}</Link>
            ))}
            <div className="text-sm font-semibold text-muted-foreground">Resources</div>
            {resourcePages.map((page) => (
              <Link key={page.path} to={page.path} className="text-foreground hover:text-primary transition-colors text-left pl-4" onClick={() => setIsMenuOpen(false)}>{page.name}</Link>
            ))}
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors text-left">Contact Us</button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
