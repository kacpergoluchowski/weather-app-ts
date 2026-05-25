import { Droplets, Sun, Sunset, Wind } from "lucide-react";
import type { WeatherStatsType } from "../../../../types/WeatherStatsTypes";
import WeatherStatsItem from "../ui/WeatherStatsItem";

export default function WeatherStats() {
  const weatherStats: WeatherStatsType[] = [
    {
      icon: Droplets,
      label: "Wilgotność",
      value: `55%`,
      color: "text-sky-300",
    },
    {
      icon: Wind,
      label: "Wiatr",
      value: `15 km/h`,
      color: "text-sky-300",
    },
    {
      icon: Sun,
      label: "Indeks UV",
      value: "3",
      color: "text-amber-300",
    },
    {
      icon: Sunset,
      label: "Zachód",
      value: "20:45",
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
