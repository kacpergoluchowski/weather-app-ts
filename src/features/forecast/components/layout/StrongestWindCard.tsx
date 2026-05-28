import clsx from "clsx";
import { Wind } from "lucide-react";
import type { StrongestWindCardProps } from "../../../../types/forecast/StrongestWindCardProps";
import { getDayName } from "../../../../utils/getDayName";
import { getShortDayName } from "../../../../utils/getShortDayName";


const BAR_HEIGHT_MULTIPLIER = 3;

export default function StrongestWindCard({
  data = [],
}: StrongestWindCardProps) {
  const strongestWind = Math.max(
    ...data.map((item) => item.wind),
    0
  );

  const strongestWindDay = data.find(
    (item) => item.wind === strongestWind
  );

  console.log(data);

  return (
    <section className="mx-auto mt-3 rounded-3xl border border-gray-100 bg-white p-5 shadow-sm lg:w-1/2">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-2xl bg-sky-50">
            <Wind
              className="size-[22px] text-sky-500"
              aria-hidden="true"
            />
          </div>

          <h2 className="text-base font-semibold text-slate-950">
            Najsilniejszy wiatr
          </h2>
        </div>
      </div>

      <div className="rounded-3xl bg-green-400/10 p-4">
        <p className="text-base font-semibold text-green-500">
          {getDayName(strongestWindDay?.day)}
        </p>

        <div className="mt-2 flex items-end gap-1">
          <span className="text-5xl font-bold text-slate-950">
            {strongestWind}
          </span>

          <span className="text-lg text-slate-600">
            km/h
          </span>
        </div>

        <p className="mt-2 text-sm text-slate-500">
          Najmocniejsze podmuchy w tygodniu
        </p>
      </div>

      <div className="mx-4 mt-5 flex items-end justify-between">
        {data.map((item) => {
          const isActive =
            item.wind === strongestWind;

          const height =
            item.wind * BAR_HEIGHT_MULTIPLIER;

          return (
            <div
              key={item.day}
              className="flex flex-col items-center gap-2"
            >
              <p
                className={clsx(
                  "text-xs font-medium",
                  isActive
                    ? "text-green-600"
                    : "text-slate-500"
                )}
              >
                {getShortDayName(item.day)}
              </p>

              <div className="flex h-20 items-end">
                <div
                  className={clsx(
                    "w-4 rounded-full",
                    isActive
                      ? "bg-green-500"
                      : "bg-green-200"
                  )}
                  style={{
                    height: `${height}px`,
                  }}
                />
              </div>

              <p
                className={clsx(
                  "text-[10px] font-medium",
                  isActive
                    ? "text-sky-600"
                    : "text-slate-500"
                )}
              >
                {item.wind}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}