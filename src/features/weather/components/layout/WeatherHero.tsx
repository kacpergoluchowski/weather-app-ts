import type { WeatherHeroProps } from "../../../../types/weather/WeatherHeroProps";
import WeatherStats from "./WeatherStats";

export default function WeatherHero({ data }: WeatherHeroProps) {
  const weatherStatsData = {
    humidity: data.humidity,
    wind: data.wind,
    uv: data.uv,
    sunset: data.sunset,
  };

  return (
    <section
      aria-label="Aktualna pogoda"
      className="relative h-75 bg-cover bg-center bg-no-repeat lg:my-2 lg:rounded-4xl lg:border-2 lg:border-gray-100 xl:h-90"
      style={{
        backgroundImage: "url(/weather-backgrounds/sunny.png)",
      }}
    >
      <div className="px-6 py-22 lg:px-12 lg:pt-8">
        <h1 className="flex items-center gap-2 text-7xl font-medium xl:text-8xl">
          {data.temperature}°
        </h1>

        <p className="mt-2 font-medium lg:text-2xl">{data.description}</p>

        <p className="text-gray-600 xl:mt-1 xl:text-xl">
          Odczuwalna {data.feelsLike}°
        </p>

        <div className="mx-auto -mt-5 xl:-mt-10">
          <WeatherStats data={weatherStatsData} />
        </div>
      </div>
    </section>
  );
}
