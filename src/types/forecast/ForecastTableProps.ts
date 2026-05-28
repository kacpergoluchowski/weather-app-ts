export type ForecastTableProps = {
  data: {
    id: number;
    day: string;
    date: string;
    icon: string;
    description: string;
    maxTemp: number;
    minTemp: number;
    precipitation: number;
    wind: number;
  }[];
};