import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/layout/Header";
import DesktopSidebar from "../components/layout/DesktopSidebar";
import MobileNavbar from "../components/layout/MobileNavbar";
import { useState } from "react";
import { useWeather } from "../features/weather/hooks/useWeather";
import { transformWeatherData } from "../features/weather/utils/transformWeatherData";

export default function AppLayout() {
  const [city, setCity] = useState("Kielce");
  const { data, isLoading, isError } = useWeather(city);
  const { pathname } = useLocation();

  if(isLoading) return <main> Ładowanie... </main>
  if(isError) return <main> {isError} </main>

  const weather = transformWeatherData(data);

  const headerData = pathname === "/"
    ? {
      title: weather.current.city,
      subtitle: "25 maj 2026, 07:48"
    } : {
      title: "Prognoza tygodniowa",
      subtitle: weather.current.city
    }

  return (
    <div className="flex gap-5 pb-22 lg:pb-5 2xl:pb-0">
      <DesktopSidebar />
      <div className="w-full xl:w-5/6">
        <Header title={headerData.title} subtitle={headerData.subtitle} />
        <Outlet context={{weather, city, setCity}}/>
      </div>
      <MobileNavbar />
    </div>
  );
}
