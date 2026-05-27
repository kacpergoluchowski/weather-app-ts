function getHour(time: string) {
  return time.split(" ")[1];
}

export function transformWeatherData(data: any) {
  const { current, location, forecast } = data;
  const [today] = forecast.forecastday;

  const hourly = today.hour.map((hour: any) => ({
    id: hour.time_epoch,
    hour: getHour(hour.time),
    temp: Math.round(hour.temp_c),
    img: hour.condition.icon,
    alt: hour.condition.text,
    rainChance: hour.chance_of_rain,
  }));

  return {
    current: {
      city: location.name,
      date: location.localtime,
      temperature: Math.round(current.temp_c),
      feelsLike: Math.round(current.feelslike_c),
      description: current.condition.text,
      icon: current.condition.icon,
      iconAlt: current.condition.text,
      humidity: current.humidity,
      wind: Math.round(current.wind_kph),
      uv: current.uv,
      visibility: current.vis_km,
      pressure: current.pressure_mb,
      sunset: today.astro.sunset,
      airQuality: current.air_quality,
    },

    hourly,

    weekly: forecast.forecastday.map((day: any) => ({
      id: day.date_epoch,
      day: day.date,
      maxTemp: Math.round(day.day.maxtemp_c),
      minTemp: Math.round(day.day.mintemp_c),
      icon: day.day.condition.icon,
      description: day.day.condition.text,
      precipitation: day.day.totalprecip_mm,
      wind: Math.round(day.day.maxwind_kph),
    })),

    charts: {
      temperature: hourly.map((hour: any) => ({
        time: hour.hour,
        temperature: hour.temp,
      })),

      precipitation: hourly.map((hour: any) => ({
        time: hour.hour,
        precipitation: hour.rainChance,
      })),
    },
  };
}