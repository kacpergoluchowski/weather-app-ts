export default function HourlyForecastItem({ data }) {
  const { hour, img: Icon, temp } = data;

  const containerStyles = `
    mt-1 flex min-w-12.5 flex-col items-center rounded-xl py-2
    gap-1 xl:w-21.5 xl:shrink-0 xl:gap-2
  `;

  const hourStyles = `
    text-[10px] xl:text-sm
  `;

  return (
    <li className={containerStyles}>
      <p className={hourStyles}>{hour}</p>

      <Icon className="w-full text-amber-300" />

      <p className="font-semibold xl:text-2xl">{temp}°</p>
    </li>
  );
}
