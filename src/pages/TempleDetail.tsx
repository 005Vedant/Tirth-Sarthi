import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Calendar, Info, ArrowRight } from "lucide-react";
import CrowdChart from "@/components/CrowdChart";
import DashboardCard from "@/components/DashboardCard";

import somnathImage from "@/assets/somnath.jpg";
import dwarkaImage from "@/assets/dwarka.jpg";
import ambajiImage from "@/assets/ambaji.jpg";
import pavagadhImage from "@/assets/pavagadh.jpg";

const templeData: Record<string, any> = {
  somnath: {
    name: "Somnath Temple",
    location: "Veraval, Saurashtra, Gujarat",
    image: somnathImage,
    description: "One of the twelve Jyotirlinga shrines of Lord Shiva, Somnath Temple stands as a testament to India's spiritual heritage. Known as the 'Eternal Shrine', it has been rebuilt several times throughout history.",
    timings: "6:00 AM - 9:00 PM",
    crowdLevel: "medium",
    waitTime: "30-45 mins",
    availableSlots: 120,
    crowdData: [
      { time: "8 AM", crowd: 45 },
      { time: "10 AM", crowd: 75 },
      { time: "12 PM", crowd: 85 },
      { time: "2 PM", crowd: 65 },
      { time: "4 PM", crowd: 55 },
      { time: "6 PM", crowd: 70 },
      { time: "8 PM", crowd: 40 },
    ],
    facilities: ["Parking Available", "Wheelchair Access", "Cloakroom", "Prasad Counter"],
    specialDays: ["Mahashivratri", "Shravan Month", "Kartik Purnima"],
  },
  dwarka: {
    name: "Dwarkadhish Temple",
    location: "Dwarka, Gujarat",
    image: dwarkaImage,
    description: "Dedicated to Lord Krishna, Dwarkadhish Temple is one of the four sacred Char Dham pilgrimage sites. The five-storied main shrine is architecturally supported by 72 pillars.",
    timings: "5:30 AM - 9:30 PM",
    crowdLevel: "low",
    waitTime: "15-20 mins",
    availableSlots: 85,
    crowdData: [
      { time: "8 AM", crowd: 35 },
      { time: "10 AM", crowd: 50 },
      { time: "12 PM", crowd: 60 },
      { time: "2 PM", crowd: 45 },
      { time: "4 PM", crowd: 40 },
      { time: "6 PM", crowd: 55 },
      { time: "8 PM", crowd: 30 },
    ],
    facilities: ["Parking Available", "Wheelchair Access", "Prasad Counter", "Accommodation"],
    specialDays: ["Janmashtami", "Holi", "Diwali"],
  },
  ambaji: {
    name: "Ambaji Temple",
    location: "Banaskantha, Gujarat",
    image: ambajiImage,
    description: "One of the 51 Shakti Peethas, Ambaji Temple is a major pilgrimage site dedicated to Goddess Amba. The temple is known for its unique feature of having no idol, only a Yantra.",
    timings: "6:00 AM - 10:00 PM",
    crowdLevel: "high",
    waitTime: "60-75 mins",
    availableSlots: 45,
    crowdData: [
      { time: "8 AM", crowd: 60 },
      { time: "10 AM", crowd: 85 },
      { time: "12 PM", crowd: 95 },
      { time: "2 PM", crowd: 90 },
      { time: "4 PM", crowd: 80 },
      { time: "6 PM", crowd: 85 },
      { time: "8 PM", crowd: 65 },
    ],
    facilities: ["Parking Available", "Prasad Counter", "Accommodation", "Bhandara"],
    specialDays: ["Navratri", "Chaitra & Ashwin Purnima", "Ambaji Fair"],
  },
  pavagadh: {
    name: "Kalika Mata Temple",
    location: "Pavagadh, Gujarat",
    image: pavagadhImage,
    description: "Situated atop Pavagadh Hill, this ancient temple is dedicated to Goddess Kalika. The temple is part of the Champaner-Pavagadh Archaeological Park, a UNESCO World Heritage Site.",
    timings: "7:00 AM - 8:00 PM",
    crowdLevel: "medium",
    waitTime: "40-50 mins",
    availableSlots: 95,
    crowdData: [
      { time: "8 AM", crowd: 50 },
      { time: "10 AM", crowd: 70 },
      { time: "12 PM", crowd: 80 },
      { time: "2 PM", crowd: 75 },
      { time: "4 PM", crowd: 60 },
      { time: "6 PM", crowd: 65 },
      { time: "8 PM", crowd: 45 },
    ],
    facilities: ["Ropeway Access", "Parking Available", "Prasad Counter", "View Points"],
    specialDays: ["Navratri", "Chaitra Navratri", "Mahashivratri"],
  },
};

const TempleDetail = () => {
  const { templeId } = useParams();
  const temple = templeData[templeId || ""];

  if (!temple) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Temple Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const crowdColors = {
    low: "bg-green-500",
    medium: "bg-yellow-500",
    high: "bg-red-500",
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Hero Section */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-8 shadow-soft">
          <img
            src={temple.image}
            alt={temple.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <Badge className={`${crowdColors[temple.crowdLevel]} text-white border-none mb-4`}>
              {temple.crowdLevel === "low" ? "Low Crowd" : temple.crowdLevel === "medium" ? "Moderate Crowd" : "Heavy Crowd"}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{temple.name}</h1>
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">{temple.location}</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card className="shadow-soft">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Info className="w-6 h-6 text-primary" />
                  About
                </h2>
                <p className="text-muted-foreground leading-relaxed">{temple.description}</p>
              </CardContent>
            </Card>

            {/* Crowd Prediction */}
            <DashboardCard title="Today's Crowd Prediction" icon={Users}>
              <CrowdChart data={temple.crowdData} />
              <p className="text-sm text-muted-foreground mt-4">
                AI-powered prediction showing expected crowd levels throughout the day. Plan your visit during green zones for a peaceful darshan.
              </p>
            </DashboardCard>

            {/* Facilities & Special Days */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4">Facilities Available</h3>
                  <ul className="space-y-2">
                    {temple.facilities.map((facility: string, index: number) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        {facility}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4">Special Days</h3>
                  <ul className="space-y-2">
                    {temple.specialDays.map((day: string, index: number) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-primary" />
                        {day}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <Card className="shadow-soft sticky top-24">
              <CardContent className="pt-6 space-y-4">
                <h3 className="font-semibold text-lg mb-4">Quick Information</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Temple Timings</p>
                      <p className="font-semibold">{temple.timings}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Current Wait Time</p>
                      <p className="font-semibold">{temple.waitTime}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Available Slots Today</p>
                      <p className="font-semibold">{temple.availableSlots} slots</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <Button className="w-full gap-2" asChild>
                    <Link to="/booking">
                      Book Darshan Slot
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="secondary" className="w-full" asChild>
                    <Link to="/dashboard">View Live Dashboard</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TempleDetail;
