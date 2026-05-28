import clsx from "clsx";
import { CloudRain } from "lucide-react";

import type { WeeklyRainCardProps } from "../../../../types/forecast/WeeklyRainCardProps";
import { getDayName } from "../../../../utils/getDayName";
import { getShortDayName } from "../../../../utils/getShortDayName";

const MIN_BAR_HEIGHT = 8;
const BASE_BAR_HEIGHT = 18;
const BAR_HEIGHT_MULTIPLIER = 18;
const MAX_BAR_HEIGHT = 80;

export default function WeeklyRainCard({ data = [] }: WeeklyRainCardProps) {
  const maxRain = Math.max(...data.map((item) => item.precipitation), 0);

  const rainiestDay = data.find((item) => item.precipitation === maxRain);

  return (
    <section className="mx-auto mt-3 rounded-3xl border border-gray-100 bg-white p-5 shadow-sm lg:w-1/2">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-2xl bg-blue-50">
            <CloudRain className="size-[22px] text-blue-500" aria-hidden="true" />
          </div>

          <h2 className="text-base font-semibold text-slate-950">
            Najwięcej opadów
          </h2>
        </div>
      </div>

      <div className="rounded-3xl bg-blue-50/70 p-4">
        <p className="text-base font-semibold text-blue-600">
          {getDayName(rainiestDay?.day) ?? "-"}
        </p>

        <div className="mt-2 flex items-end gap-1">
          <span className="text-5xl font-bold text-slate-950">
            {(rainiestDay?.precipitation ?? 0).toString().replace(".", ",")}
          </span>

          <span className="text-lg text-slate-600">cm</span>
        </div>

        <p className="mt-2 text-sm text-slate-500">
          Najwięcej w tym tygodniu
        </p>
      </div>

      <div className="mx-4 mt-5 flex items-end justify-between">
        {data.map((item) => {
          const isActive = item.precipitation === maxRain;

          const height =
            item.precipitation === 0
              ? MIN_BAR_HEIGHT
              : Math.min(
                  BASE_BAR_HEIGHT + item.precipitation * BAR_HEIGHT_MULTIPLIER,
                  MAX_BAR_HEIGHT,
                );

          return (
            <div key={item.id} className="flex flex-col items-center gap-2">
              <p
                className={clsx(
                  "text-xs font-medium",
                  isActive ? "text-blue-600" : "text-slate-500",
                )}
              >
                {getShortDayName(item.day)}
              </p>

              <div className="flex h-20 items-end">
                <div
                  className={clsx(
                    "w-4 rounded-full",
                    isActive ? "bg-blue-500" : "bg-blue-200",
                  )}
                  style={{ height: `${height}px` }}
                />
              </div>

              <p
                className={clsx(
                  "text-[10px] font-medium",
                  isActive ? "text-blue-600" : "text-slate-500",
                )}
              >
                {item.precipitation.toString().replace(".", ",")}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}