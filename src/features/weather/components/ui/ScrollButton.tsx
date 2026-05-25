import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ScrollButtonProps } from "../../../../types/ScrollButtonsProps";

export default function ScrollButton({ direction, onClick }: ScrollButtonProps) {
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