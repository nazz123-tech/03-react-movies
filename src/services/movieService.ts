import axios from "axios";
import type { AxiosResponse } from "axios";
import type { Movies } from '../types/movie'

const API_URL = "https://api.themoviedb.org/3/search/movie";

const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

interface FetchMoviesParams {
  query: string;
  page?: number;
}

export const fetchMovies = async (
  params: FetchMoviesParams
): Promise<Movies> => {
  const response: AxiosResponse<Movies> = await axios.get(API_URL, {
    params,
    headers: {
      Authorization: `Bearer ${TMDB_TOKEN}`,
    },
  });

  return response.data;
};