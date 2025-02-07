import axiosClient from "./axiosClient";
import {
  Metrics,
  UserGrowth,
  RevenueDistribution,
  TopSong,
  Streams,
} from "../types/types";

export const apiService = {
  getMetrics: () => axiosClient.get<Metrics>("/metrics"),
  getUserGrowth: () => axiosClient.get<UserGrowth[]>("/userGrowth"),
  getRevenueDistribution: () =>
    axiosClient.get<RevenueDistribution[]>("/revenueDistribution"),
  getTopSongs: () => axiosClient.get<TopSong[]>("/topSongs"),
  getStreams: () => axiosClient.get<Streams[]>("/streams"),
};
