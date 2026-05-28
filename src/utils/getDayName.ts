export function getDayName(date: string) {
  const targetDate = new Date(date);

  const today = new Date();

  const isToday =
    targetDate.getDate() === today.getDate() &&
    targetDate.getMonth() === today.getMonth() &&
    targetDate.getFullYear() === today.getFullYear();

  if (isToday) {
    return "Dzisiaj";
  }

  const dayName = new Intl.DateTimeFormat("pl-PL", {
    weekday: "long",
  }).format(targetDate);

  return dayName.charAt(0).toUpperCase() + dayName.slice(1);
}