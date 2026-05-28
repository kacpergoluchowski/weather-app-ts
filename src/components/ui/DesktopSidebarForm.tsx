import { Search } from "lucide-react";

export default function DesktopSidebarForm() {
  return (
    <form
      role="search"
      className="relative mx-auto my-6 w-4/5"
    >
      <label htmlFor="desktop-city-search" className="sr-only">
        Wyszukaj miasto
      </label>

      <Search
        className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-gray-400"
        aria-hidden="true"
      />

      <input
        id="desktop-city-search"
        name="city"
        type="text"
        placeholder="Wyszukaj miasto..."
        autoComplete="off"
        className="w-full rounded-xl bg-white py-3.5 pl-12 text-[clamp(0.875rem,0.5vw+0.4rem,1rem)] focus:outline-none focus:ring-2 focus:ring-blue-500/20"
      />
    </form>
  );
}
