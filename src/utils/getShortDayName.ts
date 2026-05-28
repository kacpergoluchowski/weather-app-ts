export function getShortDayName(date: string) {
  const targetDate = new Date(date);

  const today = new Date();

  const isToday =
    targetDate.getDate() === today.getDate() &&
    targetDate.getMonth() === today.getMonth() &&
    targetDate.getFullYear() === today.getFullYear();

  if (isToday) {
    return "Dziś";
  }

  const shortDayName = new Intl.DateTimeFormat("pl-PL", {
    weekday: "short",
  }).format(targetDate);

  return shortDayName.charAt(0).toUpperCase() +
    shortDayName.slice(1).replace(".", "");
}