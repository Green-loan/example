
import { Home, Users, Briefcase, MessageSquare, Bell, User, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

interface TopNavProps {
  className?: string;
}

export const TopNav = ({ className }: TopNavProps) => {
  return (
    <div className={cn("flex items-center justify-between w-full py-2 px-4 bg-white border-b shadow-sm", className)}>
      <div className="flex items-center space-x-2 flex-1">
        <img 
          src="/lovable-uploads/b7b6502b-52e0-4dd4-8d6c-5b22ab249809.png" 
          alt="All Things Advertising" 
          className="h-8"
        />
        <div className="relative max-w-md w-full hidden sm:block">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <Input 
            type="text" 
            placeholder="Search" 
            className="pl-10 bg-[#EEF3F8] text-sm border-none focus-visible:ring-[#7C42FF]" 
          />
        </div>
      </div>
      
      <div className="flex items-center justify-end space-x-1 sm:space-x-2">
        <NavItem icon={<Home className="h-5 w-5" />} label="Home" active />
        <NavItem icon={<Users className="h-5 w-5" />} label="My Network" />
        <NavItem icon={<Briefcase className="h-5 w-5" />} label="Jobs" />
        <NavItem icon={<MessageSquare className="h-5 w-5" />} label="Messaging" />
        <NavItem icon={<Bell className="h-5 w-5" />} label="Notifications" count={3} />
        <NavItem icon={<User className="h-5 w-5" />} label="Me" />
        <NavItem icon={<Bot className="h-5 w-5" />} label="AI Assistant" purple />
      </div>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  count?: number;
  purple?: boolean;
}

const NavItem = ({ icon, label, active, count, purple }: NavItemProps) => {
  return (
    <div className="flex flex-col items-center px-1 py-1 cursor-pointer relative">
      {count && (
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
          {count}
        </div>
      )}
      <div className={cn(
        "p-1 rounded-md",
        active ? "text-[#7C42FF]" : "text-gray-600 hover:text-[#7C42FF]",
        purple && "text-[#7C42FF]"
      )}>
        {icon}
      </div>
      <span className={cn(
        "text-xs hidden md:block",
        active ? "text-[#7C42FF]" : "text-gray-600",
        purple && "text-[#7C42FF]"
      )}>
        {label}
      </span>
    </div>
  );
};

