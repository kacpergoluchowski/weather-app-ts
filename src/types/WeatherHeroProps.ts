export type WeatherHeroProps = {
  data: {
    city: string;
    temperature: number;
    feelsLike: number;
    description: string;
    icon: string;
  };
};