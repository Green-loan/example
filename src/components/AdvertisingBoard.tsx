
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

export const AdvertisingBoard = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState(0);

  // Animate the 3D rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setRotation({
          x: Math.sin(Date.now() / 2000) * 10,
          y: Math.cos(Date.now() / 3000) * 15
        });
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isHovered]);

  // Animate the floating effect
  useEffect(() => {
    const floatInterval = setInterval(() => {
      setPosition(prev => Math.sin(Date.now() / 1000) * 10);
    }, 50);

    return () => clearInterval(floatInterval);
  }, []);

  // Handle mouse movement for interactive 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovered) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  return (
    <div className="w-full py-6 px-4 my-4 overflow-hidden bg-gradient-to-r from-purple-900 via-purple-700 to-indigo-800 rounded-xl shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div 
          className="relative h-64 bg-transparent rounded-lg overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
        >
          {/* 3D Rotating Product */}
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ 
              transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              transition: isHovered ? 'none' : 'transform 0.3s ease-out',
              top: `calc(50% - 100px + ${position}px)`
            }}
          >
            <div className="w-48 h-48 bg-white rounded-full shadow-xl flex items-center justify-center overflow-hidden">
              <div className="w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full animate-pulse flex items-center justify-center">
                <span className="text-6xl">🚀</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col items-start justify-center text-white p-10">
            <div 
              className={cn(
                "transition-all duration-500",
                isHovered ? "translate-x-32" : "translate-x-0"
              )}
            >
              <h2 className="text-3xl font-bold mb-2 drop-shadow-md">
                Advertise With Us
              </h2>
              <p className="text-lg mb-4 max-w-md drop-shadow-md">
                Reach millions of potential customers with our interactive 3D advertising platform.
              </p>
              <button className="bg-white text-purple-800 font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl">
                Get Started
              </button>
            </div>
          </div>

          {/* Floating Elements */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-8 h-8 rounded-full bg-white bg-opacity-20 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
