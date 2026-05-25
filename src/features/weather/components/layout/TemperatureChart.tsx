import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { temperatureChartMockData } from "../../data/temperatureChartMockData";

const temperatureDotStyle = {
  r: 4,
  fill: "#355CFF",
  strokeWidth: 2,
};

const chartTickStyle = {
  fill: "#64748b",
  fontSize: 12,
  fontWeight: 500,
};

const activeTemperatureDotStyle = {
  r: 6,
  fill: "#355CFF",
  stroke: "#ffffff",
  strokeWidth: 2,
};

export default function TemperatureChart({ data = [] }) {
  return (
    <section
      aria-label="Wykres temperatury godzinowej"
      className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm w-1/2 mt-3 h-62.5"
    >
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-950">
          Temperatura (°C)
        </h2>

        <button
          type="button"
          className="rounded-xl border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700"
        >
          °C
        </button>
      </div>

      <div
        className="h-37.5 w-full"
        role="img"
        aria-label="Wykres pokazujący zmianę temperatury w kolejnych godzinach"
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={temperatureChartMockData}
            margin={{ top: 20, right: 10, left: 10, bottom: 0 }}
          >
            <defs>
              <linearGradient
                id="temperatureGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#355CFF" stopOpacity={0.28} />
                <stop offset="100%" stopColor="#355CFF" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={chartTickStyle}
              dy={10}
            />

            <YAxis hide domain={[15, 25]} />

            <Tooltip
              formatter={(value) => [`${value}°C`, "Temperatura"]}
              labelFormatter={(label) => `Godzina: ${label}`}
            />

            <Area
              type="monotone"
              dataKey="temperature"
              stroke="#355CFF"
              strokeWidth={3}
              fill="url(#temperatureGradient)"
              dot={temperatureDotStyle}
              activeDot={activeTemperatureDotStyle}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
