import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface ProbabilityBarChartProps {
  probability: number;
}

export const ProbabilityBarChart = ({ probability }: ProbabilityBarChartProps) => {
  const defaultProbability = Number((probability * 100).toFixed(2));
  const nonDefaultProbability = Number((100 - defaultProbability).toFixed(2));

  const data = [
    { name: "Default", value: defaultProbability },
    { name: "Non-Default", value: nonDefaultProbability },
  ];

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="name" stroke="#cbd5e1" />
          <YAxis stroke="#cbd5e1" unit="%" />
          <Tooltip
            contentStyle={{
              background: "#0f172a",
              border: "1px solid #334155",
              borderRadius: 8,
              color: "#f8fafc",
            }}
            formatter={(value: number) => [`${value}%`, "Probability"]}
          />
          <Bar dataKey="value" fill="#596fff" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
