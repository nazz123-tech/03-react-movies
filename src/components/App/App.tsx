import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import 'modern-normalize';
import SearchBar from '../SearchBar/SearchBar';
import { fetchMovies } from "../../services/movieService"
import type { Movie } from "../../types/movie";
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';


export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false); 
  const [isError, setIsError]= useState<boolean>(false)
 
  const handleSearch = async (query: string) => {
  setMovies([]); 
  setIsLoading(true);
  setIsError(false);

  try {
    const data = await fetchMovies({ query });

    if (data.result.length === 0) {
      toast.error("No movies found for your request.");
      return;
    }

    setMovies(data.result);
  } catch {
    toast.error("Something went wrong. Try again.");
  } finally {
    setIsLoading(false);
  }
};

  return (
    <>
      <SearchBar onSubmit={handleSearch}/>
      {isLoading && <Loader/>}
      
      {}
    </>
  )
}
