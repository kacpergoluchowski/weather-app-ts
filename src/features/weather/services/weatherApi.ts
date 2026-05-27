const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const BASE_URL = "https://api.weatherapi.com/v1";

export async function getWeather(city: string) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: city,
    days: "7",
    aqi: "yes",
    alerts: "no",
  });

  const response = await fetch(
    `${BASE_URL}/forecast.json?${params}`,
  );

  if (!response.ok) {
    throw new Error("Nie udało się pobrać pogody");
  }

  return response.json();
}