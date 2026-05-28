import { Calendar, Heart, House, Radar, Settings, Wind } from "lucide-react";
import type { NavItem } from "../types/navigation/NavItem";

export const navItems: NavItem[] = [
  { id: 0, icon: House, label: "Dzisiaj", path: "/" },
  { id: 1, icon: Calendar, label: "Kalendarz", path: "/forecast" },
  { id: 2, icon: Radar, label: "Radar opadów", path: "/radar" },
  { id: 3, icon: Wind, label: "Jakość powietrza", path: "/air-quality" },
  { id: 4, icon: Heart, label: "Ulubione lokalizacje", path: "/favorites" },
  { id: 5, icon: Settings, label: "Ustawienia", path: "/settings" },
];