import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface DashboardCardProps {
  title: string;
  icon: LucideIcon;
  children: ReactNode;
  className?: string;
}

const DashboardCard = ({ title, icon: Icon, children, className = "" }: DashboardCardProps) => {
  return (
    <Card className={`shadow-soft hover:shadow-glow transition-smooth ${className}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon className="w-5 h-5 text-primary" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default DashboardCard;
