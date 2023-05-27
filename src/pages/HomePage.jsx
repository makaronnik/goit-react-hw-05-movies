import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getTrendingMovies } from '../api/api';
import MoviesList from 'components/MoviesList/MoviesList';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setIsLoading(true);

        const {
          data: { results: movies },
        } = await getTrendingMovies();

        setTrendingMovies(movies.map(({ id, title }) => ({ id, title })));
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MoviesList movies={trendingMovies} isLoading={isLoading} />
    </>
  );
};

export default HomePage;
