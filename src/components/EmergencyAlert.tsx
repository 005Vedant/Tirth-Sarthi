import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface EmergencyAlertProps {
  title: string;
  message: string;
  type?: "warning" | "error" | "info";
}

const EmergencyAlert = ({ title, message, type = "warning" }: EmergencyAlertProps) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const bgColors = {
    warning: "bg-yellow-50 border-yellow-300 dark:bg-yellow-950/30",
    error: "bg-red-50 border-red-300 dark:bg-red-950/30",
    info: "bg-blue-50 border-blue-300 dark:bg-blue-950/30",
  };

  return (
    <Alert className={`${bgColors[type]} animate-slide-up relative`}>
      <AlertCircle className="h-5 w-5" />
      <AlertTitle className="font-semibold">{title}</AlertTitle>
      <AlertDescription className="mt-2">{message}</AlertDescription>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 h-6 w-6"
        onClick={() => setIsVisible(false)}
      >
        <X className="h-4 w-4" />
      </Button>
    </Alert>
  );
};

export default EmergencyAlert;
