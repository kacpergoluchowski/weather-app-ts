import ForecastTable from "../features/forecast/components/layout/ForecastTable";
import StrongestWindCard from "../features/forecast/components/layout/StrongestWindCard";
import WeeklyRainCard from "../features/forecast/components/layout/WeeklyRainCard";
import WeeklySummaryCard from "../features/forecast/components/layout/WeeklySummaryCard";

export default function ForecastPage() {
    return (
        <section className="mx-6">
            <ForecastTable />
            <WeeklySummaryCard />
            <WeeklyRainCard />
            <StrongestWindCard />
        </section>
    )
}