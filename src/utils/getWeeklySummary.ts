import type { ForecastTableItemData } from "../types/ForecastTableItemData";

export function getWeeklySummary(data: ForecastTableItemData[]) {
  const maxTempDay = data.reduce((max, day) =>
    day.maxTemp > max.maxTemp ? day : max,
  );

  const minTempDay = data.reduce((min, day) =>
    day.minTemp < min.minTemp ? day : min,
  );

  return {
    maxTemp: maxTempDay.maxTemp,
    minTemp: minTempDay.minTemp,
    maxTempDay: maxTempDay.day,
    minTempDay: minTempDay.day,
  };
}