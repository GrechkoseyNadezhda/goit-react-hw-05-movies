import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from '../../service/api';
import { MovieList } from '../../components/MovieList/MovieList';
import { SearchMoviesForm } from '../../components/SearchMoviesForm/SearchMoviesForm';

const SearchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();

  const searchName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchName) return;

    setSearchQuery(searchName);
    getMovieByQuery(searchName).then(({ results }) => {
      setMovies(results);
    });
  }, [searchName]);

  const onFormSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: searchQuery });
  };

  const inputChange = event => {
    setSearchQuery(event.target.value);
  };
  return (
    <>
      <SearchMoviesForm onFormSubmit={onFormSubmit} inputChange={inputChange} />
      <MovieList movies={movies} />
    </>
  );
};

export default SearchMovies;
