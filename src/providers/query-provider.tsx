/*
 * File: query-provider.tsx
 * Project: new
 * Author: Pedro Farias
 * Created: 2026-04-16
 * 
 * Last Modified: Thu Apr 16 2026
 * Modified By: Pedro Farias
 */

"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
