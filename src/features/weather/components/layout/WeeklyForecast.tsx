import { ChevronRight } from "lucide-react";
import WeeklyForecastItem from "../ui/WeeklyForecastItem";
import type { WeeklyForecastProps } from "../../../../types/WeeklyForecastProps";

export default function WeeklyForecast({ data = [] }: WeeklyForecastProps) {
  return (
    <section className="mx-6 mt-4 h-min rounded-2xl px-4 py-2 shadow-xl lg:hidden">
      <div className="mb-3 flex justify-between">
        <h2 className="text-[clamp(10px,1.89vw+3.96px,20px)] font-semibold">
          Prognoza na 7 dni
        </h2>

        <button
          type="button"
          className="flex items-center gap-1 text-[clamp(9px,1.13vw+5.38px,15px)] text-gray-500"
        >
          Pokaż więcej
          <ChevronRight
            size={10}
            aria-hidden="true"
            className="text-gray-500"
          />
        </button>
      </div>

      <ul>
        {data.map((item) => (
          <WeeklyForecastItem key={item.id} data={item} />
        ))}
      </ul>
    </section>
  );
}
