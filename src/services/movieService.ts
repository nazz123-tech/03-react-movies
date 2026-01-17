import axios from "axios";
import type { AxiosResponse } from "axios";
import type { MoviesResponse } from '../types/movie'

const API_URL = "https://api.themoviedb.org/3/search/movie";

const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

interface FetchMoviesParams {
  query: string;
  page?: number;
}

export const fetchMovies = async (
  params: FetchMoviesParams
): Promise<MoviesResponse> => {
  const response: AxiosResponse<MoviesResponse> = await axios.get(API_URL, {
    params,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TMDB_TOKEN}`,
    },
  });

  return response.data;
};