import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-temple.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Mandala Pattern Overlay */}
      <div className="absolute inset-0 mandala-pattern opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-card/10 backdrop-blur-sm border border-primary-glow/30 rounded-full px-6 py-2 text-primary-foreground shadow-glow">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Smart India Hackathon 2025</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground leading-tight">
            Smart Technology for a
            <span className="block mt-2 text-primary-glow">Seamless Pilgrimage Experience</span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            AI-powered crowd management, smart queues, and seamless darshan at Gujarat's most sacred temples
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={() => scrollToSection("features")}
              className="text-base"
            >
              Explore Features
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("temples")}
              className="bg-card/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-foreground text-base"
            >
              View Temples
            </Button>
          </div>

          {/* Temple Names */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 max-w-3xl mx-auto">
            {["Somnath", "Dwarka", "Ambaji", "Pavagadh"].map((temple) => (
              <div 
                key={temple}
                className="bg-card/10 backdrop-blur-sm border border-primary-glow/20 rounded-lg p-4 hover:bg-card/20 transition-smooth hover:scale-105 shadow-warm"
              >
                <p className="text-primary-foreground font-heading font-semibold">{temple}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full p-1">
          <div className="w-1.5 h-3 bg-primary-glow rounded-full mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
