import { Calendar, Heart, House, Settings } from "lucide-react";
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
    icon: Heart,
    label: "Ulubione",
    path: "/favorites",
  },
  {
    id: 4,
    icon: Settings,
    label: "Ustawienia",
    path: "/settings",
  }
];