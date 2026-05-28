import { useMemo, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "../components/layout/Header";
import DesktopSidebar from "../components/layout/DesktopSidebar";
import MobileNavbar from "../components/layout/MobileNavbar";

import { useWeather } from "../features/weather/hooks/useWeather";
import { transformWeatherData } from "../features/weather/utils/transformWeatherData";

export default function AppLayout() {
  const [city, setCity] = useState("Kielce");
  const { data, isLoading, isError, error } = useWeather(city);
  const { pathname } = useLocation();

  const weather = useMemo(() => {
    if (!data) return null;

    return transformWeatherData(data);
  }, [data]);

  const outletContext = useMemo(
    () => ({
      weather,
      city,
      setCity,
    }),
    [weather, city],
  );

  if (isLoading) {
    return <main>Ładowanie...</main>;
  }

  if (isError || !weather) {
    return <main>{error?.message ?? "Nie udało się pobrać pogody."}</main>;
  }

  const isHomePage = pathname === "/";

  const headerData = isHomePage
    ? {
        title: weather.current.city,
        subtitle: "25 maj 2026, 07:48",
      }
    : {
        title: "Prognoza tygodniowa",
        subtitle: weather.current.city,
      };

  return (
    <div className="flex gap-5 pb-22 lg:pb-5 2xl:pb-0">
      <DesktopSidebar />

      <div className="w-full xl:w-5/6">
        <Header title={headerData.title} subtitle={headerData.subtitle} />

        <Outlet context={outletContext} />
      </div>

      <MobileNavbar />
    </div>
  );
}