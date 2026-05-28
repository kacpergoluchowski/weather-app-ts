import { Eye, Gauge, Wind } from "lucide-react";
import AirQualityCard from "../features/weather/components/layout/AirQualityCard";
import HourlyForecast from "../features/weather/components/layout/HourlyForecast";
import WeatherHero from "../features/weather/components/layout/WeatherHero";
import WeatherInfoCard from "../features/weather/components/layout/WeatherInfoCard";
import WeeklyForecast from "../features/weather/components/layout/WeeklyForecast";
import TemperatureChart from "../features/weather/components/layout/TemperatureChart";
import PrecipitationChart from "../features/weather/components/layout/PrecipitationChart";
import { useOutletContext } from "react-router-dom";
import { getAirQualityStatus } from "../utils/getAirQualityStatus";

export default function HomePage() {
  const { weather } = useOutletContext<any>();

  const airQualityIndex = weather.current.airQuality["us-epa-index"];
  const airQualityData = {
    aqi: weather.current.airQuality["us-epa-index"],
    status: getAirQualityStatus(airQualityIndex),
    pollutant: "PM2.5",
    value: weather.current.airQuality.pm2_5,
  };

  return (
    <section className="2xl:grid grid-cols-5">
      <div className="col-span-4 lg:mx-6">
        <WeatherHero data={weather.current} />
        <HourlyForecast data={weather.hourly} />
        <WeeklyForecast data={weather.weekly} />
        <div className="hidden lg:flex gap-4">
          <TemperatureChart />
          <PrecipitationChart />
        </div>
      </div>
      <div className="hidden lg:flex lg:gap-4 lg:mt-4 lg:mx-6 2xl:block 2xl:mx-0 2xl:mr-6">
        <AirQualityCard data={airQualityData} />
        <WeatherInfoCard
          title={"Wiatr"}
          icon={Wind}
          value={"17 km/h"}
          description={"Akutalnie"}
        />
        <WeatherInfoCard
          title={"Widoczność"}
          icon={Eye}
          value={"10 km"}
          description={"Bardzo dobra"}
        />
        <WeatherInfoCard
          title={"Ciśnienie"}
          icon={Gauge}
          value={"1028 hPa"}
          description={"Stabilne"}
        />
      </div>
    </section>
  );
}
