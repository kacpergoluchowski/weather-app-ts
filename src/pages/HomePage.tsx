import { Eye, Gauge, Wind } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import AirQualityCard from "../features/weather/components/layout/AirQualityCard";
import HourlyForecast from "../features/weather/components/layout/HourlyForecast";
import WeatherHero from "../features/weather/components/layout/WeatherHero";
import WeatherInfoCard from "../features/weather/components/layout/WeatherInfoCard";
import WeeklyForecast from "../features/weather/components/layout/WeeklyForecast";
import TemperatureChart from "../features/weather/components/layout/TemperatureChart";
import PrecipitationChart from "../features/weather/components/layout/PrecipitationChart";

import { getAirQualityStatus } from "../utils/getAirQualityStatus";
import type { HomePageContext } from "../types/context/HomePageContext";

export default function HomePage() {
  const { weather } = useOutletContext<HomePageContext>();

  const airQualityIndex = weather.current.airQuality["us-epa-index"];

  const airQualityData = {
    aqi: airQualityIndex,
    status: getAirQualityStatus(airQualityIndex),
    pollutant: "PM2.5",
    value: weather.current.airQuality.pm2_5,
  };

  const weatherInfoCards = [
    {
      title: "Wiatr",
      icon: Wind,
      value: `${weather.current.wind} km/h`,
      description: "Aktualnie",
    },

    {
      title: "Widoczność",
      icon: Eye,
      value: `${weather.current.visibility} km`,
      description: "Bardzo dobra",
    },

    {
      title: "Ciśnienie",
      icon: Gauge,
      value: `${weather.current.pressure} hPa`,
      description: "Stabilne",
    },
  ];

  console.log(weather.charts);

  return (
    <section className="grid-cols-5 2xl:grid">
      <div className="col-span-4 lg:mx-6">
        <WeatherHero data={weather.current} />

        <HourlyForecast data={weather.hourly} />

        <WeeklyForecast data={weather.weekly} />

        <div className="hidden gap-4 lg:flex">
          <TemperatureChart data={weather.charts.temperature} />
          <PrecipitationChart data={weather.charts.precipitation} />
        </div>
      </div>

      <div className="hidden lg:mx-6 lg:mt-4 lg:flex lg:gap-4 2xl:mx-0 2xl:mr-6 2xl:block">
        <AirQualityCard data={airQualityData} />

        {weatherInfoCards.map((card) => (
          <WeatherInfoCard
            key={card.title}
            title={card.title}
            icon={card.icon}
            value={card.value}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}
