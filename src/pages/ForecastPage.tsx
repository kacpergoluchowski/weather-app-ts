import { useOutletContext } from "react-router-dom";

import ForecastTable from "../features/forecast/components/layout/ForecastTable";
import StrongestWindCard from "../features/forecast/components/layout/StrongestWindCard";
import WeeklyRainCard from "../features/forecast/components/layout/WeeklyRainCard";
import WeeklySummaryCard from "../features/forecast/components/layout/WeeklySummaryCard";

import type { ForecastTableItemData } from "../types/ForecastTableItemData";

type ForecastPageContext = {
  weather: {
    weekly: ForecastTableItemData[];
  };
};

export default function ForecastPage() {
  const { weather } = useOutletContext<ForecastPageContext>();

  const weeklyData = weather.weekly.slice(0, 7);

  const maxTempDay = weeklyData.reduce((max, day) =>
    day.maxTemp > max.maxTemp ? day : max,
  );

  const minTempDay = weeklyData.reduce((min, day) =>
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
      <ForecastTable data={weeklyData} />
      <WeeklySummaryCard data={weeklySummaryData} />
      <WeeklyRainCard data={weeklyData} />
      <StrongestWindCard data={weeklyData} />
    </section>
  );
}