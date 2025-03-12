
import { Home, Megaphone, MessageSquare, Bell, Search, Bot, X, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { useState, useRef, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Link, useLocation } from "react-router-dom";

interface TopNavProps {
  className?: string;
}

type Message = {
  content: string;
  role: 'user' | 'assistant';
};

export const TopNav = ({ className }: TopNavProps) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi there! How can I help you with advertising on AllThings ADs today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const location = useLocation();

  // Check if current route is home
  const isHome = location.pathname === '/';
  // Check if current route is dashboard
  const isDashboard = location.pathname === '/dashboard';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!inputMessage.trim()) return;
    
    const userMessage = { role: 'user' as const, content: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Generate a response based on the user's query
    setTimeout(() => {
      const response = generateResponse(inputMessage);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsLoading(false);
    }, 1000);
  };

  const generateResponse = (query: string): string => {
    // Simple response generation based on keywords
    const queryLower = query.toLowerCase();
    
    if (queryLower.includes('hello') || queryLower.includes('hi') || queryLower.includes('hey')) {
      return "Hello! I'm the AllThings ADs AI assistant. How can I help with your advertising needs today?";
    } else if (queryLower.includes('platform') || queryLower.includes('about')) {
      return "AllThings ADs is a comprehensive advertising platform that helps businesses connect with their target audience through various digital marketing channels.";
    } else if (queryLower.includes('price') || queryLower.includes('cost') || queryLower.includes('pricing')) {
      return "Our advertising packages are customized based on your business needs and target audience. We offer flexible pricing starting from $500 for small campaigns to enterprise solutions. Would you like a personalized quote?";
    } else if (queryLower.includes('digital') || queryLower.includes('social media')) {
      return "We offer a full range of digital advertising solutions including social media campaigns, search engine marketing, display ads, and programmatic advertising to maximize your reach and ROI.";
    } else if (queryLower.includes('analytics') || queryLower.includes('report') || queryLower.includes('performance')) {
      return "Our platform provides detailed analytics and reporting on all your campaigns. You can track impressions, clicks, conversions, and ROI in real-time through our intuitive dashboard.";
    } else if (queryLower.includes('audience') || queryLower.includes('target')) {
      return "Our advanced targeting capabilities allow you to reach your ideal customers based on demographics, interests, online behavior, geographic location, and more.";
    } else if (queryLower.includes('who are you') || queryLower.includes('what model') || queryLower.includes('ai model')) {
      return "I'm a simple rule-based AI assistant for AllThings ADs. I'm not using a complex model like GPT-4 or other LLMs - I'm just a demonstration of how a chatbot interface could work in this application.";
    } else {
      return "Thank you for your interest in AllThings ADs. We're here to help you grow your business through strategic advertising solutions. Our platform offers targeted campaigns across multiple channels to maximize your marketing budget. Is there something specific about our advertising services you'd like to know?";
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className={cn("flex items-center justify-between w-full py-2 px-4 bg-white border-b shadow-sm", className)}>
      <div className="flex items-center space-x-2 flex-1">
        <Link to="/">
          <img 
            src="/lovable-uploads/abad0dae-c641-4c7d-ba2e-dfa5449c5e28.png" 
            alt="All Things Advertising" 
            className="h-14"
          />
        </Link>
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
        <Link to="/">
          <NavItem icon={<Home className="h-5 w-5" />} label="Home" active={isHome} />
        </Link>
        <Link to="/dashboard">
          <NavItem icon={<Megaphone className="h-5 w-5" />} label="Dashboard" active={isDashboard} />
        </Link>
        <NavItem icon={<MessageSquare className="h-5 w-5" />} label="Messaging" />
        <NavItem icon={<Bell className="h-5 w-5" />} label="Notifications" count={3} />
        <NavItem 
          icon={
            <div className="h-7 w-7 rounded-full overflow-hidden bg-white flex items-center justify-center">
              <img 
                src="/lovable-uploads/9ad7df03-82de-4a79-b1ac-a9769c51fb25.png"
                alt="Profile"
                className="h-5 w-5 object-contain"
              />
            </div>
          } 
          hideLabel={true}
        />
      </div>

      <div className="fixed bottom-6 right-6 z-40">
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-[#7C42FF] hover:bg-[#6a35e0] text-white rounded-full p-3 shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-105"
          aria-label="Open AI Assistant"
        >
          <Bot className="h-6 w-6" />
        </button>
      </div>

      {isChatOpen && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-lg shadow-xl z-50 overflow-hidden flex flex-col border border-gray-200 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="bg-gradient-to-r from-[#7C42FF] to-[#ff6e8a] px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-white" />
              <h3 className="text-white font-medium">AllThings ADs AI</h3>
            </div>
            <button 
              onClick={() => setIsChatOpen(false)}
              className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div className="p-4 h-80 overflow-y-auto bg-gray-50 flex flex-col gap-3">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={cn(
                  "p-3 rounded-lg shadow-sm max-w-[80%] animate-in fade-in slide-in-from-bottom-3 duration-200",
                  message.role === 'assistant' 
                    ? "bg-white rounded-tl-none self-start" 
                    : "bg-[#7C42FF] text-white rounded-tr-none self-end"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-sm">{message.content}</p>
              </div>
            ))}
            {isLoading && (
              <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm self-start max-w-[80%] flex items-center space-x-2">
                <img 
                  src="/lovable-uploads/abad0dae-c641-4c7d-ba2e-dfa5449c5e28.png" 
                  alt="AllThings ADs" 
                  className="h-5 w-5 animate-spin"
                />
                <div className="flex space-x-2">
                  <div className="h-2 w-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="h-2 w-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  <div className="h-2 w-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <form onSubmit={handleSendMessage} className="border-t p-3 flex gap-2">
            <Input 
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..." 
              className="text-sm" 
              disabled={isLoading}
            />
            <button 
              type="submit"
              disabled={isLoading || !inputMessage.trim()}
              className="bg-[#7C42FF] text-white p-2 rounded-full hover:bg-[#6a35e0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
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
