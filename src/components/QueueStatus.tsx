import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, Clock } from "lucide-react";

interface QueueStatusProps {
  templeName: string;
  queuePosition: number;
  totalInQueue: number;
  estimatedWaitTime: string;
  progress: number;
}

const QueueStatus = ({
  templeName,
  queuePosition,
  totalInQueue,
  estimatedWaitTime,
  progress,
}: QueueStatusProps) => {
  return (
    <div className="space-y-4 p-6 bg-secondary/50 rounded-lg border border-border">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">{templeName}</h4>
        <Badge variant="outline">Active</Badge>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Your Position</span>
          <span className="font-bold text-primary text-lg">#{queuePosition}</span>
        </div>
        
        <Progress value={progress} className="h-2" />

        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Total in Queue</p>
              <p className="font-semibold">{totalInQueue}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Est. Wait Time</p>
              <p className="font-semibold">{estimatedWaitTime}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueueStatus;
