import { Calendar, House, Radar, Settings, Wind } from "lucide-react";
import { NavLink } from "react-router-dom";
import type { MobileNavItems } from "../../types/MobileNavItems";

const navItems: MobileNavItems[] = [
  {
    icon: House,
    label: "Dzisiaj",
    path: "/",
  },
  {
    icon: Calendar,
    label: "Prognoza",
    path: "/forecast",
  },
  {
    icon: Radar,
    label: "Radar",
    path: "/radar",
  },
  {
    icon: Wind,
    label: "Jakość",
    path: "/air-quality",
  },
  {
    icon: Settings,
    label: "Ustawienia",
    path: "/settings",
  }
];

export default function MobileNavbar() {
  return (
    <nav
      aria-label="Mobilna nawigacja"
      className="fixed bottom-0 z-50 flex h-18 w-full items-center justify-around rounded-t-lg border border-gray-100 bg-white font-medium shadow-xl lg:hidden"
    >
      {navItems.map(({ icon: Icon, label, path }) => (
        <NavLink
          key={label}
          to={path}
          className={({ isActive }) =>
            `
              flex flex-col items-center gap-2
              text-[clamp(10px,3.95vw,11px)]
              transition-colors
              ${isActive ? "text-blue-500" : "text-gray-500"}
            `
          }
        >
          <Icon size={25} aria-hidden="true" />

          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
