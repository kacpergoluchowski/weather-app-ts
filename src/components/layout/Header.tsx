import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ChevronDown, Menu } from "lucide-react";
import clsx from "clsx";

import type { HeaderProps } from "../../types/HeaderProps";
import MobileHeaderSearch from "../ui/MobileHeaderSearch";

export default function Header({ title, subtitle }: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { pathname } = useLocation();

  const isHomePage = pathname === "/";

  return (
    <header
      className={clsx(
        "z-20 flex w-full items-center justify-between p-4 xl:py-4 xl:pl-14",
        isHomePage ? "absolute lg:static" : "static"
      )}
    >
      <div
        className={clsx(
          "flex gap-6 transition-all duration-300",
          isSearchOpen ? "pointer-events-none opacity-0" : "opacity-100"
        )}
      >
        <button
          type="button"
          aria-label="Otwórz menu"
          className="rounded-full p-1.5 xl:hidden"
        >
          <Menu size={25} aria-hidden="true" />
        </button>

        <div className="flex flex-col font-medium lg:gap-1">
          <h1 className="flex items-center gap-2 text-base font-bold lg:text-2xl">
            {title}
            <ChevronDown size={20} aria-hidden="true" />
          </h1>

          {subtitle && (
            <p className="text-xs text-gray-500 lg:text-xl">{subtitle}</p>
          )}
        </div>
      </div>

      <MobileHeaderSearch
        isOpen={isSearchOpen}
        onOpen={() => setIsSearchOpen(true)}
        onClose={() => setIsSearchOpen(false)}
      />
    </header>
  );
}