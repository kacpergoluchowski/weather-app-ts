import { ChartNoAxesColumn, Thermometer } from "lucide-react";

export default function WeeklySummaryCard() {
  return (
    <section className="mx-auto mt-3 rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-slate-950">
          Podsumowanie tygodnia
        </h2>

        <ChartNoAxesColumn
          size={18}
          aria-hidden="true"
          className="text-blue-900"
        />
      </div>

      <div>
        <h3 className="text-md font-semibold text-slate-950 my-2">
          Trochę chłodniej niż zwykle
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          Najwyższa temperatura w tym tygodniu to 26° w sobotę,
          a najniższa 10° w czwartek.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-2 divide-x divide-slate-100">
        <div className="flex items-center gap-3 pr-4">
          <div className="flex size-8 items-center justify-center rounded-full bg-red-50">
            <Thermometer
              size={18}
              aria-hidden="true"
              className="text-red-500"
            />
          </div>

          <div>
            <p className="text-md font-bold text-slate-950">
              24°
            </p>

            <p className="text-xs text-slate-500">
              Najwyższa
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 pl-4">
          <div className="flex size-8 items-center justify-center rounded-full bg-blue-50">
            <Thermometer
              size={18}
              aria-hidden="true"
              className="text-blue-500"
            />
          </div>

          <div>
            <p className="text-md font-bold text-slate-950">
              10°
            </p>

            <p className="text-xs text-slate-500">
              Najniższa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}