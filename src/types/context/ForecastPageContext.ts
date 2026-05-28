import type { ForecastTableItemData } from "../forecast/ForecastTableItemData";

export type ForecastPageContext = {
  weather: {
    weekly: ForecastTableItemData[];
  };
};