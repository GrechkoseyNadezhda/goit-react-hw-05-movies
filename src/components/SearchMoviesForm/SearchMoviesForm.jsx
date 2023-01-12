import PropTypes from 'prop-types';
import css from './SearchMoviesForm.module.css';

export const SearchMoviesForm = ({ onFormSubmit, inputChange }) => {
  return (
    <form className={css.form} onSubmit={onFormSubmit}>
      <input className={css.input} onChange={inputChange} />
      <button className={css.btn} type="submit">
        <span className={css.span}></span>
      </button>
    </form>
  );
};

SearchMoviesForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  inputChange: PropTypes.func.isRequired,
};
