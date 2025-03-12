
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  className?: string;
  iconColor?: string;
}

export const StatsCard = ({
  icon: Icon,
  title,
  value,
  className,
  iconColor = "#7C42FF"
}: StatsCardProps) => {
  return (
    <div 
      className={cn(
        "flex items-center space-x-4 rounded-xl bg-white p-4 shadow-sm",
        "transition-all duration-300 ease-out hover:scale-105 hover:shadow-md",
        "animate-fade-in",
        className
      )}
    >
      <div className="rounded-lg bg-white/80 p-3 transition-transform duration-300 hover:scale-110">
        <Icon className="h-5 w-5 transition-all duration-300" style={{ color: iconColor }} />
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-semibold animate-fade-in">{value}</p>
      </div>
    </div>
  );
};
