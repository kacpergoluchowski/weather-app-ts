import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import type { QueryProviderProps } from "../types/QueryProviderProps";

const queryClient = new QueryClient();

export default function QueryProvider({ children }: QueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}