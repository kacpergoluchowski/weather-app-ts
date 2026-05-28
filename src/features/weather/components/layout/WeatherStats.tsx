import type { WeatherDetailsCardProps } from "../../../../types/WeatherDetailsCardProps";
import { getWeatherStats } from "../../utils/getWeatherStats";

import WeatherStatsItem from "../ui/WeatherStatsItem";

export default function WeatherStats({ data }: WeatherDetailsCardProps) {
  const weatherStats = getWeatherStats(data);

  return (
    <ul className="mt-8 grid h-24 grid-cols-4 rounded-2xl bg-white shadow-xl lg:mt-15 lg:bg-transparent lg:shadow-none xl:mt-22">
      {weatherStats.map((item) => (
        <WeatherStatsItem key={item.label} data={item} />
      ))}
    </ul>
  );
}