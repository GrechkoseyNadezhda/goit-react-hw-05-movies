import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import cn from 'classnames';
import css from './NavBar.module.css';

export const NavBar = () => {
  return (
    <>
      <nav className={css.nav}>
        <ul className={css.list}>
          <li className={css.item}>
            <NavLink
              className={({ isActive }) =>
                cn(css.NavLink, { [css.active]: isActive })
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className={css.item}>
            <NavLink
              className={({ isActive }) =>
                cn(css.NavLink, { [css.active]: isActive })
              }
              to="/movies"
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
