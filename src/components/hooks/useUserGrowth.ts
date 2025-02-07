/**
 * @author Goutam Shetty <goutam.shetty1@gmail.com>
 * @description useUserGrowth
 */

import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

import { UserGrowth } from "../../types/types";
import { apiService } from "../../client/apiService";

export const CACHE_QUERY_KEY_FETCH_USER_GROWTH = "fetch-user-growth";

const useUserGrowth = (
  options?: UseQueryOptions<UserGrowth[], Error>
): UseQueryResult<UserGrowth[], Error> => {
  return useQuery({
    queryKey: [CACHE_QUERY_KEY_FETCH_USER_GROWTH],
    queryFn: async () => {
      const { data } = await apiService.getUserGrowth();
      return data;
    },
    ...options,
  });
};
export default useUserGrowth;
