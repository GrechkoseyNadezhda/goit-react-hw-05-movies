import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieReviews } from '../../components/MovieReviews/MovieReviews';
import { getMovieReviews } from 'service/api';

const Reviews = () => {
  const { idMovie } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviews(idMovie).then(data => {
      setReviews(data);
    });
  }, [idMovie]);

  if (!reviews) {
    return;
  }
  return (
    <>
      <MovieReviews reviews={reviews.results} />
    </>
  );
};

export default Reviews;
