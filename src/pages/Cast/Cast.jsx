import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieCast } from '../../components/MovieCast/MovieCast';
import { getMovieCredits } from 'service/api';

const Cast = () => {
  const { idMovie } = useParams();
  const [casts, setCasts] = useState(null);

  useEffect(() => {
    getMovieCredits(idMovie).then(data => {
      setCasts(data);
    });
  }, [idMovie]);

  if (!casts) {
    return;
  }

  return (
    <>
      <MovieCast casts={casts.cast} />
    </>
  );
};

export default Cast;
