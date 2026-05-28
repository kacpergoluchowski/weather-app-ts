import { ChevronRight } from "lucide-react";
import ForecastTableItem from "../ui/ForecastTableItem";

import type { ForecastTableProps } from "../../../../types/ForecastTableProps";

export default function ForecastTable({
  data = [],
}: ForecastTableProps) {
  return (
    <section className="mx-auto mt-3 rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-md font-semibold text-slate-950">
          Prognoza na 7 dni
        </h2>

        <button
          type="button"
          className="flex items-center gap-1 text-sm font-medium text-blue-600"
        >
          Więcej

          <ChevronRight size={15} />
        </button>
      </div>

      <ul className="divide-y divide-slate-100">
        {data.map((day) => (
          <ForecastTableItem
            key={day.id}
            data={day}
          />
        ))}
      </ul>
    </section>
  );
}