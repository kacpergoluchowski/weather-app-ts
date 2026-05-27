import { useQuery } from "@tanstack/react-query";

import { getWeather } from "../services/weatherApi";

export function useWeather(city: string) {
  return useQuery({
    queryKey: ["weather", city],

    queryFn: () => getWeather(city),

    enabled: Boolean(city),

    staleTime: 1000 * 60 * 10,

    retry: 1,

    refetchOnWindowFocus: false,
  });
}