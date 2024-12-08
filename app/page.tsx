"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from "./pages/Home";

export default function Page() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}
