import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import DesktopSidebar from "../components/layout/DesktopSidebar";
import MobileNavbar from "../components/layout/MobileNavbar";

export default function AppLayout() {
  return (
    <div className="flex gap-5">
      <DesktopSidebar />
      <div>
        <Header />
        <Outlet />
      </div>
      <MobileNavbar />
    </div>
  );
}
