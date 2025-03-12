
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const sources = [
  {
    name: "Facebook Ads",
    icon: "/lovable-uploads/a407c90d-8d67-41f3-a222-38f751a809db.png",
    hasAction: true,
  },
  {
    name: "Bing Ads",
    icon: "/lovable-uploads/a407c90d-8d67-41f3-a222-38f751a809db.png",
  },
  {
    name: "Twitter Ads",
    icon: "/lovable-uploads/a407c90d-8d67-41f3-a222-38f751a809db.png",
  },
];

export const ReportSources = () => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900">Report sources</h2>
      <p className="mt-1 text-sm text-gray-500">
        This report contains {sources.length} sources:
      </p>
      
      <div className="relative mt-4">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Find a source"
          className="pl-9"
        />
      </div>

      <div className="mt-4 space-y-3">
        {sources.map((source) => (
          <div
            key={source.name}
            className="flex items-center justify-between rounded-lg border p-3 transition-all hover:bg-gray-50"
          >
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-full bg-gray-100" />
              <span className="font-medium">{source.name}</span>
            </div>
            {source.hasAction && (
              <button className="rounded-lg bg-gray-100 px-4 py-1 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200">
                Change
              </button>
            )}
          </div>
        ))}
      </div>

      <button className="mt-4 flex w-full items-center justify-center space-x-2 rounded-lg border p-3 text-blue-600 transition-colors hover:bg-blue-50">
        <span>Browse all channels</span>
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};
