export type TransformedWeatherData = {
  current: {
    city: string;
    date: string;
    temperature: number;
    feelsLike: number;
    description: string;
    icon: string;
    humidity: number;
    wind: number;
    uv: number;
    sunset: string;
    visibility: number;
    pressure: number;

    airQuality: {
      "us-epa-index": number;
      pm2_5: number;
    };
  };

  hourly: {
    id: number;
    hour: string;
    img: string;
    alt: string;
    temp: number;
    rainChance: number;
  }[];

  weekly: {
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

  charts: {
    temperature: {
      time: string;
      temperature: number;
    }[];

    precipitation: {
      time: string;
      precipitation: number;
    }[];
  };
};