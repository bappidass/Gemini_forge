import { Mail, Phone } from "lucide-react";

import logo from "@/assets/geminilogo.png";
import instaLogo from "@/assets/insta.png";
import faceLogo from "@/assets/facebook.png";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          <div className="flex items-center gap-2">
            <img src={logo} alt="GeminiForge" className="h-10  " />
          </div>

          <nav className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
          
            <a
              href="https://www.facebook.com/people/Gemini-Forge/61581442237533/?rdid=So8eHu9sjNodYbYS&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BLXZPpyaJ%2F"
              className="w-10 h-10 bg-blue- rounded-lg flex items-center justify-center transition-colors"
            >
              <img src={faceLogo} alt="" className="h-10 w-auto" />
            </a>

            <a
              href="https://www.instagram.com/geminiforge.in?igsh=dDVzejZxa3Bmd21s"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Instagram"
              className="inline-flex items-center p-2 rounded-full "
            >
              <img src={instaLogo} alt="" className="h-[34px] w-auto" />
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <a
                href="mailto:hello@geminiforge.com"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                geminiforge108gmail.com
              </a>
              <a
                href="tel:+919181323209"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 6026072045
              </a>
              <a
                href="tel:+919181323209"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 9957703382
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 GeminiForge. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
