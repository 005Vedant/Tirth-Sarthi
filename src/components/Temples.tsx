import { MapPin, Calendar, Users2, Shield } from "lucide-react";
import { Button } from "./ui/button";

const temples = [
  {
    name: "Somnath",
    description: "The first among the twelve Jyotirlinga shrines of Shiva, located on the western coast of Gujarat.",
    highlights: ["AI Crowd Analysis", "Digital Queue Management", "24/7 Emergency Response"],
    color: "from-orange-500 to-red-600",
  },
  {
    name: "Dwarka",
    description: "One of the Char Dham pilgrimage sites, believed to be the ancient kingdom of Lord Krishna.",
    highlights: ["Smart Parking System", "Real-time Traffic Updates", "Online Darshan Booking"],
    color: "from-blue-600 to-indigo-700",
  },
  {
    name: "Ambaji",
    description: "One of the 51 Shakti Peethas, a revered pilgrimage destination in the Aravalli hills.",
    highlights: ["Crowd Density Alerts", "Multi-language Support", "Integrated Safety Measures"],
    color: "from-pink-500 to-rose-600",
  },
  {
    name: "Pavagadh",
    description: "A sacred hill temple complex, UNESCO World Heritage Site with historic significance.",
    highlights: ["Ropeway Integration", "Weather Updates", "Emergency Medical Support"],
    color: "from-green-600 to-emerald-700",
  },
];

const Temples = () => {
  return (
    <section id="temples" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Temple Modules
          </h2>
          <p className="text-lg text-muted-foreground">
            Customized solutions for each sacred destination
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {temples.map((temple, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-warm hover:shadow-glow transition-smooth border border-border animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-3 bg-gradient-to-r ${temple.color}`}></div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-heading font-bold text-gradient">
                    {temple.name}
                  </h3>
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {temple.description}
                </p>

                <div className="space-y-3 mb-6">
                  {temple.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-primary"></div>
                      <span className="text-sm font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-accent transition-smooth"
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Temples;
