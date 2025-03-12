import { Star, Heart, Filter } from "lucide-react";
import { useState } from "react";
import { TopNav } from "@/components/TopNav";
import { CategoryBanner } from "@/components/CategoryBanner";
import { AdvertisingBoard } from "@/components/AdvertisingBoard";
import { cn } from "@/lib/utils";

// Ad categories
type Category = {
  id: string;
  name: string;
  icon: React.ReactNode;
};

// Ad item properties
type AdItem = {
  id: string;
  title: string;
  advertiser: string;
  rating: number;
  isFavorite: boolean;
  imageUrl: string;
  description: string;
  dateRange: string;
  isGuestFavorite?: boolean;
};

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  // List of ad categories
  const categories: Category[] = [
    { id: "all", name: "All", icon: <span className="text-xl">🌐</span> },
    { 
      id: "amazing-products", 
      name: "Amazing products", 
      icon: <div className="h-12 w-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg animate-pulse flex items-center justify-center">
        <span className="text-xl">✨</span>
      </div>
    },
    { id: "electronics", name: "Electronics", icon: <span className="text-xl">📱</span> },
    { id: "automotive", name: "Automotive", icon: <span className="text-xl">🚗</span> },
    { id: "fashion", name: "Fashion", icon: <span className="text-xl">👕</span> },
    { id: "real-estate", name: "Real Estate", icon: <span className="text-xl">🏠</span> },
    { id: "new", name: "New", icon: <span className="text-xl">🆕</span> },
    { id: "services", name: "Services", icon: <span className="text-xl">🛎️</span> },
    { id: "food", name: "Food & Drink", icon: <span className="text-xl">🍔</span> },
    { id: "luxury", name: "Luxury", icon: <span className="text-xl">💎</span> },
    { id: "travel", name: "Travel", icon: <span className="text-xl">✈️</span> },
  ];

  // List of ad items
  const adItems: AdItem[] = [
    {
      id: "ad1",
      title: "TechPro Solutions",
      advertiser: "John Smith - Lead Developer",
      rating: 4.82,
      isFavorite: false,
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&w=800&q=75",
      description: "Expert software development and IT consulting",
      dateRange: "Available Now",
      isGuestFavorite: false
    },
    {
      id: "ad2",
      title: "CodeCraft Industries",
      advertiser: "Sarah Johnson - CEO",
      rating: 4.75,
      isFavorite: false,
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&w=800&q=75",
      description: "Custom software solutions for enterprises",
      dateRange: "Starting Next Week",
      isGuestFavorite: true
    },
    {
      id: "ad3",
      title: "Digital Dynamics",
      advertiser: "Mike Williams - Tech Lead",
      rating: 4.88,
      isFavorite: false,
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&w=800&q=75",
      description: "Web and mobile app development",
      dateRange: "Immediate Start",
      isGuestFavorite: true
    },
    {
      id: "ad4",
      title: "InnovateTech Solutions",
      advertiser: "Emma Davis - Project Manager",
      rating: 5.0,
      isFavorite: false,
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&w=800&q=75",
      description: "Innovative software solutions",
      dateRange: "Available Now",
      isGuestFavorite: false
    },
    {
      id: "ad5",
      title: "ByteBridge Consulting",
      advertiser: "Alex Chen - Solutions Architect",
      rating: 4.92,
      isFavorite: false,
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&w=800&q=75",
      description: "Enterprise software consulting",
      dateRange: "Flexible Schedule",
      isGuestFavorite: false
    },
    {
      id: "ad6",
      title: "DevStack Technologies",
      advertiser: "Robert Miller - CTO",
      rating: 4.79,
      isFavorite: false,
      imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&w=800&q=75",
      description: "Full-stack development services",
      dateRange: "Starting Soon",
      isGuestFavorite: true
    }
  ];

  // Handle toggling favorites
  const toggleFavorite = (id: string) => {
    console.log(`Toggled favorite for ad ${id}`);
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <TopNav />
      <div className="mx-auto max-w-7xl">
        {/* 3D Advertising Board */}
        <div className="px-6 pt-4">
          <AdvertisingBoard />
        </div>
        
        {/* Categories Scrollable Bar */}
        <div className="overflow-x-auto px-6 py-4 flex items-center border-b border-gray-200 bg-white">
          <div className="flex space-x-8">
            {categories.map((category) => (
              <CategoryBanner
                key={category.id}
                title={category.name}
                imageUrl={`/category-${category.id}.jpg`}
                isActive={selectedCategory === category.id}
                onClick={() => setSelectedCategory(category.id)}
                icon={category.icon}
              />
            ))}
          </div>
          
          {/* Filter button with animation */}
          <div className="ml-auto pl-8 border-l">
            <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-all duration-300 hover:scale-105">
              <Filter className="h-4 w-4 animate-pulse" />
              <span>AI Recommendations</span>
            </button>
          </div>
        </div>

        {/* Updated Ad Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          {adItems.map((ad) => (
            <div key={ad.id} className="group relative rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-300 hover:shadow-md animate-fade-in">
              <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                <img 
                  src={ad.imageUrl}
                  alt={ad.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <button 
                  onClick={() => toggleFavorite(ad.id)}
                  className="absolute right-3 top-3 rounded-full p-2 transition-colors"
                >
                  <Heart className={cn("h-6 w-6 transition-all duration-300", 
                    ad.isFavorite ? "fill-red-500 text-red-500" : "text-white"
                  )} />
                </button>
                
                <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-white/90 rounded-lg px-2 py-1">
                  <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  <span className="text-sm font-medium">{ad.rating}</span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-medium">{ad.title}</h3>
                <p className="text-sm text-gray-600">{ad.advertiser}</p>
                <p className="text-sm text-gray-500 mt-1">{ad.description}</p>
                <p className="text-sm text-gray-500">{ad.dateRange}</p>
                <div className="mt-2 flex items-center">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={cn(
                          "h-4 w-4", 
                          i < Math.floor(ad.rating) 
                            ? "fill-yellow-500 text-yellow-500" 
                            : "text-gray-300"
                        )} 
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">
                    {Math.floor(Math.random() * 100) + 10} likes
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Footer */}
        <footer className="bg-white border-t mt-8 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">About All Things Advertising</h3>
                <p className="text-gray-600 leading-relaxed">
                  All Things Advertising is your premier destination for connecting with top tech talent 
                  and innovative companies. We provide a platform where businesses can showcase their 
                  services and professionals can highlight their expertise in software development, 
                  consulting, and digital solutions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  We're dedicated to bridging the gap between exceptional tech talent and forward-thinking 
                  companies. Our platform facilitates meaningful connections that drive innovation and 
                  growth in the technology sector, making it easier for businesses to find the right 
                  expertise and for professionals to showcase their services.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center text-gray-500 text-sm">
              © 2024 All Things Advertising. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
