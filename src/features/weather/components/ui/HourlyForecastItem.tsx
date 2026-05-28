import type { HourlyForecastItemProps } from "../../../../types/HourlyForecastItemProps";
import { getWeatherIconUrl } from "../../utils/getWeatherIconUrl";

export default function HourlyForecastItem({ data }: HourlyForecastItemProps) {
  const { hour, img, temp } = data;

  const iconSrc = getWeatherIconUrl(img);

  return (
    <li className="mt-1 flex w-14 shrink-0 flex-col items-center gap-1 rounded-xl py-2 lg:w-22 lg:gap-2">
      <p className="text-[10px] lg:text-sm">{hour}</p>

      <img
        src={iconSrc}
        alt={`Pogoda ${hour}`}
        className="max-w-10 lg:max-w-14"
      />

      <p className="font-semibold lg:text-2xl">{temp}°</p>
    </li>
  );
}
