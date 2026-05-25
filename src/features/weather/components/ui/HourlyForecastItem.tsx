import type { HourlyForecastItemProps } from "../../../../types/HourlyForecastItemProps";

export default function HourlyForecastItem({ data }: HourlyForecastItemProps) {
  const { hour, img: Icon, temp } = data;

  const containerStyles = `
    mt-1 flex min-w-12.5 flex-col items-center rounded-xl py-2
    gap-1 xl:w-21.5 xl:shrink-0 lg:gap-3
  `;

  const hourStyles = `
    text-[10px] lg:text-sm
  `;

  return (
    <li className={containerStyles}>
      <p className={hourStyles}>{hour}</p>

      <Icon className="w-full text-amber-300" size={35} />

      <p className="font-semibold lg:text-2xl">{temp}°</p>
    </li>
  );
}
