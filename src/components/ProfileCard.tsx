
import { Plus } from "lucide-react";

export const ProfileCard = () => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm animate-fade-in space-y-4 w-full max-w-xs">
      <div className="flex flex-col items-center">
        <div className="relative">
          <img 
            src="/lovable-uploads/2800c615-7c2f-4181-bade-fa6ffe5ab2ba.png" 
            alt="Clinton Khoza" 
            className="h-24 w-24 rounded-full border-4 border-white shadow-md"
          />
          <div className="absolute bottom-0 right-0 bg-green-500 text-white text-xs rounded-full px-2 py-0.5 text-center border border-white">
            PREMIUM
          </div>
        </div>
        
        <h2 className="mt-4 text-xl font-bold text-center">Clinton Khoza</h2>
        <p className="text-sm text-gray-600 text-center px-2">
          Full-stack developer | dip in information technology (intelligence)
        </p>
        <p className="text-sm text-gray-500">Pretoria, Gauteng</p>
      </div>
      
      <button className="w-full border border-gray-300 rounded-lg py-2 px-4 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors duration-300">
        <Plus className="h-4 w-4 text-gray-600" />
        <span className="text-sm text-gray-700 font-medium">Experience</span>
      </button>
      
      <div className="border-t pt-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm font-medium text-gray-700">Profile viewers</p>
          <p className="text-sm text-blue-600 font-semibold">27</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium text-gray-700">Post impressions</p>
          <p className="text-sm text-blue-600 font-semibold">27</p>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
        <p className="text-sm text-gray-700 mb-2">Gain exclusive tools & insights</p>
        <button className="flex items-center gap-1 text-sm font-medium text-gray-800">
          <span className="text-yellow-500">🔶</span>
          Redeem Premium for ZAR0
        </button>
      </div>
    </div>
  );
};
