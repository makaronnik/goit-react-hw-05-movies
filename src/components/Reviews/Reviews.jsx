import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMovieReviews } from 'api/api';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Reviews = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [reviews, setReviews] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    if (reviews) {
      return;
    }

    const fetchCredits = async () => {
      try {
        const {
          data: { results },
        } = await getMovieReviews(movieId);

        setReviews(
          results.map(({ author, content }) => ({
            author,
            content,
          }))
        );
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCredits();
  }, [movieId, reviews]);

  if (isLoading) {
    return (
      <ul>
        {[1, 2, 3, 4, 5].map((_, key) => (
          <li key={key}>
            <Skeleton height={20} width={50} />
            <Skeleton height={20} width={150} />
          </li>
        ))}
      </ul>
    );
  } else if (!reviews.length) {
    return <p>We don't have any reviews for this movie</p>;
  } else {
    return (
      <ul>
        {reviews.map(({ author, content }) => (
          <li key={author}>
            <b>Author: {author}</b>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    );
  }
};

export default Reviews;
