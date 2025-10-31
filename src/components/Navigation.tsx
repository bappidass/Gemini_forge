import { useState } from "react";
import { Menu, X  } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", isRoute: true },
    { name: "Services", href: "/services", isRoute: true },
    { name: "Process", href: "#process", isRoute: false },
    { name: "About", href: "#about", isRoute: false },
    { name: "Careers", href: "/careers", isRoute: false },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="GeminiForge" className="h-10 w-10 border-[1px] rounded-full border-white" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => 
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ) : (
                  <Link to={link.href}
                  key={link.name}
            
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              )
            )}
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-foreground/80 hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                    <Link to={link.href}
                  key={link.name}
                    className="text-foreground/80 hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                   </Link>
                )
              )}
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
