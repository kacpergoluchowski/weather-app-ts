import { ChevronRight, Droplet, Wind } from "lucide-react";

import { getWeatherIconUrl } from "../../../weather/utils/getWeatherIconUrl";
import type { ForecastTableItemProps } from "../../../../types/forecast/ForecastTableItemProps";
import { getDayName } from "../../../../utils/getDayName";

export default function ForecastTableItem({ data }: ForecastTableItemProps) {
  const { day, icon, description, maxTemp, minTemp, precipitation, wind } =
    data;

  const iconSrc = getWeatherIconUrl(icon);

  return (
    <li className="gap-3 py-3">
      <div className="flex items-center justify-between gap-4 w-full">
        {/* Dzień */}
        <div className="min-w-[90px]">
          <p className="text-sm font-semibold text-slate-950">
            {getDayName(day)}
          </p>
          <p className="text-[10px] text-slate-500">{day}</p>
        </div>

        {/* Pogoda */}
        <div className="flex flex-1 items-center justify-center gap-3">
          <img
            src={iconSrc}
            alt={description}
            loading="lazy"
            className="w-8 shrink-0"
          />

          <p className="text-sm font-semibold text-slate-950 whitespace-nowrap">
            {maxTemp}°<span className="text-blue-500"> / {minTemp}°</span>
          </p>
        </div>

        {/* Szczegóły */}
        <div className="flex items-center gap-5">
          <div className="hidden sm:flex sm:flex-col md:flex-row md:justify-around md:w-60 gap-4">
            <p className="flex items-center gap-1 text-[10px] md:text-[12px] text-slate-600 whitespace-nowrap">
              <Droplet className="size-[11px] md:size-[13px]" />
              {precipitation} mm
            </p>

            <p className="flex items-center gap-1 text-[10px] md:text-[12px] text-slate-600 whitespace-nowrap">
              <Wind className="size-[11px] md:size-[13px]" />
              {wind} km/h
            </p>
          </div>

          <ChevronRight className="size-3 text-slate-400" aria-hidden="true" />
        </div>
      </div>
    </li>
  );
}
