export type AirQualityCardProps = {
  data: {
    aqi: number;
    status: string;
    pollutant: string;
    value: number;
  };
};