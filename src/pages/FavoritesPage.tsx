import AddFavoriteLocationCard from "../features/weather/components/ui/AddFavoriteLocationCard";
import FavoriteLocationWeatherCard from "../features/weather/components/ui/FavoriteLocationWeatherCard";

const favoriteCities = [
  "Warszawa",
  "Berlin",
  "Oslo",
  "Amsterdam",
  "Londyn",
  "Moskwa",
];

export default function FavoritesPage() {
  return (
    <section className="mx-6 mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3 pb-3">
      {" "}
      {favoriteCities.map((city) => (
        <FavoriteLocationWeatherCard key={city} city={city} />
      ))}
        <AddFavoriteLocationCard />

    </section>
  );
}
