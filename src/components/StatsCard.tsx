
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  className?: string;
}

export const StatsCard = ({
  icon: Icon,
  title,
  value,
  className,
}: StatsCardProps) => {
  return (
    <div className={cn("flex items-center space-x-4 rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md", className)}>
      <div className="rounded-lg bg-[#f0ebff] p-3">
        <Icon className="h-5 w-5 text-[#7C42FF]" />
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-semibold">{value}</p>
      </div>
    </div>
  );
};
