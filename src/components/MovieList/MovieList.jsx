import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import css from './MovieList.module.css';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {movies.map(({ poster_path, title, name, id }) => (
        <li className={css.item} key={id}>
          <Link
            className={css.link}
            to={`/movies/${id}`}
            state={{ from: location }}
          >
            <div className={css.wrap}>
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title ?? name}
              />
            </div>
            <h2 className={css.title}>{title ?? name}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
