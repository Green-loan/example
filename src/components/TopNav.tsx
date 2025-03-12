
import { Bell, Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface TopNavProps {
  className?: string;
}

export const TopNav = ({ className }: TopNavProps) => {
  return (
    <div className={cn("flex items-center justify-between w-full py-4 px-6 bg-[#1A0B3E]", className)}>
      <div className="flex items-center">
        <img 
          src="/lovable-uploads/b7b6502b-52e0-4dd4-8d6c-5b22ab249809.png" 
          alt="All Things Advertising" 
          className="h-10"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-[#2C1165] transition-colors">
          <Bot className="h-5 w-5 text-white" />
        </button>
        <button className="p-2 rounded-full hover:bg-[#2C1165] transition-colors">
          <Bell className="h-5 w-5 text-white" />
        </button>
        <button className="p-2 rounded-full hover:bg-[#2C1165] transition-colors">
          <User className="h-5 w-5 text-white" />
        </button>
      </div>
    </div>
  );
};
