
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type CategoryBannerProps = {
  title: string;
  imageUrl: string;
  isActive: boolean;
  onClick: () => void;
  icon: React.ReactNode;
};

export const CategoryBanner = ({ title, imageUrl, isActive, onClick, icon }: CategoryBannerProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setIsLoaded(true);
  }, [imageUrl]);

  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center pb-2 pt-2 min-w-[80px] transition-all duration-300",
        isActive 
          ? "border-b-2 border-black text-black scale-105" 
          : "text-gray-500 hover:text-gray-800 border-b-2 border-transparent hover:scale-105"
      )}
    >
      <div className={cn(
        "mb-1 rounded-lg p-2 transition-all duration-300",
        isLoaded ? "opacity-100" : "opacity-0"
      )}>
        {icon}
      </div>
      <span className="text-xs font-medium whitespace-nowrap">{title}</span>
    </button>
  );
};
