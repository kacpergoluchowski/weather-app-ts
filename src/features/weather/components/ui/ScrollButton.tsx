import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

import type { ScrollButtonProps } from "../../../../types/ScrollButtonsProps";

const scrollButtonConfig = {
  left: {
    icon: ChevronLeft,
    label: "Przewiń prognozę godzinową w lewo",
    position: "left-0",
  },

  right: {
    icon: ChevronRight,
    label: "Przewiń prognozę godzinową w prawo",
    position: "right-0",
  },
};

export default function ScrollButton({
  direction,
  onClick,
}: ScrollButtonProps) {
  const { icon: Icon, label, position } = scrollButtonConfig[direction];

  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={clsx(
        "absolute top-1/2 z-40 hidden -translate-y-1/2 items-center justify-center rounded-full border border-gray-100 bg-white p-3 shadow-md xl:flex",
        position,
      )}
    >
      <Icon size={26} aria-hidden="true" />
    </button>
  );
}
