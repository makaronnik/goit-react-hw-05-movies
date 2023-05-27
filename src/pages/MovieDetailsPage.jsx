import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { getMovieDetails } from 'api/api';
import { toast } from 'react-toastify';
import { Suspense } from 'react';
import { MoonLoader } from 'react-spinners';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import AdditionalInformation from 'components/AdditionalInformation/AdditionalInformation';

const MovieDetailsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState();
  const { movieId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (movie) {
      return;
    }

    const fetchMovie = async () => {
      try {
        setIsLoading(true);

        const {
          data: { title, overview, genres, vote_average, poster_path },
        } = await getMovieDetails(movieId);

        setMovie({
          title,
          overview,
          genres,
          vote_average,
          poster_path,
        });
      } catch (error) {
        if (error?.response?.status === 404) {
          toast.error('Movie not found.');
          navigate('/', { replace: true });
        } else {
          toast.error(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [movie, movieId, navigate]);

  return (
    <>
      {<MovieDetails movie={movie} isLoading={isLoading} />}
      <AdditionalInformation>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </AdditionalInformation>
      <Suspense
        fallback={
          <MoonLoader speedMultiplier={0.5} cssOverride={{ margin: 50 }} />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
