import { Clock, Bell, Map, Heart } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Plan Your Visit",
    description: "Get real-time crowd predictions and choose the best time for a peaceful darshan experience.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Receive timely alerts about queue status, weather conditions, and temple events.",
  },
  {
    icon: Map,
    title: "Easy Navigation",
    description: "Access digital maps, parking information, and directions to make your journey smooth.",
  },
  {
    icon: Heart,
    title: "Spiritual Experience",
    description: "Focus on your devotion while we handle the logistics and safety aspects.",
  },
];

const ForDevotees = () => {
  return (
    <section id="devotees" className="py-24 bg-gradient-spiritual">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                For Devotees
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Experience a seamless and stress-free pilgrimage with technology that works for you. 
                Tirth Sarthi helps you plan, navigate, and enjoy your spiritual journey with peace of mind.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex gap-4 items-start p-4 rounded-xl hover:bg-card/50 transition-smooth"
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-warm flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="bg-card rounded-2xl p-8 shadow-glow border border-border">
                <div className="space-y-6">
                  <div className="bg-gradient-spiritual rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="font-semibold">Live Status</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Current Wait Time</span>
                        <span className="font-bold text-primary">15 mins</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Crowd Level</span>
                        <span className="font-bold text-green-600">Low</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Best Time Today</span>
                        <span className="font-bold">6:00 AM - 8:00 AM</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-spiritual rounded-xl p-4 text-center">
                      <p className="text-2xl font-bold text-primary mb-1">500+</p>
                      <p className="text-xs text-muted-foreground">Devotees Helped Daily</p>
                    </div>
                    <div className="bg-gradient-spiritual rounded-xl p-4 text-center">
                      <p className="text-2xl font-bold text-primary mb-1">95%</p>
                      <p className="text-xs text-muted-foreground">Satisfaction Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForDevotees;
