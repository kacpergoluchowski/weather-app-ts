import type { HourlyForecastItemProps } from "../../../../types/HourlyForecastItemProps";

export default function HourlyForecastItem({ data }: HourlyForecastItemProps) {
  const { hour, img, alt, temp } = data;

  const iconSrc = img.startsWith("//") ? `https:${img}` : img;

  return (
    <li className="mt-1 flex min-w-12.5 flex-col items-center gap-1 rounded-xl py-2 lg:w-21.5 lg:shrink-0 lg:gap-2">
      <p className="text-[10px] lg:text-sm">{hour}</p>

      <img
        src={iconSrc}
        alt={alt}
        className="w-4/5 lg:w-3/5"
      />

      <p className="font-semibold lg:text-2xl">{temp}°</p>
    </li>
  );
}