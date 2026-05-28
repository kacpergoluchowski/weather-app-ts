import type { WeatherInfoCardProps } from "../../../../types/weather/WeatherInfoCardProps";

export default function WeatherInfoCard({
  title,
  icon: Icon,
  value,
  description,
}: WeatherInfoCardProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-950">{title}</h2>

        <Icon className="size-5.5 text-blue-900" aria-hidden="true" />
      </div>

      <p className="text-[clamp(1.875rem,1vw+1.3rem,2.25rem)] font-semibold text-slate-950">
        {value}
      </p>

      <p className="mt-2 text-sm font-medium text-slate-700">{description}</p>
    </section>
  );
}
