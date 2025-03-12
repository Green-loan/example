import { Star, Heart, Filter } from "lucide-react";
import { useState } from "react";
import { TopNav } from "@/components/TopNav";
import { CategoryBanner } from "@/components/CategoryBanner";
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
  location: string;
  rating: number;
  isFavorite: boolean;
  imageUrl: string;
  distance: string;
  dateRange: string;
  isGuestFavorite?: boolean;
};

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  // List of ad categories
  const categories: Category[] = [
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
      title: "Sandton, South Africa",
      location: "Johannesburg, Gauteng",
      rating: 4.82,
      isFavorite: false,
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&w=800&q=75",
      distance: "23 kilometers away",
      dateRange: "Mar 22 - 27",
      isGuestFavorite: false
    },
    {
      id: "ad2",
      title: "Sandton, South Africa",
      location: "Johannesburg, Gauteng",
      rating: 4.75,
      isFavorite: false,
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&w=800&q=75",
      distance: "17 kilometers away",
      dateRange: "Mar 22 - 27",
      isGuestFavorite: true
    },
    {
      id: "ad3",
      title: "Rosebank, South Africa",
      location: "Johannesburg, Gauteng",
      rating: 4.88,
      isFavorite: false,
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&w=800&q=75",
      distance: "3 kilometers away",
      dateRange: "Mar 22 - 27",
      isGuestFavorite: true
    },
    {
      id: "ad4",
      title: "Randburg, South Africa",
      location: "Johannesburg, Gauteng",
      rating: 5.0,
      isFavorite: false,
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&w=800&q=75",
      distance: "11 kilometers away",
      dateRange: "Mar 13 - 18",
      isGuestFavorite: false
    },
    {
      id: "ad5",
      title: "Midrand, South Africa",
      location: "Johannesburg, Gauteng",
      rating: 4.92,
      isFavorite: false,
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&w=800&q=75",
      distance: "28 kilometers away",
      dateRange: "Apr 5 - 10",
      isGuestFavorite: false
    },
    {
      id: "ad6",
      title: "Centurion, South Africa",
      location: "Pretoria, Gauteng",
      rating: 4.79,
      isFavorite: false,
      imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&w=800&q=75",
      distance: "45 kilometers away",
      dateRange: "Apr 15 - 22",
      isGuestFavorite: true
    },
    {
      id: "ad7",
      title: "Pretoria East, South Africa",
      location: "Pretoria, Gauteng",
      rating: 4.65,
      isFavorite: false,
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&w=800&q=75",
      distance: "52 kilometers away",
      dateRange: "May 1 - 7",
      isGuestFavorite: false
    },
    {
      id: "ad8",
      title: "Hartbeespoort, South Africa",
      location: "North West Province",
      rating: 4.95,
      isFavorite: false,
      imageUrl: "/lovable-uploads/d9503ddd-c5fc-4cfa-b2f9-5e8c923912fd.png",
      distance: "65 kilometers away",
      dateRange: "May 12 - 18",
      isGuestFavorite: true
    },
  ];

  // Handle toggling favorites
  const toggleFavorite = (id: string) => {
    console.log(`Toggled favorite for ad ${id}`);
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <TopNav />
      <div className="mx-auto max-w-7xl">
        {/* Categories Scrollable Bar with Animated Banners */}
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

        {/* Ad Grid with lazy loading and optimized images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {adItems.map((ad) => (
            <div key={ad.id} className="group relative rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-300 hover:shadow-md animate-fade-in">
              {/* Image with loading optimization */}
              <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                <img 
                  src={`${ad.imageUrl}&auto=format&w=800&q=75`}
                  alt={ad.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <button 
                  onClick={() => toggleFavorite(ad.id)}
                  className="absolute right-3 top-3 rounded-full p-2 transition-colors"
                  aria-label="Add to favorites"
                >
                  <Heart className={cn("h-6 w-6 transition-all duration-300", 
                    ad.isFavorite ? "fill-red-500 text-red-500" : "text-white"
                  )} />
                </button>
                
                {/* Rating stars with animation */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-white/90 rounded-lg px-2 py-1">
                  <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  <span className="text-sm font-medium">{ad.rating}</span>
                </div>
              </div>
              
              {/* Ad Info */}
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-medium">{ad.title}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-current text-black" />
                    <span className="ml-1 text-sm">{ad.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500">{ad.distance}</p>
                <p className="text-sm text-gray-500">{ad.dateRange}</p>
                <div className="mt-2 flex items-center">
                  {/* Rating stars */}
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
      </div>
    </div>
  );
};

export default HomePage;
