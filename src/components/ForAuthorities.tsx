import { BarChart3, Shield, Radio, Database } from "lucide-react";

const capabilities = [
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Comprehensive dashboards showing crowd patterns, peak hours, and visitor demographics.",
  },
  {
    icon: Shield,
    title: "Security Management",
    description: "Integrated emergency alerts, incident reporting, and coordination with security forces.",
  },
  {
    icon: Radio,
    title: "Communication Hub",
    description: "Centralized system for announcements, staff coordination, and visitor assistance.",
  },
  {
    icon: Database,
    title: "Data-Driven Insights",
    description: "Historical data analysis to optimize operations and improve visitor experience.",
  },
];

const ForAuthorities = () => {
  return (
    <section id="authorities" className="py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-scale-in">
              <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-8 shadow-glow border border-primary-glow/20">
                <h3 className="text-2xl font-heading font-bold mb-6 text-primary-foreground">
                  Management Dashboard
                </h3>
                <div className="space-y-6">
                  <div className="bg-card/10 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-primary-foreground/80">Daily Visitors</span>
                      <span className="text-lg font-bold text-primary-glow">12,450</span>
                    </div>
                    <div className="w-full bg-card/20 rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>

                  <div className="bg-card/10 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-primary-foreground/80">Queue Efficiency</span>
                      <span className="text-lg font-bold text-primary-glow">94%</span>
                    </div>
                    <div className="w-full bg-card/20 rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full" style={{ width: "94%" }}></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-card/10 rounded-lg p-3 text-center">
                      <p className="text-xl font-bold text-primary-glow">24/7</p>
                      <p className="text-xs text-primary-foreground/70">Monitoring</p>
                    </div>
                    <div className="bg-card/10 rounded-lg p-3 text-center">
                      <p className="text-xl font-bold text-primary-glow">4</p>
                      <p className="text-xs text-primary-foreground/70">Temples</p>
                    </div>
                    <div className="bg-card/10 rounded-lg p-3 text-center">
                      <p className="text-xl font-bold text-primary-glow">Zero</p>
                      <p className="text-xs text-primary-foreground/70">Incidents</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary-foreground">
                For Temple Authorities
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                Efficient tools and dashboards that make managing large crowds and emergencies seamless. 
                Make data-driven decisions to enhance safety and devotee satisfaction.
              </p>
              <div className="space-y-4">
                {capabilities.map((capability, index) => (
                  <div 
                    key={index} 
                    className="flex gap-4 items-start p-4 rounded-xl hover:bg-card/10 transition-smooth"
                  >
                    <div className="w-12 h-12 bg-primary-glow/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-primary-glow/30 flex-shrink-0">
                      <capability.icon className="w-6 h-6 text-primary-glow" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-1 text-primary-foreground">
                        {capability.title}
                      </h3>
                      <p className="text-primary-foreground/70 text-sm">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForAuthorities;
