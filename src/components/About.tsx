import { Award, Target, Users2, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Smart India Hackathon 2025</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              About Tirth Sarthi
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Tirth Sarthi is our innovative solution for the Smart India Hackathon 2025, 
              addressing the critical challenge of Temple & Pilgrimage Crowd Management 
              at four of Gujarat's most revered shrines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card rounded-2xl p-8 shadow-warm border border-border animate-scale-in">
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 shadow-warm">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To blend spirituality with technology, ensuring every devotee experiences 
                a safe, organized, and peaceful pilgrimage while helping temple authorities 
                manage crowds efficiently.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-warm border border-border animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 shadow-warm">
                <Lightbulb className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the standard for smart pilgrimage management across India, 
                creating a harmonious balance between devotion and modern technology 
                for millions of pilgrims.
              </p>
            </div>
          </div>

          <div className="bg-gradient-spiritual rounded-2xl p-8 md:p-12 animate-fade-in">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center shadow-warm flex-shrink-0">
                <Users2 className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold mb-2">The Challenge</h3>
                <p className="text-muted-foreground">
                  Gujarat's major temples - Somnath, Dwarka, Ambaji, and Pavagadh - attract millions 
                  of devotees annually. Managing such large crowds while ensuring safety, accessibility, 
                  and a peaceful spiritual experience is a complex challenge.
                </p>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <h4 className="font-heading font-semibold text-lg mb-4">Our Solution Includes:</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "AI-powered crowd prediction algorithms",
                  "Digital queue management system",
                  "Real-time emergency response coordination",
                  "Integrated traffic and parking solutions",
                  "Multi-language support for diverse devotees",
                  "Temple-specific customizable dashboards",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-primary"></div>
                    <span className="text-sm font-medium">{item}</span>
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

export default About;
