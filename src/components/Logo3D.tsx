
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface Logo3DProps {
  className?: string;
}

export const Logo3D = ({ className }: Logo3DProps) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState(0);

  // Subtle rotation animation when not hovered
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setRotation({
          x: Math.sin(Date.now() / 3000) * 5,
          y: Math.cos(Date.now() / 4000) * 5,
          z: 0
        });
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isHovered]);

  // Subtle floating effect
  useEffect(() => {
    const floatInterval = setInterval(() => {
      setPosition(prev => Math.sin(Date.now() / 1500) * 3);
    }, 50);

    return () => clearInterval(floatInterval);
  }, []);

  // Enhanced hover effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovered) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 5;
    const rotateY = (centerX - x) / 5;
    
    setRotation({ x: rotateX, y: rotateY, z: 0 });
  };

  return (
    <div 
      className={cn("relative cursor-pointer transition-all duration-300", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div 
        className="relative transition-transform"
        style={{ 
          transform: `perspective(800px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)`,
          top: `${position}px`
        }}
      >
        <img 
          src="/lovable-uploads/abad0dae-c641-4c7d-ba2e-dfa5449c5e28.png" 
          alt="All Things Advertising" 
          className={cn(
            "h-14 transition-all duration-300",
            isHovered ? "drop-shadow-[0_0_15px_rgba(124,66,255,0.6)]" : "drop-shadow-[0_0_5px_rgba(124,66,255,0.3)]"
          )}
        />
        
        {/* Glow effect that appears on hover */}
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl rounded-full transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        />
      </div>
      
      {/* Shadow below the logo */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-2 bg-black/10 rounded-full blur-sm transform-gpu"
        style={{
          filter: 'blur(3px)',
          transform: `translateX(-50%) scale(${isHovered ? 1.2 : 1})`,
          opacity: isHovered ? 0.2 : 0.1
        }}
      />
    </div>
  );
};
