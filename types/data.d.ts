export interface SpotifyAuthApiResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
}

export interface TopItemQuery {
  time_range?: "long_term" | "medium_term" | "short_term";
  limit?: number;
  items?: "tracks" | "artists";
}

export interface TrackData {
  id?: string;
  name: string;
  artist?: string;
  image: string;
  url: string;
  acousticness?: number;
  danceability?: number;
  duration_ms?: number;
  energy?: number;
  instrumentalness?: number;
  key?: number;
  liveness?: number;
  loudness?: number;
  mode?: number;
  speechiness?: number;
  tempo?: number;
  valence?: number;
}

export interface AudioFeatures {
  acousticness?: number;
  danceability?: number;
  duration_ms?: number;
  energy?: number;
  instrumentalness?: number;
  key?: number;
  liveness?: number;
  loudness?: number;
  mode?: number;
  speechiness?: number;
  tempo?: number;
  valence?: number;
}

export interface TopArtist {
  name: string;
  images: {
    url: string;
  }[];
  external_urls: {
    spotify: string;
  };
  id: string;
}

export interface TopTrack {
  name: string;
  artists: {
    name: string;
  }[];
  album: {
    images: {
      url: string;
    }[];
  };
  external_urls: {
    spotify: string;
  };
  id: string;
}

export interface RecentItem {
  track: {
    name: string;
    album: {
      images: [{ url: string }];
    };
    artists: [{ name: string }];
    external_urls: { spotify: string };
    id: string;
  };
}
