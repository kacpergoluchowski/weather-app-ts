import { ChevronRight, Droplet, Sun, Wind } from "lucide-react";

export default function ForecastTable() {
  return (
    <section className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm mx-auto mt-3">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-md font-semibold text-slate-950">
          Prognoza na 7 dni
        </h2>

        <button
          type="button"
          className="text-sm font-medium text-blue-600 flex items-center gap-1"
        >
          Więcej
          <ChevronRight size={15} />
        </button>
      </div>
      <ul className="divide-y divide-slate-100">
        <li className="grid grid-cols-[46px_120px_1fr] sm:grid-cols-[56px_2fr_1fr] items-center gap-2 py-3">
          <div>
            <p className="text-sm font-semibold text-slate-950">Dzisiaj</p>

            <p className="text-[10px] text-slate-500">20 maja</p>
          </div>

          <div className="flex justify-center items-center gap-2">
            <Sun className="text-amber-300" />

            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-950">
                23°
                <span className="text-blue-500"> / 13°</span>
              </p>

              <p className="truncate text-[10px] text-slate-500">Słonecznie</p>
            </div>
          </div>

          <div className="flex items-center justify-between ml-3">
            <div className="flex flex-col gap-1">
              <p className="flex items-center gap-1 text-[10px] text-slate-600">
                <Droplet size={11} />
                0,2 mm
              </p>

              <p className="flex items-center justify-between gap-1 text-[10px] text-slate-600">
                <Wind size={11} />
                18 km/h
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
        <li className="grid grid-cols-[46px_120px_1fr] sm:grid-cols-[56px_2fr_1fr] items-center gap-2 py-3">
          <div>
            <p className="text-sm font-semibold text-slate-950">Dzisiaj</p>

            <p className="text-[10px] text-slate-500">20 maja</p>
          </div>

          <div className="flex justify-center items-center gap-2">
            <Sun className="text-amber-300" />

            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-950">
                23°
                <span className="text-blue-500"> / 13°</span>
              </p>

              <p className="truncate text-[10px] text-slate-500">Słonecznie</p>
            </div>
          </div>

          <div className="flex items-center justify-between ml-3">
            <div className="flex flex-col gap-1">
              <p className="flex items-center gap-1 text-[10px] text-slate-600">
                <Droplet size={11} />
                0,2 mm
              </p>

              <p className="flex items-center justify-between gap-1 text-[10px] text-slate-600">
                <Wind size={11} />
                18 km/h
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

        <li className="grid grid-cols-[46px_120px_1fr] sm:grid-cols-[56px_2fr_1fr] items-center gap-2 py-3">
          <div>
            <p className="text-sm font-semibold text-slate-950">Dzisiaj</p>

            <p className="text-[10px] text-slate-500">20 maja</p>
          </div>

          <div className="flex justify-center items-center gap-2">
            <Sun className="text-amber-300" />

            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-950">
                23°
                <span className="text-blue-500"> / 13°</span>
              </p>

              <p className="truncate text-[10px] text-slate-500">Słonecznie</p>
            </div>
          </div>

          <div className="flex items-center justify-between ml-3">
            <div className="flex flex-col gap-1">
              <p className="flex items-center gap-1 text-[10px] text-slate-600">
                <Droplet size={11} />
                0,2 mm
              </p>

              <p className="flex items-center justify-between gap-1 text-[10px] text-slate-600">
                <Wind size={11} />
                18 km/h
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

        <li className="grid grid-cols-[46px_120px_1fr] sm:grid-cols-[56px_2fr_1fr] items-center gap-2 py-3">
          <div>
            <p className="text-sm font-semibold text-slate-950">Dzisiaj</p>

            <p className="text-[10px] text-slate-500">20 maja</p>
          </div>

          <div className="flex justify-center items-center gap-2">
            <Sun className="text-amber-300" />

            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-950">
                23°
                <span className="text-blue-500"> / 13°</span>
              </p>

              <p className="truncate text-[10px] text-slate-500">Słonecznie</p>
            </div>
          </div>

          <div className="flex items-center justify-between ml-3">
            <div className="flex flex-col gap-1">
              <p className="flex items-center gap-1 text-[10px] text-slate-600">
                <Droplet size={11} />
                0,2 mm
              </p>

              <p className="flex items-center justify-between gap-1 text-[10px] text-slate-600">
                <Wind size={11} />
                18 km/h
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

        <li className="grid grid-cols-[46px_120px_1fr] sm:grid-cols-[56px_2fr_1fr] items-center gap-2 py-3">
          <div>
            <p className="text-sm font-semibold text-slate-950">Dzisiaj</p>

            <p className="text-[10px] text-slate-500">20 maja</p>
          </div>

          <div className="flex justify-center items-center gap-2">
            <Sun className="text-amber-300" />

            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-950">
                23°
                <span className="text-blue-500"> / 13°</span>
              </p>

              <p className="truncate text-[10px] text-slate-500">Słonecznie</p>
            </div>
          </div>

          <div className="flex items-center justify-between ml-3">
            <div className="flex flex-col gap-1">
              <p className="flex items-center gap-1 text-[10px] text-slate-600">
                <Droplet size={11} />
                0,2 mm
              </p>

              <p className="flex items-center justify-between gap-1 text-[10px] text-slate-600">
                <Wind size={11} />
                18 km/h
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

        <li className="grid grid-cols-[46px_120px_1fr] sm:grid-cols-[56px_2fr_1fr] items-center gap-2 py-3">
          <div>
            <p className="text-sm font-semibold text-slate-950">Dzisiaj</p>

            <p className="text-[10px] text-slate-500">20 maja</p>
          </div>

          <div className="flex justify-center items-center gap-2">
            <Sun className="text-amber-300" />

            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-950">
                23°
                <span className="text-blue-500"> / 13°</span>
              </p>

              <p className="truncate text-[10px] text-slate-500">Słonecznie</p>
            </div>
          </div>

          <div className="flex items-center justify-between ml-3">
            <div className="flex flex-col gap-1">
              <p className="flex items-center gap-1 text-[10px] text-slate-600">
                <Droplet size={11} />
                0,2 mm
              </p>

              <p className="flex items-center justify-between gap-1 text-[10px] text-slate-600">
                <Wind size={11} />
                18 km/h
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

       <li className="grid grid-cols-[46px_120px_1fr] sm:grid-cols-[56px_2fr_1fr] items-center gap-2 py-3">
          <div>
            <p className="text-sm font-semibold text-slate-950">Dzisiaj</p>

            <p className="text-[10px] text-slate-500">20 maja</p>
          </div>

          <div className="flex justify-center items-center gap-2">
            <Sun className="text-amber-300" />

            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-950">
                23°
                <span className="text-blue-500"> / 13°</span>
              </p>

              <p className="truncate text-[10px] text-slate-500">Słonecznie</p>
            </div>
          </div>

          <div className="flex items-center justify-between ml-3">
            <div className="flex flex-col gap-1">
              <p className="flex items-center gap-1 text-[10px] text-slate-600">
                <Droplet size={11} />
                0,2 mm
              </p>

              <p className="flex items-center justify-between gap-1 text-[10px] text-slate-600">
                <Wind size={11} />
                18 km/h
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
      </ul>
    </section>
  );
}
