import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * A custom hook that provides navigation functions for React Router.
 */
export function useRouter() {
  const navigate = useNavigate();

  return useMemo(
    () => ({
      /**
       * Navigates back to the previous page in the history stack.
       */
      back: () => navigate(-1),

      /**
       * Navigates forward to the next page in the history stack.
       */
      forward: () => navigate(1),

      /**
       * Reloads the current page.
       */
      reload: () => window.location.reload(),

      /**
       * Navigates to a specified URL.
       *
       * @param {string} href - The URL to navigate to.
       */
      push: (href: string) => navigate(href),

      /**
       * Replaces the current URL with a new one.
       *
       * @param {string} href - The URL to navigate to.
       */
      replace: (href: string) => navigate(href, { replace: true }),
    }),
    [navigate],
  );
}
