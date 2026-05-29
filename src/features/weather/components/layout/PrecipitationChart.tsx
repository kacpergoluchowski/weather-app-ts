import { Bar, BarChart, ResponsiveContainer, XAxis } from "recharts";

type PrecipitationChartData = {
  time: string;
  precipitation: number;
};

type PrecipitationChartProps = {
  data: PrecipitationChartData[];
};

const xAxisTickStyle = {
  fill: "#64748b",
  fontSize: 12,
  fontWeight: 500,
};

export default function PrecipitationChart({ data }: PrecipitationChartProps) {
  console.log(data);
  return (
    <section
      aria-label="Wykres opadów godzinowych"
      className="mt-3 h-62.5 w-1/2 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-950">Opady</h2>
      </div>

      <div
        role="img"
        aria-label="Wykres pokazujący poziom opadów w kolejnych godzinach"
        className="h-40 w-full"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7CB8FF" />
                <stop offset="100%" stopColor="#355CFF" />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={xAxisTickStyle}
              tickMargin={15}
            />

            <Bar
              dataKey="precipitation"
              fill="url(#barGradient)"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}