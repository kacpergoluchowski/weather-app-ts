import { Info } from "lucide-react";
import type { AirQualityCardProps } from "../../../../types/AirQualityCardProps";

export default function AirQualityCard({ data }: AirQualityCardProps) {
  return (
    <section className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-950">
          Jakość powietrza
        </h2>

        <Info className="size-5 text-blue-900" aria-hidden="true" />
      </div>

      <div className="flex items-center gap-5">
        <div
          role="img"
          aria-label={`Wskaźnik jakości powietrza AQI ${data.aqi}`}
          className="relative flex size-20 items-center justify-center rounded-full"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-full border-8 border-emerald-200"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 rotate-45 rounded-full border-8 border-transparent border-r-emerald-500 border-t-emerald-500"
          />

          <span className="text-4xl font-semibold text-slate-950">
            {data.aqi}
          </span>
        </div>

        <p className="font-semibold text-green-600">{data.status}</p>
      </div>

      <div className="mt-6 flex items-center justify-between text-sm">
        <span className="text-slate-700">{data.pollutant}</span>

        <span className="font-medium text-slate-900">{data.value}</span>
      </div>
    </section>
  );
}