import { ChevronRight } from "lucide-react";

import type { WeeklyForecastItemProps } from "../../../../types/WeeklyForecastItemProps";

export default function WeeklyForecastItem({
  data,
}: WeeklyForecastItemProps) {
  const { day, icon, description, maxTemp, minTemp } = data;

  return (
    <li className="flex items-center justify-between py-1 text-[11px]">
      <p>{day}</p>

      <div className="flex items-center justify-between gap-3">
        <img src={icon} alt={description ?? ""} className="w-7" />

        <p>{maxTemp}°</p>

        <div className="h-1 w-10 rounded-full bg-slate-200 sm:w-30">
          <div className="h-full w-1/2 rounded-full bg-blue-500" />
        </div>

        <p>{minTemp}°</p>

        <ChevronRight className="size-3.75" aria-hidden="true" />
      </div>
    </li>
  );
}