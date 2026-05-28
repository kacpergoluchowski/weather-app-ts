export type WeeklySummaryCardData = {
  maxTemp: number;
  minTemp: number;
  maxTempDay: string;
  minTempDay: string;
};

export type WeeklySummaryCardProps = {
  data: WeeklySummaryCardData;
};