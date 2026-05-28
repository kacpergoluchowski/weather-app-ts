import clsx from "clsx";
import { Search, X } from "lucide-react";

import type { MobileHeaderSearchProps } from "../../types/MobileHeaderSearchProps";

export default function MobileHeaderSearch({
  isOpen,
  onOpen,
  onClose,
}: MobileHeaderSearchProps) {
  return (
    <form
      role="search"
      onSubmit={(event) => event.preventDefault()}
      className={clsx(
        "absolute right-4 top-4 flex items-center overflow-hidden rounded-full shadow-sm backdrop-blur-md transition-all duration-300 lg:hidden",
        isOpen ? "left-4 w-auto px-3" : "w-11 px-0",
      )}
    >
      <label htmlFor="mobile-city-search" className="sr-only">
        Wyszukaj miasto
      </label>

      <button
        type="button"
        aria-label={isOpen ? "Wyszukiwarka" : "Otwórz wyszukiwarkę"}
        onClick={onOpen}
        className="flex size-11 shrink-0 items-center justify-center rounded-full"
      >
        <Search className="size-5" aria-hidden="true" />
      </button>

      <input
        id="mobile-city-search"
        name="city"
        type="text"
        placeholder="Wyszukaj miasto..."
        autoComplete="off"
        className={clsx(
          "min-w-0 flex-1 bg-transparent text-sm font-medium transition-all duration-300 focus:outline-none",
          isOpen ? "w-full opacity-100" : "w-0 opacity-0",
        )}
      />

      {isOpen && (
        <button
          type="button"
          aria-label="Zamknij wyszukiwarkę"
          onClick={onClose}
          className="flex size-9 shrink-0 items-center justify-center rounded-full"
        >
          <X className="size-4.5" aria-hidden="true" />
        </button>
      )}
    </form>
  );
}
