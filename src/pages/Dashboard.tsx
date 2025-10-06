import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DashboardCard from "@/components/DashboardCard";
import CrowdChart from "@/components/CrowdChart";
import QueueStatus from "@/components/QueueStatus";
import EmergencyAlert from "@/components/EmergencyAlert";
import { Brain, Users, AlertCircle, Car, Activity, TrendingUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const mockCrowdData = {
  somnath: [
    { time: "8 AM", crowd: 45 },
    { time: "10 AM", crowd: 75 },
    { time: "12 PM", crowd: 85 },
    { time: "2 PM", crowd: 65 },
    { time: "4 PM", crowd: 55 },
    { time: "6 PM", crowd: 70 },
    { time: "8 PM", crowd: 40 },
  ],
  dwarka: [
    { time: "8 AM", crowd: 35 },
    { time: "10 AM", crowd: 50 },
    { time: "12 PM", crowd: 60 },
    { time: "2 PM", crowd: 45 },
    { time: "4 PM", crowd: 40 },
    { time: "6 PM", crowd: 55 },
    { time: "8 PM", crowd: 30 },
  ],
  ambaji: [
    { time: "8 AM", crowd: 60 },
    { time: "10 AM", crowd: 85 },
    { time: "12 PM", crowd: 95 },
    { time: "2 PM", crowd: 90 },
    { time: "4 PM", crowd: 80 },
    { time: "6 PM", crowd: 85 },
    { time: "8 PM", crowd: 65 },
  ],
  pavagadh: [
    { time: "8 AM", crowd: 50 },
    { time: "10 AM", crowd: 70 },
    { time: "12 PM", crowd: 80 },
    { time: "2 PM", crowd: 75 },
    { time: "4 PM", crowd: 60 },
    { time: "6 PM", crowd: 65 },
    { time: "8 PM", crowd: 45 },
  ],
};

const trafficData = [
  { location: "Somnath Main Road", status: "smooth", delay: "No delay" },
  { location: "Dwarka City Center", status: "moderate", delay: "5-10 mins" },
  { location: "Ambaji Hill Route", status: "heavy", delay: "20-30 mins" },
  { location: "Pavagadh Ropeway", status: "smooth", delay: "No delay" },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Temple Management Dashboard</h1>
            <p className="text-muted-foreground">Real-time insights and analytics across all temples</p>
          </div>

          {/* Emergency Alerts */}
          <div className="space-y-4">
            <EmergencyAlert
              title="High Crowd Alert - Ambaji Temple"
              message="Expected crowd density above 90% between 12 PM - 4 PM today. Consider visiting during early morning hours for a peaceful darshan."
              type="warning"
            />
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Active Devotees", value: "2,847", icon: Users, trend: "+12%" },
              { label: "Avg Wait Time", value: "28 mins", icon: Activity, trend: "-15%" },
              { label: "Bookings Today", value: "534", icon: TrendingUp, trend: "+8%" },
              { label: "System Health", value: "98%", icon: Brain, trend: "+2%" },
            ].map((stat, index) => (
              <div key={index} className="bg-card p-4 rounded-xl border border-border shadow-soft">
                <div className="flex items-center justify-between mb-2">
                  <stat.icon className="w-5 h-5 text-primary" />
                  <Badge variant="secondary" className="text-xs">{stat.trend}</Badge>
                </div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Main Dashboard Tabs */}
          <Tabs defaultValue="crowd" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 lg:w-auto">
              <TabsTrigger value="crowd" className="gap-2">
                <Brain className="w-4 h-4" />
                <span className="hidden sm:inline">Crowd Prediction</span>
              </TabsTrigger>
              <TabsTrigger value="queue" className="gap-2">
                <Users className="w-4 h-4" />
                <span className="hidden sm:inline">Queue Status</span>
              </TabsTrigger>
              <TabsTrigger value="emergency" className="gap-2">
                <AlertCircle className="w-4 h-4" />
                <span className="hidden sm:inline">Emergency</span>
              </TabsTrigger>
              <TabsTrigger value="traffic" className="gap-2">
                <Car className="w-4 h-4" />
                <span className="hidden sm:inline">Traffic</span>
              </TabsTrigger>
            </TabsList>

            {/* Crowd Prediction Tab */}
            <TabsContent value="crowd" className="space-y-6">
              <DashboardCard title="AI-Powered Crowd Prediction" icon={Brain}>
                <Tabs defaultValue="somnath">
                  <TabsList className="mb-4">
                    <TabsTrigger value="somnath">Somnath</TabsTrigger>
                    <TabsTrigger value="dwarka">Dwarka</TabsTrigger>
                    <TabsTrigger value="ambaji">Ambaji</TabsTrigger>
                    <TabsTrigger value="pavagadh">Pavagadh</TabsTrigger>
                  </TabsList>
                  {Object.entries(mockCrowdData).map(([temple, data]) => (
                    <TabsContent key={temple} value={temple}>
                      <CrowdChart data={data} />
                      <p className="text-sm text-muted-foreground mt-4">
                        Real-time crowd density forecast for the next 12 hours. Green indicates low crowd, yellow moderate, and red high density.
                      </p>
                    </TabsContent>
                  ))}
                </Tabs>
              </DashboardCard>
            </TabsContent>

            {/* Queue Status Tab */}
            <TabsContent value="queue" className="space-y-6">
              <DashboardCard title="Live Queue Status" icon={Users}>
                <div className="space-y-4">
                  <QueueStatus
                    templeName="Somnath Temple"
                    queuePosition={45}
                    totalInQueue={156}
                    estimatedWaitTime="32 mins"
                    progress={71}
                  />
                  <QueueStatus
                    templeName="Dwarka Temple"
                    queuePosition={12}
                    totalInQueue={78}
                    estimatedWaitTime="18 mins"
                    progress={85}
                  />
                  <QueueStatus
                    templeName="Ambaji Temple"
                    queuePosition={89}
                    totalInQueue={234}
                    estimatedWaitTime="67 mins"
                    progress={62}
                  />
                </div>
              </DashboardCard>
            </TabsContent>

            {/* Emergency Tab */}
            <TabsContent value="emergency" className="space-y-6">
              <DashboardCard title="Emergency Management Center" icon={AlertCircle}>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                        <h4 className="font-semibold text-green-900 dark:text-green-100">System Status</h4>
                      </div>
                      <p className="text-sm text-green-700 dark:text-green-300">All systems operational</p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full" />
                        <h4 className="font-semibold text-blue-900 dark:text-blue-100">Emergency Contacts</h4>
                      </div>
                      <p className="text-sm text-blue-700 dark:text-blue-300">24/7 helpline active</p>
                    </div>
                  </div>
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold mb-3">Recent Incidents</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">No incidents reported today</span>
                        <Badge variant="outline">All Clear</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </DashboardCard>
            </TabsContent>

            {/* Traffic Tab */}
            <TabsContent value="traffic" className="space-y-6">
              <DashboardCard title="Traffic Control & Monitoring" icon={Car}>
                <div className="space-y-4">
                  {trafficData.map((traffic, index) => {
                    const statusColors = {
                      smooth: "bg-green-500",
                      moderate: "bg-yellow-500",
                      heavy: "bg-red-500",
                    };
                    
                    return (
                      <div key={index} className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${statusColors[traffic.status as keyof typeof statusColors]}`} />
                          <div>
                            <p className="font-medium">{traffic.location}</p>
                            <p className="text-sm text-muted-foreground capitalize">{traffic.status} traffic</p>
                          </div>
                        </div>
                        <Badge variant="outline">{traffic.delay}</Badge>
                      </div>
                    );
                  })}
                </div>
              </DashboardCard>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
