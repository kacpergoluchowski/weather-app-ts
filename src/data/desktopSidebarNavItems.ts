import { Calendar, Heart, House } from "lucide-react";
import type { NavItem } from "../types/navigation/NavItem";

export const navItems: NavItem[] = [
  { id: 0, icon: House, label: "Dzisiaj", path: "/" },
  { id: 1, icon: Calendar, label: "Kalendarz", path: "/forecast" },
  { id: 2, icon: Heart, label: "Ulubione lokalizacje", path: "/favorites" }
];