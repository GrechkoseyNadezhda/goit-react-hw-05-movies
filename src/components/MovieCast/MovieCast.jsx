import PropTypes from 'prop-types';
import css from './MovieCast.module.css';

export const MovieCast = ({ casts }) => {
  if (casts.length === 0) {
    return <p>There are no information about casts </p>;
  }
  return (
    <ul className={css.castList}>
      {casts.map(({ id, character, name, profile_path }) => (
        <li className={css.castItem} key={id}>
          <div className={css.castImg}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200${profile_path}`
                  : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY6kVWabNNPjOMrc9mvKYnCI35vDWyErm8BQ&usqp=CAU'
              }
              alt={name}
            />
          </div>
          <p>{name}</p>
          <p>{character}</p>
        </li>
      ))}
    </ul>
  );
};

MovieCast.propTypes = {
  casts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
