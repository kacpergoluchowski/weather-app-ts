export type WeeklyForecastItemType = {
  id: number;
  day: string;
  icon: string;
  maxTemp: number;
  minTemp: number;
};

export type WeeklyForecastProps = {
  data?: WeeklyForecastItemType[];
};