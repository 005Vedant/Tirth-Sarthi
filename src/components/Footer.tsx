import { Sparkles, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Tirth Sarthi
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Smart temple management for a seamless pilgrimage experience across Gujarat's sacred destinations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-primary transition-smooth">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-muted-foreground hover:text-primary transition-smooth">
                  Book Darshan
                </Link>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-smooth">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Temples */}
          <div>
            <h3 className="font-semibold mb-4">Our Temples</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/temple/somnath" className="text-muted-foreground hover:text-primary transition-smooth">
                  Somnath Temple
                </Link>
              </li>
              <li>
                <Link to="/temple/dwarka" className="text-muted-foreground hover:text-primary transition-smooth">
                  Dwarka Temple
                </Link>
              </li>
              <li>
                <Link to="/temple/ambaji" className="text-muted-foreground hover:text-primary transition-smooth">
                  Ambaji Temple
                </Link>
              </li>
              <li>
                <Link to="/temple/pavagadh" className="text-muted-foreground hover:text-primary transition-smooth">
                  Pavagadh Temple
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                info@tirthsarthi.in
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                +91 1800-XXX-XXXX
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                Gujarat, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Tirth Sarthi - Smart India Hackathon 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
