/**
 * @author Goutam Shetty <goutam.shetty1@gmail.com>
 * @description useTopSongs
 */

import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

import { TopSong } from "../../types/types";
import { apiService } from "../../client/apiService";

export const CACHE_QUERY_KEY_FETCH_TOP_SONGS = "fetch-top-songs";

const useTopSongs = (
  options?: UseQueryOptions<TopSong[], Error>
): UseQueryResult<TopSong[], Error> => {
  return useQuery({
    queryKey: [CACHE_QUERY_KEY_FETCH_TOP_SONGS],
    queryFn: async () => {
      const { data } = await apiService.getTopSongs();
      return data;
    },
    ...options,
  });
};
export default useTopSongs;
