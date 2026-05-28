import { useCallback, useEffect, useRef, useState } from "react";

import type { ScrollState } from "../types/ScrollState";

const SCROLL_END_OFFSET = 5;

export function useHorizontalScroll<T extends HTMLElement>() {
  const scrollRef = useRef<T | null>(null);
  const [scrollState, setScrollState] = useState<ScrollState>("start");
  const [canOverflow, setCanOverflow] = useState(false);

  const updateScrollState = useCallback(() => {
    const element = scrollRef.current;
    if (!element) return;

    const hasOverflow = element.scrollWidth > element.clientWidth;
    const isAtStart = element.scrollLeft <= 0;
    const isAtEnd =
      element.scrollLeft + element.clientWidth >=
      element.scrollWidth - SCROLL_END_OFFSET;

    setCanOverflow(hasOverflow);

    if (!hasOverflow || isAtStart) {
      setScrollState("start");
      return;
    }

    if (isAtEnd) {
      setScrollState("end");
      return;
    }

    setScrollState("middle");
  }, []);

  const scrollByAmount = useCallback((amount: number) => {
    scrollRef.current?.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    updateScrollState();

    element.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);

    return () => {
      element.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  return {
    scrollRef,
    scrollState,
    canOverflow,
    scrollByAmount,
  };
}