import { Brain, Users, AlertCircle, Car, Ticket, Settings } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Crowd Prediction",
    description: "Leverages artificial intelligence to predict crowd density and suggest ideal visiting times for a peaceful darshan.",
  },
  {
    icon: Users,
    title: "Smart Queue System",
    description: "Digitally organizes devotees' entry to reduce physical congestion and minimize waiting time at temple premises.",
  },
  {
    icon: AlertCircle,
    title: "Emergency Management",
    description: "Real-time alerts, first aid assistance, and coordination tools ensuring safety during crowded events.",
  },
  {
    icon: Car,
    title: "Traffic Control Integration",
    description: "Connects with local traffic systems to streamline access routes and optimize parking management.",
  },
  {
    icon: Ticket,
    title: "Online Booking",
    description: "Easy ticket and slot booking for darshan, pooja, and temple entry - plan your visit from anywhere.",
  },
  {
    icon: Settings,
    title: "Temple-Specific Customization",
    description: "Dedicated modules for each temple while maintaining a unified, seamless user experience.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gradient-spiritual">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">
            Powerful Features
          </h2>
          <p className="text-lg text-muted-foreground">
            Technology that brings peace and order to your spiritual journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-warm hover:shadow-glow transition-smooth hover:scale-105 animate-scale-in border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 shadow-warm group-hover:shadow-glow transition-smooth">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
