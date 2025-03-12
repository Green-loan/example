
import { Eye, MousePointer, Zap, DollarSign } from "lucide-react";
import { ConversionsChart } from "@/components/ConversionsChart";
import { ReportSources } from "@/components/ReportSources";
import { StatsCard } from "@/components/StatsCard";
import { TopNav } from "@/components/TopNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <TopNav />
      <div className="mx-auto max-w-7xl space-y-6 p-6">
        {/* Welcome Message */}
        <div className="mb-2">
          <h1 className="text-2xl font-semibold text-gray-900">Welcome Clinton Khoza</h1>
          <p className="text-gray-600">Here's your advertising dashboard overview</p>
        </div>
        
        {/* Conversions Section */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-semibold text-gray-900">Conversions</h1>
          <div className="mt-4">
            <ConversionsChart />
          </div>
        </div>

        {/* Overall Performance Grid */}
        <div>
          <h2 className="mb-4 text-xl font-semibold text-gray-900">
            Overall performance
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              icon={Eye}
              title="Impressions"
              value="9,172"
              className="bg-gradient-to-br from-white to-[#f0ebff]"
              iconColor="#7C42FF"
            />
            <StatsCard
              icon={MousePointer}
              title="Clicks"
              value="32"
              className="bg-gradient-to-br from-white to-[#ffdee2]"
              iconColor="#ff6e8a"
            />
            <StatsCard
              icon={Zap}
              title="Conversions"
              value="56"
              className="bg-gradient-to-br from-white to-[#fff4e0]"
              iconColor="#FFA500"
            />
            <StatsCard
              icon={DollarSign}
              title="Revenue"
              value="$308.69"
              className="bg-gradient-to-br from-white to-[#e0fff8]"
              iconColor="#40E0D0"
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
