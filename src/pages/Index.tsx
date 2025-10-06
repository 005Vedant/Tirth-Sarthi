import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import TempleCard from "@/components/TempleCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Brain, Users, AlertCircle, Car, Target, Award, Zap } from "lucide-react";

import somnathImage from "@/assets/somnath.jpg";
import dwarkaImage from "@/assets/dwarka.jpg";
import ambajiImage from "@/assets/ambaji.jpg";
import pavagazhImage from "@/assets/pavagadh.jpg";

const temples = [
  {
    id: "somnath",
    name: "Somnath Temple",
    location: "Veraval, Gujarat",
    image: somnathImage,
    crowdLevel: "medium" as const,
    waitTime: "30-45 mins",
    availableSlots: 120,
    timings: "6:00 AM - 9:00 PM",
  },
  {
    id: "dwarka",
    name: "Dwarkadhish Temple",
    location: "Dwarka, Gujarat",
    image: dwarkaImage,
    crowdLevel: "low" as const,
    waitTime: "15-20 mins",
    availableSlots: 85,
    timings: "5:30 AM - 9:30 PM",
  },
  {
    id: "ambaji",
    name: "Ambaji Temple",
    location: "Banaskantha, Gujarat",
    image: ambajiImage,
    crowdLevel: "high" as const,
    waitTime: "60-75 mins",
    availableSlots: 45,
    timings: "6:00 AM - 10:00 PM",
  },
  {
    id: "pavagadh",
    name: "Kalika Mata Temple",
    location: "Pavagadh, Gujarat",
    image: pavagazhImage,
    crowdLevel: "medium" as const,
    waitTime: "40-50 mins",
    availableSlots: 95,
    timings: "7:00 AM - 8:00 PM",
  },
];

const features = [
  {
    icon: Brain,
    title: "AI Crowd Prediction",
    description: "Real-time crowd density forecasting using advanced AI algorithms to help you plan your visit at the best time.",
  },
  {
    icon: Users,
    title: "Smart Queue System",
    description: "Digital queue management with live position tracking and accurate waiting time estimates for a stress-free darshan.",
  },
  {
    icon: AlertCircle,
    title: "Emergency Management",
    description: "Instant alert system for emergencies, crowd control, and safety notifications to ensure pilgrim security.",
  },
  {
    icon: Car,
    title: "Traffic Control",
    description: "Live traffic monitoring and route optimization near temple premises for smooth and efficient travel planning.",
  },
];

const stats = [
  { icon: Target, label: "Temples Managed", value: "4+" },
  { icon: Users, label: "Daily Pilgrims", value: "10K+" },
  { icon: Award, label: "Satisfaction Rate", value: "98%" },
  { icon: Zap, label: "Avg. Wait Reduction", value: "45%" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <Hero />

      {/* Features Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for Modern Pilgrimage
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the perfect blend of tradition and technology with our comprehensive temple management system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border border-border shadow-soft hover:shadow-glow transition-smooth"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Temples Section */}
      <section id="temples" className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sacred Temples of Gujarat
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Book darshan slots and manage your visit to these divine destinations with ease and convenience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {temples.map((temple) => (
            <TempleCard key={temple.id} {...temple} />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card p-8 md:p-12 rounded-2xl border border-border shadow-soft">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Tirth Sarthi</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Tirth Sarthi is an innovative temple management system developed as part of the Smart India Hackathon 2025. 
                Our mission is to enhance the pilgrimage experience by leveraging cutting-edge technology while preserving 
                the sanctity and tradition of our sacred temples.
              </p>
              <p>
                We focus on four major temples in Gujarat - Somnath, Dwarka, Ambaji, and Pavagadh - providing devotees 
                with real-time information, smart booking systems, and seamless management tools that make their spiritual 
                journey more comfortable and fulfilling.
              </p>
              <p>
                Through AI-powered crowd prediction, intelligent queue management, emergency response systems, and traffic 
                optimization, we're bringing modern solutions to age-old challenges, ensuring that every pilgrim can focus 
                on their devotion without worrying about logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground">
              Have questions or suggestions? We'd love to hear from you.
            </p>
          </div>

          <form className="bg-card p-8 rounded-2xl border border-border shadow-soft space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <Input placeholder="How can we help?" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <Textarea placeholder="Your message..." rows={5} />
            </div>
            <Button size="lg" className="w-full">Send Message</Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
