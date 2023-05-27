import PropTypes from 'prop-types';
import MovieDetailsStyled from './MovieDetailsStyled';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import BackButton from 'components/BackButton/BackButton';

const MOVIE_POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w185';

const MovieDetails = ({ movie, isLoading }) => {
  if (isLoading || !movie) {
    return (
      <MovieDetailsStyled>
        <BackButton />
        <div className="content-wrapper">
          <div className="poster-wrapper">
            <Skeleton height={278} width={185} />
          </div>
          <div className="details-wrapper">
            <br />
            <Skeleton height={30} width={200} />
            <Skeleton height={20} count={7} />
          </div>
        </div>
      </MovieDetailsStyled>
    );
  } else {
    const { title, overview, genres, vote_average, poster_path } = movie;

    return (
      <MovieDetailsStyled>
        <BackButton />
        <div className="content-wrapper">
          <div className="poster-wrapper">
            <img src={`${MOVIE_POSTER_BASE_URL}/${poster_path}`} alt={title} />
          </div>
          <div className="details-wrapper">
            <h2>{title}</h2>
            <p>User Score: {(vote_average * 10).toFixed(0)}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            {genres.length > 0 && <h3>Genres</h3>}
            <p>{genres.map(({ name }) => name).join(' ')}</p>
          </div>
        </div>
      </MovieDetailsStyled>
    );
  }
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
    vote_average: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
  }),
  isLoading: PropTypes.bool.isRequired,
};

export default MovieDetails;
