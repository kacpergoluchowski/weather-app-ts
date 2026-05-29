import { useOutletContext } from "react-router-dom";
import ForecastTable from "../features/forecast/components/layout/ForecastTable";
import StrongestWindCard from "../features/forecast/components/layout/StrongestWindCard";
import WeeklyRainCard from "../features/forecast/components/layout/WeeklyRainCard";
import WeeklySummaryCard from "../features/forecast/components/layout/WeeklySummaryCard";
import { getWeeklySummary } from "../utils/getWeeklySummary";
import type { ForecastPageContext } from "../types/context/ForecastPageContext";

export default function ForecastPage() {
  const { weather } = useOutletContext<ForecastPageContext>();

  const weeklyData = weather.weekly.slice(0, 7);
  const weeklySummaryData = getWeeklySummary(weeklyData);

  return (
    <section className="mx-6 pb-3">
      <ForecastTable data={weeklyData} />
      <WeeklySummaryCard data={weeklySummaryData} />
      <div className="lg:flex gap-3">
        <WeeklyRainCard data={weeklyData} />
        <StrongestWindCard data={weeklyData} />
      </div>
    </section>
  );
}
