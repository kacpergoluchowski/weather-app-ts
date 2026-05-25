import HourlyForecast from "../features/weather/components/layout/HourlyForecast";
import WeatherHero from "../features/weather/components/layout/WeatherHero";

export default function HomePage() {
  return (
    <section className="2xl:grid grid-cols-5 gap-5">
      <div className="col-span-4 lg:mx-6">
        <WeatherHero />
        <HourlyForecast />
      </div>
      <div className="hidden lg:block">
        prawa kolumna
      </div>
    </section>
  );
}
