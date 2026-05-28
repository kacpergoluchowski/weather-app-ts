import { useOutletContext } from "react-router-dom";
import ForecastTable from "../features/forecast/components/layout/ForecastTable";
import StrongestWindCard from "../features/forecast/components/layout/StrongestWindCard";
import WeeklyRainCard from "../features/forecast/components/layout/WeeklyRainCard";
import WeeklySummaryCard from "../features/forecast/components/layout/WeeklySummaryCard";

export default function ForecastPage() {
  const { weather } = useOutletContext<any>();

  const maxTempDay = weather.weekly.reduce((max, day) =>
    day.maxTemp > max.maxTemp ? day : max,
  );

  const minTempDay = weather.weekly.reduce((min, day) =>
    day.minTemp < min.minTemp ? day : min,
  );

  const weeklySummaryData = {
    maxTemp: maxTempDay.maxTemp,
    minTemp: minTempDay.minTemp,
    maxTempDay: maxTempDay.day,
    minTempDay: minTempDay.day,
  };

  return (
    <section className="mx-6">
      <ForecastTable data={weather.weekly} />
      <WeeklySummaryCard data={weeklySummaryData}/>
      <WeeklyRainCard data={weather.weekly} />
      <StrongestWindCard data={weather.weekly} />
    </section>
  );
}
