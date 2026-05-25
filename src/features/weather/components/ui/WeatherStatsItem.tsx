import type { WeatherStatsType } from "../../../../types/WeatherStatsTypes";

type WeatherStatsItemProps = {
  data: WeatherStatsType
}

export default function WeatherStatsItem({ data }: WeatherStatsItemProps) {
    const { icon: Icon, label, value, color } = data;

  return (
    <li className="flex flex-col justify-center px-5 lg:flex-row lg:items-center lg:gap-8">
      <Icon size={20} aria-hidden="true" className={`${color} lg:size-8 xl:size-10`} />

      <div>
        <p className="my-1 text-[10px] text-gray-500 lg:text-[14px] xl:text-[16px] xl:text-black">
          {label}
        </p>

        <p className="text-[12px] font-medium lg:text-[17px] xl:text-[20px]">{value}</p>
      </div>
    </li>
  );
}
