import { useCallback, useEffect, useRef, useState } from "react";

const SCROLL_END_OFFSET = 5;

export function useHorizontalScroll<T extends HTMLElement>() {
  const scrollRef = useRef<T | null>(null);

  const [canScrollLeft, setCanScrollLeft] =
    useState(false);

  const [canScrollRight, setCanScrollRight] =
    useState(false);

  const updateScrollState = useCallback(() => {
    const element = scrollRef.current;

    if (!element) return;

    const hasOverflow =
      element.scrollWidth > element.clientWidth;

    if (!hasOverflow) {
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }

    const isAtStart =
      element.scrollLeft <= 0;

    const isAtEnd =
      element.scrollLeft + element.clientWidth >=
      element.scrollWidth - SCROLL_END_OFFSET;

    setCanScrollLeft(!isAtStart);
    setCanScrollRight(!isAtEnd);
  }, []);

  const scrollByAmount = useCallback(
    (amount: number) => {
      scrollRef.current?.scrollBy({
        left: amount,
        behavior: "smooth",
      });
    },
    [],
  );

  useEffect(() => {
    const element = scrollRef.current;

    if (!element) return;

    updateScrollState();

    element.addEventListener(
      "scroll",
      updateScrollState,
    );

    window.addEventListener(
      "resize",
      updateScrollState,
    );

    return () => {
      element.removeEventListener(
        "scroll",
        updateScrollState,
      );

      window.removeEventListener(
        "resize",
        updateScrollState,
      );
    };
  }, [updateScrollState]);

  return {
    scrollRef,
    canScrollLeft,
    canScrollRight,
    scrollByAmount,
  };
}