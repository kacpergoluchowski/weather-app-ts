import type { LucideIcon } from "lucide-react"

export type weeklyForecastItemType = {
    id: number,
    day: string,
    icon: LucideIcon,
    alt: string,
    maxTemp: number,
    minTemp: number
}