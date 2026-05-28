export type WeeklyRainCardData = {
  id: number;
  day: string;
  precipitation: number;
};

export type WeeklyRainCardProps = {
  data?: WeeklyRainCardData[];
};