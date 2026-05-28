export type WeatherHeroProps = {
  data: {
    city: string;
    temperature: number;
    feelsLike: number;
    description: string;
    icon: string;
    humidity: number;
    wind: number;
    uv: number;
    sunset: string;
  };
};