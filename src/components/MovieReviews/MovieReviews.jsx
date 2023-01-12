import PropTypes from 'prop-types';
import { formatDate } from 'service/formatDate';
import css from './MovieReviews.module.css';

export const MovieReviews = ({ reviews }) => {
  if (reviews.length === 0) {
    return <p>There are no reviews for this movie.</p>;
  }
  return (
    <ul className={css.listReview}>
      {reviews.map(({ author, content, id, created_at }) => (
        <li className={css.itemReview} key={id}>
          <h3 className={css.title}>Author: {author}</h3>
          <p>
            <span className={css.date}>Review date:</span>{' '}
            {formatDate(created_at)}
          </p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

MovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};
