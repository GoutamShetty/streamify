/**
 * @author Goutam Shetty <goutam.shetty1@gmail.com>
 * @description App
 */

import React, { Suspense, lazy } from "react";
import { ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  DEFAULT_ICON_CONFIGS,
  IconProvider,
  IIconConfig,
} from "@icon-park/react/lib/runtime";

import "./App.css";
import FallBack from "./components/widget/FallBack";
import { makeServer } from "./mirageServer";

makeServer();
const IconConfig: IIconConfig = {
  ...DEFAULT_ICON_CONFIGS,
  size: 16,
  theme: "outline",
  prefix: "anticon i",
};

const Dashboard = lazy(() =>
  import("./components/dashboard/Dashboard").catch((error) => {
    console.error("Error loading Dashboard:", error);
    throw error;
  })
);

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#dc9d29",
          },
        }}
      >
        <IconProvider value={IconConfig}>
          <Suspense fallback={<FallBack />}>
            <Dashboard />
          </Suspense>
        </IconProvider>
      </ConfigProvider>
    </QueryClientProvider>
  );
};

export default App;
