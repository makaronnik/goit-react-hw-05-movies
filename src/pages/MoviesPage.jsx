import React, { useEffect, useRef, useState } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'api/api';
import { toast } from 'react-toastify';
import MoviesList from 'components/MoviesList/MoviesList';

const MoviesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [finalSearchQuery, setFinalSearchQuery] = useState('');

  const isFirstLoad = useRef(true);

  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;

      setFinalSearchQuery(searchQuery);

      return;
    }
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery === '') {
      setSearchParams({});
    }
  }, [searchQuery, setSearchParams]);

  useEffect(() => {
    if (finalSearchQuery === '') {
      setMovies([]);

      return;
    }

    const fetchMovies = async () => {
      try {
        setIsLoading(true);

        const {
          data: { results: movies },
        } = await searchMovies(finalSearchQuery);

        setMovies(movies.map(({ id, title }) => ({ id, title })));

        if (movies.length === 0) {
          toast.warning('No results were found for your search.');
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [finalSearchQuery]);

  const onChangeQuery = e => {
    setSearchParams({ query: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    setFinalSearchQuery(searchQuery);
  };

  return (
    <>
      <SearchForm
        value={searchQuery}
        onChange={onChangeQuery}
        onSubmit={onSubmit}
      />
      {(movies || isLoading) && (
        <MoviesList movies={movies} isLoading={isLoading} />
      )}
    </>
  );
};

export default MoviesPage;
