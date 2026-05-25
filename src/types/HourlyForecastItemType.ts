import type { LucideIcon } from "lucide-react"

export type HourlyForecastItemType = {
  id: number,
  hour: string,
  img: LucideIcon,
  temp: number
}