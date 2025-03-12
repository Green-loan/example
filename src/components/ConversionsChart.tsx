
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { useEffect, useState } from "react";

const initialData = [
  { month: "Oct 05", value: 0 },
  { month: "06", value: 0 },
  { month: "07", value: 0 },
  { month: "08", value: 0 },
  { month: "09", value: 0 },
  { month: "10", value: 0 },
  { month: "11", value: 0 },
  { month: "12", value: 0 },
  { month: "13", value: 0 },
];

const finalData = [
  { month: "Oct 05", value: 5 },
  { month: "06", value: 5 },
  { month: "07", value: 4 },
  { month: "08", value: 5 },
  { month: "09", value: 7 },
  { month: "10", value: 5 },
  { month: "11", value: 3 },
  { month: "12", value: 5 },
  { month: "13", value: 5 },
];

export const ConversionsChart = () => {
  const [data, setData] = useState(initialData);
  
  useEffect(() => {
    // Animate the bars starting when component mounts
    const animateTimeout = setTimeout(() => {
      setData(finalData);
    }, 300);
    
    return () => clearTimeout(animateTimeout);
  }, []);

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis
            dataKey="month"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}k`}
          />
          <Bar
            dataKey="value"
            fill="url(#purpleBlueGradient)"
            radius={[4, 4, 0, 0]}
            className="transition-all duration-1000 ease-out"
          >
            <defs>
              <linearGradient id="purpleBlueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7C42FF" />
                <stop offset="100%" stopColor="#0EA5E9" />
              </linearGradient>
            </defs>
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
