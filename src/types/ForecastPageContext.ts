import type { ForecastTableItemData } from "./ForecastTableItemData";

export type ForecastPageContext = {
  weather: {
    weekly: ForecastTableItemData[];
  };
};