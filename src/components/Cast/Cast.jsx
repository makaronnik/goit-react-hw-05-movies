import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMovieCredits } from 'api/api';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ACTOR_PHOTO_BASE_URL = 'https://image.tmdb.org/t/p/w92';

const Cast = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [credits, setCredits] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    if (credits) {
      return;
    }

    const fetchCredits = async () => {
      try {
        const {
          data: { cast },
        } = await getMovieCredits(movieId);

        setCredits(
          cast.map(({ id, name, character, profile_path }) => ({
            id,
            name,
            character,
            profile_path,
          }))
        );
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCredits();
  }, [movieId, credits]);

  if (isLoading) {
    return (
      <ul>
        {[1, 2, 3, 4, 5].map((_, key) => (
          <li key={key}>
            <Skeleton height={150} width={100} />
            <Skeleton height={20} width={150} />
            <Skeleton height={20} width={150} />
          </li>
        ))}
      </ul>
    );
  } else if (!credits.length) {
    return <p>We don't have any cast for this movie</p>;
  } else {
    return (
      <ul>
        {credits.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <img
              src={`${ACTOR_PHOTO_BASE_URL}${profile_path}`}
              alt={name}
              width="100"
            />
            <p>{name}</p>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    );
  }
};

export default Cast;
