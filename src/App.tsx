/**
 * @author Goutam Shetty <goutam.shetty1@gmail.com>
 * @description App
 */

import React, { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { IconProvider } from "@icon-park/react/lib/runtime";

import "./App.css";
import FallBack from "./components/widget/FallBack";
import ThemeProvider from "./components/theme/ThemeContext";
import { IconConfig } from "./constants/config";
import { makeServer } from "./mirageServer";

makeServer();

const Dashboard = lazy(() =>
  import("./components/dashboard/Dashboard").catch((error) => {
    console.error("Error loading Dashboard:", error);
    throw error;
  })
);

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <IconProvider value={IconConfig}>
          <Suspense fallback={<FallBack />}>
            <Dashboard />
          </Suspense>
        </IconProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
