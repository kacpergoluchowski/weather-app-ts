import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import HomePage from "../pages/HomePage";
import ForecastPage from "../pages/ForecastPage";
import RadarPage from "../pages/RadarPage";
import AirQualityPage from "../pages/AirQualityPage";
import FavoritesPage from "../pages/FavoritesPage";
import SettingsPage from "../pages/SettingsPage";
import NotFound from "../pages/NotFound";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "forecast",
        element: <ForecastPage />,
      },
      {
        path: "radar",
        element: <RadarPage />
      },
      {
        path: "air-quality",
        element: <AirQualityPage />
      },
      {
        path: "favorites",
        element: <FavoritesPage />
      },
      {
        path: "settings",
        element: <SettingsPage />
      }
    ],
  },
  {
    path: "*",
    element: <NotFound />
  }
]);
