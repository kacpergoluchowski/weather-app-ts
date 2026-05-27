import { ChevronRight } from "lucide-react";
import type { weeklyForecastItemProps } from "../../../../types/weeklyForecastItemProps";

export default function WeeklyForecastItem({ data }: weeklyForecastItemProps) {
  const { day, icon, maxTemp, minTemp } = data;

  return (
    <li className="flex items-center justify-between py-1 text-[11px]">
      <p>{day}</p>

      <div className="flex justify-between items-center gap-3">
        <img src={icon} alt="" className="w-7" />

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
