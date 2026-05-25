import { ChevronRight } from "lucide-react";
import type { weeklyForecastItemProps } from "../../../../types/weeklyForecastItemProps";

export default function WeeklyForecastItem({ data }: weeklyForecastItemProps) {
  const { day, icon: Icon, maxTemp, minTemp } = data;

  return (
    <li className="flex items-center justify-between py-1 text-[11px]">
      <p>{day}</p>

      <div className="flex items-center gap-3">
        <Icon className="w-6 text-amber-300" />

        <p>{maxTemp}°</p>

        <div className="h-1 w-10 rounded-full bg-slate-200 sm:w-30">
          <div className="h-full w-[50%] rounded-full bg-blue-500" />
        </div>

        <p>{minTemp}°</p>

        <ChevronRight size={15} aria-hidden="true" />
      </div>
    </li>
  );
}
