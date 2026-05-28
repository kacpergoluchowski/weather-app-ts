import { ChevronRight } from "lucide-react";
import HourlyForecastItem from "../ui/HourlyForecastItem";
import ScrollButton from "../ui/ScrollButton";
import { useHorizontalScroll } from "../../../../hooks/useHorizontalScroll";
import type { HourlyForecastProps } from "../../../../types/HourlyForecastProps";

const SCROLL_AMOUNT = 250;

export default function HourlyForecast({ data = [] }: HourlyForecastProps) {
  const { scrollRef, scrollState, canOverflow, scrollByAmount } = useHorizontalScroll<HTMLUListElement>();

  const canScrollLeft = canOverflow && scrollState !== "start";
  const canScrollRight = canOverflow && scrollState !== "end";

  return (
    <section className="mx-6 mt-8 rounded-2xl px-4 py-2 shadow-xl lg:mx-0 lg:mt-2">
      <div className="flex justify-between lg:hidden">
        <h2 className="text-[10px] font-semibold">Prognoza godzinowa</h2>

        <button
          type="button"
          className="flex items-center gap-1 text-[9px] text-gray-500"
        >
          Pokaż więcej
          <ChevronRight className="size-2.5 text-gray-500" aria-hidden="true" />
        </button>
      </div>

      <div className="relative">
        {canScrollLeft && (
          <ScrollButton
            direction="left"
            onClick={() => scrollByAmount(-SCROLL_AMOUNT)}
          />
        )}

        <ul
          ref={scrollRef}
          aria-label="Prognoza godzinowa"
          className="flex gap-2 overflow-x-auto xl:overflow-x-hidden"
        >
          {data.map((item) => (
            <HourlyForecastItem key={item.id} data={item} />
          ))}
        </ul>

        {canScrollRight && (
          <ScrollButton
            direction="right"
            onClick={() => scrollByAmount(SCROLL_AMOUNT)}
          />
        )}
      </div>
    </section>
  );
}
