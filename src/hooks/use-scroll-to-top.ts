import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * A custom hook that scrolls the window to the top whenever the pathname changes.
 *
 * This is useful for ensuring that the user always starts at the top of a new page
 * when navigating within a React Router application.
 *
 * @returns {null} This hook does not return anything.
 */
export function useScrollToTop(): null {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
