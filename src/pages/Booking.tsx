import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Users, Clock, CheckCircle2 } from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";

const temples = [
  { id: "somnath", name: "Somnath Temple", location: "Veraval" },
  { id: "dwarka", name: "Dwarkadhish Temple", location: "Dwarka" },
  { id: "ambaji", name: "Ambaji Temple", location: "Banaskantha" },
  { id: "pavagadh", name: "Kalika Mata Temple", location: "Pavagadh" },
];

const timeSlots = [
  "6:00 AM - 8:00 AM",
  "8:00 AM - 10:00 AM",
  "10:00 AM - 12:00 PM",
  "12:00 PM - 2:00 PM",
  "2:00 PM - 4:00 PM",
  "4:00 PM - 6:00 PM",
  "6:00 PM - 8:00 PM",
];

const Booking = () => {
  const [date, setDate] = useState<Date>();
  const [selectedTemple, setSelectedTemple] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [devoteeCount, setDevoteeCount] = useState("1");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedTemple || !date || !selectedSlot || !name || !email || !phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success("Booking Confirmed!", {
      description: "You will receive a confirmation email shortly.",
      icon: <CheckCircle2 className="text-green-500" />,
    });

    // Reset form
    setDate(undefined);
    setSelectedTemple("");
    setSelectedSlot("");
    setDevoteeCount("1");
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Book Your Darshan Slot</h1>
            <p className="text-muted-foreground">
              Select your preferred temple, date, and time for a hassle-free pilgrimage experience
            </p>
          </div>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Booking Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Temple Selection */}
                <div className="space-y-2">
                  <Label htmlFor="temple">Select Temple *</Label>
                  <Select value={selectedTemple} onValueChange={setSelectedTemple}>
                    <SelectTrigger id="temple">
                      <SelectValue placeholder="Choose a temple" />
                    </SelectTrigger>
                    <SelectContent>
                      {temples.map((temple) => (
                        <SelectItem key={temple.id} value={temple.id}>
                          {temple.name} - {temple.location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Date Selection */}
                <div className="space-y-2">
                  <Label>Select Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date()}
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Time Slot Selection */}
                <div className="space-y-2">
                  <Label htmlFor="slot">Select Time Slot *</Label>
                  <Select value={selectedSlot} onValueChange={setSelectedSlot}>
                    <SelectTrigger id="slot">
                      <SelectValue placeholder="Choose a time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {slot}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Number of Devotees */}
                <div className="space-y-2">
                  <Label htmlFor="devotees">Number of Devotees *</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="devotees"
                      type="number"
                      min="1"
                      max="10"
                      value={devoteeCount}
                      onChange={(e) => setDevoteeCount(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">Maximum 10 devotees per booking</p>
                </div>

                {/* Personal Details */}
                <div className="space-y-4 pt-4 border-t border-border">
                  <h3 className="font-semibold">Contact Information</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                {/* Summary */}
                {selectedTemple && date && selectedSlot && (
                  <div className="bg-secondary/50 p-4 rounded-lg space-y-2">
                    <h4 className="font-semibold">Booking Summary</h4>
                    <div className="text-sm space-y-1 text-muted-foreground">
                      <p><span className="font-medium text-foreground">Temple:</span> {temples.find(t => t.id === selectedTemple)?.name}</p>
                      <p><span className="font-medium text-foreground">Date:</span> {format(date, "PPP")}</p>
                      <p><span className="font-medium text-foreground">Time:</span> {selectedSlot}</p>
                      <p><span className="font-medium text-foreground">Devotees:</span> {devoteeCount}</p>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <Button type="submit" size="lg" className="w-full">
                  Confirm Booking
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Information Card */}
          <Card className="mt-8 shadow-soft">
            <CardHeader>
              <CardTitle>Important Information</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Please arrive 15 minutes before your scheduled time slot</li>
                <li>• Carry a valid photo ID for verification</li>
                <li>• Maintain social distancing and follow temple guidelines</li>
                <li>• Photography may be restricted in certain areas</li>
                <li>• Cancellations must be made at least 24 hours in advance</li>
                <li>• You will receive a confirmation email and SMS</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;
