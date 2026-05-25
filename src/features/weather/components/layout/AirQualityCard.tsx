import { Info } from "lucide-react";

export default function AirQualityCard() {
  const airQuality = {
    aqi: 42,
    status: "Dobra",
    pollutant: "PM2.5",
    value: 6.0,
  };

  return (
    <section className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm lg:h-55 lg:w-120 2xl:h-51 2xl:w-full 2xl:mr-0">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-950">
          Jakość powietrza
        </h2>

        <Info size={20} aria-hidden="true" className="text-blue-900" />
      </div>

      <div className="flex items-center gap-5">
        <div
          role="img"
          aria-label={`Wskaźnik jakości powietrza AQI ${airQuality.aqi}`}
          className="relative flex items-center justify-center rounded-full lg:size-20"
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
            {airQuality.aqi}
          </span>
        </div>

        <p className="font-semibold text-green-600">{airQuality.status}</p>
      </div>

      <div className="mt-6 flex items-center justify-between text-sm">
        <span className="text-slate-700">{airQuality.pollutant}</span>

        <span className="font-medium text-slate-900">{airQuality.value}</span>
      </div>
    </section>
  );
}
