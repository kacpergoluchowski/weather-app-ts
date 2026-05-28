import { Calendar, House, Radar, Settings, Wind } from "lucide-react";
import type { MobileNavItem } from "../types/navigation/MobileNavItem";

export const navItems: MobileNavItem[] = [
  {
    id: 0,
    icon: House,
    label: "Dzisiaj",
    path: "/",
  },
  {
    id: 1,
    icon: Calendar,
    label: "Prognoza",
    path: "/forecast",
  },
  {
    id: 2,
    icon: Radar,
    label: "Radar",
    path: "/radar",
  },
  {
    id: 3,
    icon: Wind,
    label: "Jakość",
    path: "/air-quality",
  },
  {
    id: 4,
    icon: Settings,
    label: "Ustawienia",
    path: "/settings",
  }
];