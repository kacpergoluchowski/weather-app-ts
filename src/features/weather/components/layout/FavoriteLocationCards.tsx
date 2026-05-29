import { ArrowDown, ArrowUp, Heart, MapPin, MoreVertical } from "lucide-react";

type DailyPreview = {
  day: string;
  icon: string;
  description: string;
  maxTemp: number;
  minTemp: number;
};

type FavoriteLocationCardProps = {
  city: string;
  country: string;
  currentTemp: number;
  description: string;
  icon: string;
  maxTemp: number;
  minTemp: number;
  forecast: DailyPreview[];
};

export default function FavoriteLocationCard({
  city,
  country,
  currentTemp,
  description,
  icon,
  maxTemp,
  minTemp,
  forecast,
}: FavoriteLocationCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-8 flex items-start justify-between">
        <div className="flex items-start gap-3">
          <button
            type="button"
            aria-label={`Usuń ${city} z ulubionych`}
            className="flex size-9 items-center justify-center rounded-full bg-blue-50 text-blue-500"
          >
            <Heart className="size-5 fill-blue-300 text-blue-300" />
          </button>

          <div>
            <h3 className="text-xl font-bold text-slate-950">{city}</h3>

            <p className="mt-1 flex items-center gap-1 text-sm text-slate-500">
              <MapPin className="size-3.5" />
              {country}
            </p>
          </div>
        </div>

        <button
          type="button"
          aria-label={`Opcje dla ${city}`}
          className="text-slate-500 transition hover:text-slate-950"
        >
          <MoreVertical className="size-5" />
        </button>
      </div>

      <div className="mb-8 flex items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-4">
            <p className="text-5xl font-bold tracking-tight text-slate-950">
              {currentTemp}°
            </p>

            <img
              src={`https:${icon}`}
              alt={description}
              className="size-14"
              loading="lazy"
            />
          </div>

          <p className="mt-3 text-sm text-slate-600">{description}</p>
        </div>

        <div className="space-y-3 text-sm font-semibold">
          <p className="flex items-center gap-2 text-slate-700">
            <ArrowUp className="size-4 text-red-500" />
            {maxTemp}°
          </p>

          <p className="flex items-center gap-2 text-slate-700">
            <ArrowDown className="size-4 text-blue-500" />
            {minTemp}°
          </p>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-3">
        {forecast.map(({ day, icon, description, maxTemp, minTemp }) => (
          <div key={day} className="text-center">
            <p className="mb-2 text-xs font-medium text-slate-500">{day}</p>

            <img
              src={`https:${icon}`}
              alt={description}
              className="mx-auto mb-2 size-7"
              loading="lazy"
            />

            <p className="text-xs font-semibold text-slate-700">
              {maxTemp}° / <span className="text-slate-500">{minTemp}°</span>
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}
