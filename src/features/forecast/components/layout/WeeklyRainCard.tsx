import { CloudRain } from "lucide-react";

export default function WeeklyRainCard() {
  const rainData = [
    { day: "Pn", value: 0.2 },
    { day: "Wt", value: 0 },
    { day: "Śr", value: 2.4 },
    { day: "Cz", value: 0.1 },
    { day: "Pt", value: 1.2 },
    { day: "So", value: 0 },
    { day: "Nd", value: 0.4 },
  ];

  const maxRain = Math.max(...rainData.map((item) => item.value));

  return (
    <section className="mx-auto mt-3 rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-2xl bg-blue-50">
            <CloudRain
              size={22}
              aria-hidden="true"
              className="text-blue-500"
            />
          </div>

          <h2 className="text-base font-semibold text-slate-950">
            Najwięcej opadów
          </h2>
        </div>
      </div>

      <div className="rounded-3xl bg-blue-50/70 p-4">
        <p className="text-base font-semibold text-blue-600">
          Środa
        </p>

        <div className="mt-2 flex items-end gap-1">
          <span className="text-5xl font-bold text-slate-950">
            2,4
          </span>

          <span className="text-lg text-slate-600">
            mm
          </span>
        </div>

        <p className="mt-2 text-sm text-slate-500">
          Najwięcej w tym tygodniu
        </p>
      </div>

      <div className="mt-5 flex items-end justify-between mx-4">
        {rainData.map((item) => {
          const isActive = item.value === maxRain;
          const height = item.value === 0 ? 8 : 18 + item.value * 18;

          return (
            <div
              key={item.day}
              className="flex flex-col items-center gap-2"
            >
              <p
                className={`text-xs font-medium ${
                  isActive ? "text-blue-600" : "text-slate-500"
                }`}
              >
                {item.day}
              </p>

              <div className="flex h-20 items-end">
                <div
                  className={`w-4 rounded-full ${
                    isActive ? "bg-blue-500" : "bg-blue-200"
                  }`}
                  style={{
                    height: `${height}px`,
                  }}
                />
              </div>

              <p
                className={`text-[10px] font-medium ${
                  isActive ? "text-blue-600" : "text-slate-500"
                }`}
              >
                {item.value.toString().replace(".", ",")}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}