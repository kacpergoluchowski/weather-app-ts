import { Droplets, Sun, Sunset, Wind } from "lucide-react";

import type { WeatherStatsType } from "../../../types/WeatherStatsTypes";
import type { WeatherDetailsCardProps } from "../../../types/WeatherDetailsCardProps";

export function getWeatherStats(
  data: WeatherDetailsCardProps["data"],
): WeatherStatsType[] {
  return [
    {
      icon: Droplets,
      label: "Wilgotność",
      value: `${data.humidity}%`,
      color: "text-sky-300",
    },
    {
      icon: Wind,
      label: "Wiatr",
      value: `${data.wind} km/h`,
      color: "text-sky-300",
    },
    {
      icon: Sun,
      label: "Indeks UV",
      value: `${data.uv}`,
      color: "text-amber-300",
    },
    {
      icon: Sunset,
      label: "Zachód",
      value: data.sunset,
      color: "text-amber-300",
    },
  ];
}