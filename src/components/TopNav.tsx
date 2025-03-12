
import { Home, Megaphone, MessageSquare, Bell, Search, Bot, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface TopNavProps {
  className?: string;
}

export const TopNav = ({ className }: TopNavProps) => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className={cn("flex items-center justify-between w-full py-2 px-4 bg-white border-b shadow-sm", className)}>
      <div className="flex items-center space-x-2 flex-1">
        <img 
          src="/lovable-uploads/abad0dae-c641-4c7d-ba2e-dfa5449c5e28.png" 
          alt="All Things Advertising" 
          className="h-14"
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
        <NavItem icon={<Megaphone className="h-5 w-5" />} label="Ads" />
        <NavItem icon={<MessageSquare className="h-5 w-5" />} label="Messaging" />
        <NavItem icon={<Bell className="h-5 w-5" />} label="Notifications" count={3} />
        <NavItem 
          icon={
            <div className="h-7 w-7 rounded-full overflow-hidden">
              <img 
                src="/lovable-uploads/b7b6502b-52e0-4dd4-8d6c-5b22ab249809.png"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
          } 
          hideLabel={true}
        />
      </div>

      {/* Floating AI Assistant Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-[#7C42FF] hover:bg-[#6a35e0] text-white rounded-full p-3 shadow-lg flex items-center justify-center"
        >
          <Bot className="h-6 w-6" />
        </button>
      </div>

      {/* Chat Popup */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-lg shadow-xl z-50 overflow-hidden flex flex-col border border-gray-200">
          <div className="bg-gradient-to-r from-[#7C42FF] to-[#ff6e8a] px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-white" />
              <h3 className="text-white font-medium">AI Assistant</h3>
            </div>
            <button 
              onClick={() => setIsChatOpen(false)}
              className="text-white hover:bg-white/20 rounded-full p-1"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div className="p-4 h-80 overflow-y-auto bg-gray-50 flex flex-col gap-3">
            <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm self-start max-w-[80%]">
              <p className="text-sm">Hi there! How can I help you with your advertising today?</p>
            </div>
          </div>
          
          <div className="border-t p-3 flex gap-2">
            <Input 
              placeholder="Type your message..." 
              className="text-sm" 
            />
            <button className="bg-[#7C42FF] text-white px-3 py-1 rounded hover:bg-[#6a35e0]">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label?: string;
  active?: boolean;
  count?: number;
  purple?: boolean;
  hideLabel?: boolean;
}

const NavItem = ({ icon, label, active, count, purple, hideLabel }: NavItemProps) => {
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
      {!hideLabel && label && (
        <span className={cn(
          "text-xs hidden md:block",
          active ? "text-[#7C42FF]" : "text-gray-600",
          purple && "text-[#7C42FF]"
        )}>
          {label}
        </span>
      )}
    </div>
  );
};
