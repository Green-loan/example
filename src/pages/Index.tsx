
import { Eye, MousePointer, Zap, DollarSign } from "lucide-react";
import { ConversionsChart } from "@/components/ConversionsChart";
import { ReportSources } from "@/components/ReportSources";
import { StatsCard } from "@/components/StatsCard";
import { TopNav } from "@/components/TopNav";
import { ProfileCard } from "@/components/ProfileCard";
import { Universe } from "@/components/Universe";

const Index = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <Universe />
      <TopNav />
      <div className="mx-auto max-w-7xl space-y-6 p-6">
        {/* Welcome Message */}
        <div className="mb-2">
          <h1 className="text-2xl font-semibold text-gray-900 formal-heading">Welcome Clinton Khoza</h1>
          <p className="text-gray-600 formal-text">Here's your advertising dashboard overview</p>
        </div>
        
        {/* Conversions Section with Profile Card */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Profile Card - Left Side */}
          <div className="md:col-span-1">
            <ProfileCard />
          </div>
          
          {/* Conversions Chart - Right Side */}
          <div className="md:col-span-3 rounded-xl formal-container p-6 shadow-sm">
            <h1 className="text-2xl font-semibold text-gray-900 formal-heading">Conversions</h1>
            <div className="mt-4">
              <ConversionsChart />
            </div>
          </div>
        </div>

        {/* Overall Performance Grid */}
        <div>
          <h2 className="mb-4 text-xl font-semibold text-gray-900 formal-heading">
            Overall performance
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              icon={Eye}
              title="Impressions"
              value="9,172"
              className="bg-white/90 backdrop-blur-sm border border-gray-200"
              iconColor="#444"
            />
            <StatsCard
              icon={MousePointer}
              title="Clicks"
              value="32"
              className="bg-white/90 backdrop-blur-sm border border-gray-200"
              iconColor="#444"
            />
            <StatsCard
              icon={Zap}
              title="Conversions"
              value="56"
              className="bg-white/90 backdrop-blur-sm border border-gray-200"
              iconColor="#444"
            />
            <StatsCard
              icon={DollarSign}
              title="Revenue"
              value="R3,086.90"
              className="bg-white/90 backdrop-blur-sm border border-gray-200"
              iconColor="#444"
            />
          </div>
        </div>

        {/* Report Sources */}
        <ReportSources />
      </div>
    </div>
  );
};

export default Index;
