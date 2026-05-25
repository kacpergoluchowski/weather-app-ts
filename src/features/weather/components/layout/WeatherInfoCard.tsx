export default function WeatherInfoCard({
  title,
  icon: Icon,
  value,
  description,
}) {
  return (
    <section className=" rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md lg:w-1/3 2xl:w-full 2xl:mx-0 2xl:mt-3">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-950">{title}</h2>

        <Icon size={22} aria-hidden="true" className="text-blue-900" />
      </div>

      <p className="text-[clamp(1.875rem,1vw+1.3rem,2.25rem)] font-semibold text-slate-950">{value}</p>

      <p className="mt-2 text-sm font-medium text-slate-700">{description}</p>
    </section>
  );
}
