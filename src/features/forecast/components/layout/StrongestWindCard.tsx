import { ChevronRight, Wind } from "lucide-react";

export default function StrongestWindCard() {
  const windData = [
    { day: "Pn", speed: 12 },
    { day: "Wt", speed: 15 },
    { day: "Śr", speed: 20 },
    { day: "Cz", speed: 17 },
    { day: "Pt", speed: 14 },
    { day: "So", speed: 10 },
    { day: "Nd", speed: 13 },
  ];

  const strongestWind = Math.max(
    ...windData.map((item) => item.speed),
  );

  return (
    <section className="mx-auto mt-3 rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-2xl bg-sky-50">
            <Wind
              size={22}
              aria-hidden="true"
              className="text-sky-500"
            />
          </div>

          <h2 className="text-base font-semibold text-slate-950">
            Najsilniejszy wiatr
          </h2>
        </div>
      </div>

      <div className="rounded-3xl bg-green-400/10 p-4">
        <p className="text-base font-semibold text-green-500">
          Środa
        </p>

        <div className="mt-2 flex items-end gap-1">
          <span className="text-5xl font-bold text-slate-950">
            20
          </span>

          <span className="text-lg text-slate-600">
            km/h
          </span>
        </div>

        <p className="mt-2 text-sm text-slate-500">
          Najmocniejsze podmuchy w tygodniu
        </p>
      </div>

      <div className="mt-5 flex items-end justify-between gap-2">
        {windData.map((item) => {
          const isActive =
            item.speed === strongestWind;

          const height = item.speed * 3;

          return (
            <div
              key={item.day}
              className="flex flex-col items-center gap-2"
            >
              <p
                className={`text-xs font-medium ${
                  isActive
                    ? "text-green-600"
                    : "text-slate-500"
                }`}
              >
                {item.day}
              </p>

              <div className="flex h-20 items-end">
                <div
                  className={`w-4 rounded-full ${
                    isActive
                      ? "bg-green-500"
                      : "bg-green-200"
                  }`}
                  style={{
                    height: `${height}px`,
                  }}
                />
              </div>

              <p
                className={`text-[10px] font-medium ${
                  isActive
                    ? "text-sky-600"
                    : "text-slate-500"
                }`}
              >
                {item.speed}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}