import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/layout/Header";
import DesktopSidebar from "../components/layout/DesktopSidebar";
import MobileNavbar from "../components/layout/MobileNavbar";

export default function AppLayout() {
  const { pathname } = useLocation();

  const headerData = pathname === "/"
    ? {
      title: "Kielce",
      subtitle: "25 maj 2026, 07:48"
    } : {
      title: "Prognoza tygodniowa",
      subtitle: "Kielce, Polska"
    }

  return (
    <div className="flex gap-5 pb-22 lg:pb-5 2xl:pb-0">
      <DesktopSidebar />
      <div className="w-full xl:w-5/6">
        <Header title={headerData.title} subtitle={headerData.subtitle} />
        <Outlet />
      </div>
      <MobileNavbar />
    </div>
  );
}
