export function getWeatherBackground(description: string) {
  const text = description.toLowerCase();

  if (
    text.includes("sunny") ||
    text.includes("clear") ||
    text.includes("słonecznie")
  ) {
    return "/weather-backgrounds/sunny.png";
  }

  if (
    text.includes("partly cloudy") ||
    text.includes("częściowe zachmurzenie")
  ) {
    return "/weather-backgrounds/partlyCloudy.png";
  }

  if (
    text.includes("cloudy") ||
    text.includes("overcast") ||
    text.includes("pochmurno")
  ) {
    return "/weather-backgrounds/cloudy.png";
  }

  if (
    text.includes("rain") ||
    text.includes("drizzle") ||
    text.includes("deszcz")
  ) {
    return "/weather-backgrounds/rainy.png";
  }

  if (
    text.includes("snow") ||
    text.includes("śnieg")
  ) {
    return "/weather-backgrounds/snowy.png";
  }

  return "/weather-backgrounds/partlyCloudy.png";
}