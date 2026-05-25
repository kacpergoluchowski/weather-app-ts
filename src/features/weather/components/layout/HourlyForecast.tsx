import { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import HourlyForecastItem from "../ui/HourlyForecastItem";
import { hourlyForecastMockData } from "../../data/hourlyForecastMockData";
import ScrollButton from "../ui/ScrollButton";
import type { ScrollState } from "../../../../types/ScrollState";

const SCROLL_AMOUNT = 250;

export default function HourlyForecast() {
  const scrollRef = useRef<HTMLUListElement | null>(null);
  const [scrollState, setScrollState] = useState<ScrollState>("start");

  function updateScrollState() {
    const element = scrollRef.current;
    if (!element) return;

    const isAtStart = element.scrollLeft <= 0;
    const isAtEnd =
      element.scrollLeft + element.clientWidth >= element.scrollWidth - 5;

    if (isAtStart) {
      setScrollState("start");
      return;
    }

    if (isAtEnd) {
      setScrollState("end");
      return;
    }

    setScrollState("middle");
  }

  function scrollByAmount(amount: number) {
    scrollRef.current?.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    updateScrollState();

    element.addEventListener("scroll", updateScrollState);

    return () => {
      element.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  const canScrollLeft = scrollState !== "start";
  const canScrollRight = scrollState !== "end";

  return (
    <section className="mx-6 mt-8 rounded-2xl px-4 py-2 shadow-xl lg:mx-0 lg:mt-2 ">
      <div className="flex justify-between lg:hidden">
        <h2 className="text-[10px] font-semibold">Prognoza godzinowa</h2>

        <button
          type="button"
          className="flex items-center gap-1 text-[9px] text-gray-500"
        >
          Pokaż więcej
          <ChevronRight
            size={10}
            aria-hidden="true"
            className="text-gray-500"
          />
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
          {hourlyForecastMockData.map((item) => (
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
