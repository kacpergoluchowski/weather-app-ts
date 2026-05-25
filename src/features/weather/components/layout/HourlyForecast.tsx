import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Sun } from "lucide-react";

import HourlyForecastItem from "../ui/HourlyForecastItem";

type ScrollDirection = "left" | "right";
type ScrollState = "start" | "middle" | "end";

type ScrollButtonProps = {
  direction: ScrollDirection;
  onClick: () => void;
};

const SCROLL_AMOUNT = 250;

function ScrollButton({ direction, onClick }: ScrollButtonProps) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;

  const label =
    direction === "left"
      ? "Przewiń prognozę godzinową w lewo"
      : "Przewiń prognozę godzinową w prawo";

  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`absolute top-1/2 z-40 hidden -translate-y-1/2 items-center justify-center rounded-full border border-gray-100 bg-white p-3 shadow-md xl:flex ${
        direction === "left" ? "left-0" : "right-0"
      }`}
    >
      <Icon size={26} aria-hidden="true" />
    </button>
  );
}

export default function HourlyForecast() {
  const hourlyForecastMockData = [
    {
      id: 1,
      hour: "09:00",
      img: Sun,
      alt: "Słonecznie",
      temp: 21,
    },
    {
      id: 2,
      hour: "10:00",
      img: Sun,
      alt: "Słonecznie",
      temp: 23,
    },
  ];
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
    <section className="z-100 mx-6 mt-8 rounded-2xl px-4 py-2 shadow-xl lg:mx-0 xl:mt-3">
      <div className="flex justify-between xl:hidden">
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
