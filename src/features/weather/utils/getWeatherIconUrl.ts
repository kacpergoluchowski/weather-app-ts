export function getWeatherIconUrl(icon: string) {
  return icon.startsWith("//")
    ? `https:${icon}`
    : icon;
} 