import clsx from "clsx";
import type { WeatherStatsItemProps } from "../../../../types/weather/WeatherStatsItemProps";

export default function WeatherStatsItem({ data }: WeatherStatsItemProps) {
  const { icon: Icon, label, value, color } = data;

  return (
    <li className="flex flex-col justify-center px-5 lg:flex-row lg:items-center lg:gap-8">
      <Icon
        aria-hidden="true"
        className={clsx("size-5 lg:size-8 xl:size-10", color)}
      />

      <div>
        <p className="my-1 text-[10px] text-gray-500 lg:text-sm xl:text-base xl:text-black">
          {label}
        </p>

        <p className="text-xs font-medium lg:text-[17px] xl:text-xl">
          {value}
        </p>
      </div>
    </li>
  );
}