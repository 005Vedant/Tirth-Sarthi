import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Users, AlertCircle, Car } from "lucide-react";
import heroImage from "@/assets/hero-temple.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Temple at sunrise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/90 backdrop-blur-sm rounded-full border border-border shadow-soft">
            <span className="w-2 h-2 bg-accent rounded-full animate-glow-pulse" />
            <span className="text-sm font-medium">Smart India Hackathon 2025</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Smart Temple Management for a{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Seamless Pilgrimage
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience divine journeys at Somnath, Dwarka, Ambaji, and Pavagadh with
            AI-powered crowd prediction, smart queues, and instant bookings.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="gap-2 shadow-soft">
              Book Darshan Now
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="secondary" size="lg" className="shadow-soft">
              View Dashboard
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            {[
              { icon: Brain, label: "AI Crowd Prediction" },
              { icon: Users, label: "Smart Queue System" },
              { icon: AlertCircle, label: "Emergency Alerts" },
              { icon: Car, label: "Traffic Management" },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card/90 backdrop-blur-sm p-4 rounded-xl border border-border shadow-soft hover:shadow-glow transition-smooth"
              >
                <feature.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">{feature.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-5" />
    </section>
  );
};

export default Hero;
