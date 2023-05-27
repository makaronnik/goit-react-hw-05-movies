import axios from 'axios';

const API_KEY = 'af4bbf33c7089228130160333c5baba4';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
});

export const getTrendingMovies = async () => {
  return await api.get('trending/movie/day');
};

export const searchMovies = async query => {
  return await api.get('search/movie', {
    params: {
      query,
    },
  });
};

export const getMovieDetails = async id => {
  return await api.get(`movie/${id}`);
};
