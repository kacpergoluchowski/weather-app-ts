import { Plus } from "lucide-react";

type AddFavoriteLocationCardProps = {
  onClick?: () => void;
};

export default function AddFavoriteLocationCard({
  onClick,
}: AddFavoriteLocationCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex min-h-[320px] flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-300 bg-white p-6 transition hover:border-blue-400 hover:bg-blue-50"
    >
      <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-slate-100 transition group-hover:bg-blue-100">
        <Plus className="size-8 text-slate-500 group-hover:text-blue-500" />
      </div>

      <h3 className="text-lg font-semibold text-slate-900">
        Dodaj lokalizację
      </h3>

      <p className="mt-2 max-w-[220px] text-center text-sm text-slate-500">
        Dodaj nowe miasto do ulubionych i śledź jego pogodę.
      </p>
    </button>
  );
}