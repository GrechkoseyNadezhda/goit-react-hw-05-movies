import PropTypes from 'prop-types';
import css from './MovieDetails.module.css';

export const MovieDetails = ({ movie }) => {
  return (
    <div className={css.details}>
      <div className={css.detailsImg}>
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
          alt={movie.title}
        />
      </div>
      <div className={css.wrap}>
        <h2 className={css.title}>
          {movie.title} ({movie.release_date.slice(0, 4)})
        </h2>
        <p className={css.raiting}>
          Raiting:{' '}
          <span className={css.average}>{movie.vote_average.toFixed(1)}</span>
        </p>
        <h3 className={css.overview}>Overview</h3>
        <p className={css.descr}>{movie.overview}</p>
        <h3 className={css.genres}>Genres</h3>
        <p className={css.descr}>
          {movie.genres.map(genre => genre.name).join(', ')}
        </p>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired,
};
