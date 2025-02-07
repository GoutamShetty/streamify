/**
 * @author Goutam Shetty <goutam.shetty1@gmail.com>
 * @description useMetrics
 */

import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

import { Metrics } from "../../types/types";
import { apiService } from "../../client/apiService";

export const CACHE_QUERY_KEY_FETCH_Metrics = "fetch-metrics";

const useMetrics = (
  options?: UseQueryOptions<Metrics, Error>
): UseQueryResult<Metrics, Error> => {
  return useQuery({
    queryKey: [CACHE_QUERY_KEY_FETCH_Metrics],
    queryFn: async () => {
      const { data } = await apiService.getMetrics();
      return data;
    },
    ...options,
  });
};
export default useMetrics;
