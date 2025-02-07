/**
 * @author Goutam Shetty <goutam.shetty1@gmail.com>
 * @description useStreams
 */

import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

import { Streams } from "../../types/types";
import { apiService } from "../../client/apiService";

export const CACHE_QUERY_KEY_FETCH_STREAMS = "fetch-streams";

const useStreams = (
  options?: UseQueryOptions<Streams[], Error>
): UseQueryResult<Streams[], Error> => {
  return useQuery({
    queryKey: [CACHE_QUERY_KEY_FETCH_STREAMS],
    queryFn: async () => {
      const { data } = await apiService.getStreams();
      return data;
    },
    ...options,
  });
};
export default useStreams;
