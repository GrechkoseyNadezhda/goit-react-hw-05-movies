import { useState, useEffect, Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { MovieDetails } from '../../components/MovieDetails/MovieDetails';
import css from './Details.module.css';
import cn from 'classnames';

import {
  useParams,
  useLocation,
  Outlet,
  NavLink,
  Link,
} from 'react-router-dom';
import { getMovieById } from 'service/api';

export const Details = () => {
  const location = useLocation();
  const { idMovie } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieById(idMovie).then(data => {
      setMovie(data);
    });
  }, [idMovie]);

  if (!movie) {
    return;
  }

  return (
    <>
      <div className={css.goBackWrap}>
        <Link className={css.goBack} to={location.state?.from ?? '/'}>
          Go back
        </Link>
      </div>

      <MovieDetails movie={movie} />

      <div className={css.info}>
        <p className={css.infoTitle}>Additional information</p>
        <ul className={css.infoList}>
          <li>
            <NavLink
              className={({ isActive }) =>
                cn(css.NavLink, { [css.active]: isActive })
              }
              to="cast"
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                cn(css.NavLink, { [css.active]: isActive })
              }
              to="reviews"
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default Details;
