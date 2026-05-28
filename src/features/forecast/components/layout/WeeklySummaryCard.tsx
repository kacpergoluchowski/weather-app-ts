import { ChartNoAxesColumn, Thermometer } from "lucide-react";

import type { WeeklySummaryCardProps } from "../../../../types/forecast/WeeklySummaryCardProps";

export default function WeeklySummaryCard({ data }: WeeklySummaryCardProps) {
  return (
    <section className="mx-auto mt-3 rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-slate-950">
          Podsumowanie tygodnia
        </h2>

        <ChartNoAxesColumn
          className="size-[18px] text-blue-900"
          aria-hidden="true"
        />
      </div>

      <div>
        <h3 className="my-2 text-md font-semibold text-slate-950">
          Trochę chłodniej niż zwykle
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          Najwyższa temperatura w tym tygodniu to {data.maxTemp}° w{" "}
          {data.maxTempDay}, a najniższa {data.minTemp}° w {data.minTempDay}.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-2 divide-x divide-slate-100">
        <div className="flex items-center gap-3 pr-4">
          <div className="flex size-8 items-center justify-center rounded-full bg-red-50">
            <Thermometer
              className="size-[18px] text-red-500"
              aria-hidden="true"
            />
          </div>

          <div>
            <p className="text-md font-bold text-slate-950">{data.maxTemp}°</p>

            <p className="text-xs text-slate-500">Najwyższa</p>
          </div>
        </div>

        <div className="flex items-center gap-3 pl-4">
          <div className="flex size-8 items-center justify-center rounded-full bg-blue-50">
            <Thermometer
              className="size-[18px] text-blue-500"
              aria-hidden="true"
            />
          </div>

          <div>
            <p className="text-md font-bold text-slate-950">{data.minTemp}°</p>

            <p className="text-xs text-slate-500">Najniższa</p>
          </div>
        </div>
      </div>
    </section>
  );
}
