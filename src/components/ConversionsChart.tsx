
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
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
            fill="#7C42FF"
            radius={[4, 4, 0, 0]}
            className="fill-primary"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
