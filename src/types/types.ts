export interface Artist {
  name: string;
  imgUrl: string;
}

export interface Metrics {
  totalUsers: number;
  activeUsers: number;
  totalStreams: number;
  revenue: number;
  topArtist: Artist;
}

export interface UserGrowth {
  month: string;
  totalUsers: number;
  activeUsers: number;
}

export interface RevenueDistribution {
  name: string;
  value: number;
}

export interface TopSong {
  name: string;
  streams: number;
}

export interface Streams {
  songName: string;
  artist: string;
  dateStreamed: string;
  streamCount: number;
  userId: string;
}
