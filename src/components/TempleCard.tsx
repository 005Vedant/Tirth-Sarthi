import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface TempleCardProps {
  id: string;
  name: string;
  location: string;
  image: string;
  crowdLevel: "low" | "medium" | "high";
  waitTime: string;
  availableSlots: number;
  timings: string;
}

const TempleCard = ({
  id,
  name,
  location,
  image,
  crowdLevel,
  waitTime,
  availableSlots,
  timings,
}: TempleCardProps) => {
  const crowdColors = {
    low: "bg-green-500",
    medium: "bg-yellow-500",
    high: "bg-red-500",
  };

  const crowdLabels = {
    low: "Low Crowd",
    medium: "Moderate Crowd",
    high: "Heavy Crowd",
  };

  return (
    <Card className="group overflow-hidden hover:shadow-glow transition-smooth border-border">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Crowd Badge */}
        <Badge
          className={`absolute top-4 right-4 ${crowdColors[crowdLevel]} text-white border-none`}
        >
          {crowdLabels[crowdLevel]}
        </Badge>

        {/* Temple Name Overlay */}
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-2xl font-bold mb-1">{name}</h3>
          <div className="flex items-center gap-1 text-sm">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </div>
      </div>

      <CardContent className="p-6 space-y-4">
        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-start gap-2">
            <Clock className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground">Wait Time</p>
              <p className="font-semibold">{waitTime}</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Users className="w-5 h-5 text-primary mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground">Available Slots</p>
              <p className="font-semibold">{availableSlots} Today</p>
            </div>
          </div>
        </div>

        {/* Timings */}
        <div className="pt-2 border-t border-border">
          <p className="text-sm text-muted-foreground mb-1">Temple Timings</p>
          <p className="font-medium">{timings}</p>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Button className="flex-1 gap-2" asChild>
            <Link to={`/temple/${id}`}>
              View Details
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link to="/booking">Book Now</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TempleCard;
