export type HourlyForecastProps = {
  data: {
    id: number;
    hour: string;
    temp: number;
    img: string;
    alt: string;
    rainChance: number;
  }[];
};