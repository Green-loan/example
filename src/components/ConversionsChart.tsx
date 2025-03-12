
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { useEffect, useState } from "react";

const initialData = [
  { month: "Jan", value: 0 },
  { month: "Feb", value: 0 },
  { month: "Mar", value: 0 },
  { month: "Apr", value: 0 },
  { month: "May", value: 0 },
  { month: "Jun", value: 0 },
  { month: "Jul", value: 0 },
  { month: "Aug", value: 0 },
  { month: "Sep", value: 0 },
  { month: "Oct", value: 0 },
  { month: "Nov", value: 0 },
  { month: "Dec", value: 0 },
];

const finalData = [
  { month: "Jan", value: 5 },
  { month: "Feb", value: 7 },
  { month: "Mar", value: 4 },
  { month: "Apr", value: 8 },
  { month: "May", value: 6 },
  { month: "Jun", value: 9 },
  { month: "Jul", value: 5 },
  { month: "Aug", value: 7 },
  { month: "Sep", value: 4 },
  { month: "Oct", value: 6 },
  { month: "Nov", value: 8 },
  { month: "Dec", value: 9 },
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
          <defs>
            <linearGradient id="purpleBlueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7C42FF" />
              <stop offset="100%" stopColor="#0EA5E9" />
            </linearGradient>
          </defs>
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
            tickFormatter={(value) => `R${value}k`}
          />
          <Bar
            dataKey="value"
            fill="url(#purpleBlueGradient)"
            radius={[4, 4, 0, 0]}
            className="transition-all duration-1000 ease-out"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
