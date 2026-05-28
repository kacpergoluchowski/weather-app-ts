export type WeeklyForecastItemData = {
  id: number;
  day: string;
  icon: string;
  description?: string;
  maxTemp: number;
  minTemp: number;
};

export type WeeklyForecastItemProps = {
  data: WeeklyForecastItemData;
};