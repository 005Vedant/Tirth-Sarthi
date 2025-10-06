import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-warm">
                <span className="text-primary-foreground font-heading font-bold text-xl">ॐ</span>
              </div>
              <span className="text-xl font-heading font-bold text-primary-foreground">Tirth Sarthi</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Smart technology for seamless pilgrimage experiences. Bringing peace and order 
              to your spiritual journey through innovative crowd management solutions.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-primary-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {["Features", "Temples", "For Devotees", "For Authorities", "About"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-primary-foreground/70 hover:text-primary-glow transition-smooth"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-primary-foreground">Connect</h4>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-glow/10 hover:bg-primary-glow/20 rounded-lg flex items-center justify-center transition-smooth border border-primary-glow/20"
              >
                <Github className="w-5 h-5 text-primary-foreground" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-glow/10 hover:bg-primary-glow/20 rounded-lg flex items-center justify-center transition-smooth border border-primary-glow/20"
              >
                <Linkedin className="w-5 h-5 text-primary-foreground" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-glow/10 hover:bg-primary-glow/20 rounded-lg flex items-center justify-center transition-smooth border border-primary-glow/20"
              >
                <Mail className="w-5 h-5 text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            Made with <Heart className="w-4 h-4 text-primary-glow fill-primary-glow" /> for 
            <span className="font-semibold text-primary-foreground">Smart India Hackathon {currentYear}</span>
          </p>
          <p className="mt-2">© {currentYear} Tirth Sarthi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
