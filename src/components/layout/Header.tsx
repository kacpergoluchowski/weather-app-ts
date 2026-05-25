import { useState } from "react";
import { ChevronDown, Menu, Search, X } from "lucide-react";

import type { HeaderProps } from "../../types/HeaderProps";

export default function Header({ title, subtitle }: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="absolute z-20 flex w-full items-center justify-between p-4 lg:relative xl:py-4 xl:pl-14">
      <div
        className={`flex gap-6 transition-all duration-300 ${
          isSearchOpen ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <button
          type="button"
          aria-label="Otwórz menu"
          className="rounded-full p-1.5 xl:hidden"
        >
          <Menu size={25} aria-hidden="true" />
        </button>

        <div className="flex flex-col font-medium lg:gap-1">
          <h1 className="flex items-center gap-2 text-base font-semibold lg:text-2xl">
            {title}

            <ChevronDown size={20} aria-hidden="true" />
          </h1>

          {subtitle && (
            <p className="text-xs text-gray-500 lg:text-xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <form
        role="search"
        className={`absolute right-4 top-4 flex items-center overflow-hidden rounded-full shadow-sm backdrop-blur-md transition-all duration-300 lg:hidden ${
          isSearchOpen ? "left-4 w-auto px-3" : "w-11 px-0"
        }`}
      >
        <label htmlFor="mobile-city-search" className="sr-only">
          Wyszukaj miasto
        </label>

        <button
          type="button"
          aria-label="Otwórz wyszukiwarkę"
          onClick={() => setIsSearchOpen(true)}
          className="flex size-11 shrink-0 items-center justify-center rounded-full"
        >
          <Search size={20} aria-hidden="true" />
        </button>

        <input
          id="mobile-city-search"
          name="city"
          type="text"
          placeholder="Wyszukaj miasto..."
          autoComplete="off"
          className={`min-w-0 flex-1 bg-transparent text-sm font-medium outline-none transition-all duration-300 ${
            !isSearchOpen ? "w-0 opacity-0" : "w-full opacity-100"
          }`}
        />

        {isSearchOpen && (
          <button
            type="button"
            aria-label="Zamknij wyszukiwarkę"
            onClick={() => setIsSearchOpen(false)}
            className="flex size-9 shrink-0 items-center justify-center rounded-full"
          >
            <X size={18} aria-hidden="true" />
          </button>
        )}
      </form>
    </header>
  );
}