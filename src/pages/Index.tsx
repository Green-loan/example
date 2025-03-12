
import { Eye, MousePointer, Zap, DollarSign } from "lucide-react";
import { ConversionsChart } from "@/components/ConversionsChart";
import { ReportSources } from "@/components/ReportSources";
import { StatsCard } from "@/components/StatsCard";
import { TopNav } from "@/components/TopNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f6f4ff]">
      <TopNav />
      <div className="mx-auto max-w-7xl space-y-8 p-8">
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
            />
            <StatsCard
              icon={MousePointer}
              title="Clicks"
              value="32"
            />
            <StatsCard
              icon={Zap}
              title="Conversions"
              value="56"
            />
            <StatsCard
              icon={DollarSign}
              title="Revenue"
              value="$308.69"
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
