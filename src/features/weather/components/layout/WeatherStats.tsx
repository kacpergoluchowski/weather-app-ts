import { Droplets, Sun, Sunset, Wind } from "lucide-react";
import type { WeatherStatsType } from "../../../../types/WeatherStatsTypes";
import WeatherStatsItem from "../ui/WeatherStatsItem";
import type { WeatherDetailsCardProps } from "../../../../types/WeatherDetailsCardProps";

export default function WeatherStats({ data }: WeatherDetailsCardProps) {
  const weatherStats: WeatherStatsType[] = [
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
      value: `${data.sunset}`,
      color: "text-amber-300",
    },
  ];

  return (
    <ul className="mt-8 grid h-24 grid-cols-4 rounded-2xl bg-white shadow-xl lg:mt-15 lg:bg-transparent lg:shadow-none xl:mt-22">
      {weatherStats.map((item) => {
        return <WeatherStatsItem key={item.value} data={item} />;
      })}
    </ul>
  );
}
