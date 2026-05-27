import { ChevronRight, Droplet, Wind } from "lucide-react";

export default function ForecastTable({ data = [] }) {
  return (
    <section className="mx-auto mt-3 rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-md font-semibold text-slate-950">
          Prognoza na 7 dni
        </h2>

        <button
          type="button"
          className="flex items-center gap-1 text-sm font-medium text-blue-600"
        >
          Więcej
          <ChevronRight size={15} />
        </button>
      </div>

      <ul className="divide-y divide-slate-100">
        {data.map((day) => (
          <li
            key={day.id}
            className="grid grid-cols-[46px_120px_1fr] items-center gap-2 py-3 sm:grid-cols-[56px_2fr_1fr]"
          >
            <div>
              <p className="text-sm font-semibold text-slate-950">Dzisiaj</p>
              <p className="text-[10px] text-slate-500">20 maja</p>
            </div>

            <div className="flex items-center justify-center gap-3">
              <img src={day.icon} alt={day.description} className="w-[clamp(1.75rem,6vw,2.5rem)]" />

              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-950">
                  {day.maxTemp}°
                  <span className="text-blue-500"> / {day.minTemp}°</span>
                </p>

                <p className="truncate text-[10px] text-slate-500">
                  Słonecznie
                </p>
              </div>
            </div>

            <div className="ml-3 flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <p className="flex items-center gap-1 text-[10px] text-slate-600">
                  <Droplet size={11} />
                  {day.precipitation} mm
                </p>

                <p className="flex items-center gap-1 text-[10px] text-slate-600">
                  <Wind size={11} />
                  {day.wind} km/h
                </p>
              </div>

              <button
                type="button"
                aria-label="Szczegóły"
                className="text-xs text-slate-400"
              >
                <ChevronRight size={10} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}