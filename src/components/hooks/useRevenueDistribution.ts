/**
 * @author Goutam Shetty <goutam.shetty1@gmail.com>
 * @description useRevenueDistribution
 */

import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

import { RevenueDistribution } from "../../types/types";
import { apiService } from "../../client/apiService";

export const CACHE_QUERY_KEY_FETCH_REVENUE_DISTRIBUTION =
  "fetch-revenue-distribution";

const useRevenueDistribution = (
  options?: UseQueryOptions<RevenueDistribution[], Error>
): UseQueryResult<RevenueDistribution[], Error> => {
  return useQuery({
    queryKey: [CACHE_QUERY_KEY_FETCH_REVENUE_DISTRIBUTION],
    queryFn: async () => {
      const { data } = await apiService.getRevenueDistribution();
      return data;
    },
    ...options,
  });
};
export default useRevenueDistribution;
