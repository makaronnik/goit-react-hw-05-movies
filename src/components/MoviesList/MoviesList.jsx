import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import MoviesListStyled from './MoviesListStyled';
import 'react-loading-skeleton/dist/skeleton.css';

const MoviesList = ({ isLoading, movies }) => {
  const location = useLocation();

  return (
    <MoviesListStyled>
      {isLoading ? (
        <Skeleton count={20} width={400} height={22} />
      ) : (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={location}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </MoviesListStyled>
  );
};

MoviesList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MoviesList;
