import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './NavBar/NavBar';

const SearchMovies = lazy(() => import('../pages/Movies/Movies'));
const Home = lazy(() => import('../pages/Home/Home'));
const Details = lazy(() => import('pages/Details/Details'));
const Cast = lazy(() => import('../pages/Cast/Cast'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<SearchMovies />} />
        <Route path="movies/:idMovie" element={<Details />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route
          path="*"
          element={
            <img
              src="https://www.pozycjonusz.pl/wp-content/uploads/2020/11/blad-404-1.jpg"
              alt="not found"
            />
          }
        />
      </Route>
    </Routes>
  );
};
