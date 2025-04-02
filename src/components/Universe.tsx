
import { useEffect, useRef } from 'react';

export const Universe = () => {
  const universeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!universeRef.current) return;
    
    const universe = universeRef.current;
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    universe.appendChild(starsContainer);
    
    // Create stars
    const starCount = 150;
    for (let i = 0; i < starCount; i++) {
      createStar(starsContainer);
    }
    
    // Create new stars periodically
    const intervalId = setInterval(() => {
      createStar(starsContainer);
      
      // Remove excess stars if there are too many
      if (starsContainer.children.length > 200) {
        starsContainer.removeChild(starsContainer.firstChild as Node);
      }
    }, 1000);
    
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  
  const createStar = (container: HTMLDivElement) => {
    const star = document.createElement('div');
    star.className = 'star';
    
    // Random size between 1px and 3px
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    
    // Random position
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    
    // Random animation duration and delay
    const duration = Math.random() * 5 + 5; // 5-10s
    const delay = Math.random() * 5; // 0-5s
    star.style.setProperty('--duration', `${duration}s`);
    star.style.setProperty('--delay', `${delay}s`);
    
    container.appendChild(star);
    
    // Remove the star after animation completes
    setTimeout(() => {
      if (container.contains(star)) {
        container.removeChild(star);
      }
    }, (duration + delay) * 1000);
  };
  
  return <div ref={universeRef} className="universe-background"></div>;
};
