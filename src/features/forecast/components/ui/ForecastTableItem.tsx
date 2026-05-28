import { ChevronRight, Droplet, Wind } from "lucide-react";

import { getWeatherIconUrl } from "../../../weather/utils/getWeatherIconUrl";
import type { ForecastTableItemProps } from "../../../../types/forecast/ForecastTableItemProps";

export default function ForecastTableItem({ data }: ForecastTableItemProps) {
  const {
    day,
    date,
    icon,
    description,
    maxTemp,
    minTemp,
    precipitation,
    wind,
  } = data;

  const iconSrc = getWeatherIconUrl(icon);

  return (
    <li className="grid grid-cols-[auto_1fr_auto] items-center gap-3 py-3">
      <div>
        <p className="text-sm font-semibold text-slate-950">{day}</p>
        <p className="text-[10px] text-slate-500">{date}</p>
      </div>

      <div className="flex min-w-0 items-center justify-center gap-3">
        <img
          src={iconSrc}
          alt={description}
          loading="lazy"
          className="w-8 shrink-0"
        />

        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-950">
            {maxTemp}°<span className="text-blue-500"> / {minTemp}°</span>
          </p>

          <p className="truncate text-[10px] text-slate-500">{description}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-1">
          <p className="flex items-center gap-1 text-[10px] text-slate-600">
            <Droplet className="size-[11px]" aria-hidden="true" />
            {precipitation} mm
          </p>

          <p className="flex items-center gap-1 text-[10px] text-slate-600">
            <Wind className="size-[11px]" aria-hidden="true" />
            {wind} km/h
          </p>
        </div>

        <button
          type="button"
          aria-label={`Pokaż szczegóły prognozy dla ${day}`}
          className="text-slate-400"
        >
          <ChevronRight className="size-3" aria-hidden="true" />
        </button>
      </div>
    </li>
  );
}
