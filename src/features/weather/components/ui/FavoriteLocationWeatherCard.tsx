import FavoriteLocationCard from "../layout/FavoriteLocationCards";

import { useWeather } from "../../hooks/useWeather";
import { transformWeatherData } from "../../utils/transformWeatherData";

type FavoriteLocationWeatherCardProps = {
  city: string;
};

export default function FavoriteLocationWeatherCards({
  city,
}: FavoriteLocationWeatherCardProps) {
  const { data, isLoading, isError } = useWeather(city);

  if (isLoading) {
    return (
      <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-slate-500">Ładowanie...</p>
      </article>
    );
  }

  if (isError || !data) {
    return (
      <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-red-500">
          Nie udało się pobrać pogody dla {city}.
        </p>
      </article>
    );
  }

  const weather = transformWeatherData(data);
  const today = weather.weekly[0];

  const forecast = weather.weekly.slice(0, 5).map(
  (day: {
    day: string;
    icon: string;
    description: string;
    maxTemp: number;
    minTemp: number;
  }) => ({
    day: new Date(day.day).toLocaleDateString("pl-PL", {
      weekday: "short",
    }),
    icon: day.icon,
    description: day.description,
    maxTemp: day.maxTemp,
    minTemp: day.minTemp,
  }),
);

  return (
    <FavoriteLocationCard
      city={weather.current.city}
      country="Polska"
      currentTemp={weather.current.temperature}
      description={weather.current.description}
      icon={weather.current.icon}
      maxTemp={today.maxTemp}
      minTemp={today.minTemp}
      forecast={forecast}
    />
  );
}