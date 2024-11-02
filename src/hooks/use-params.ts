import { useMemo } from 'react';
import { useParams as _useParams } from 'react-router-dom';

// ----------------------------------------------------------------------

/**
 * Custom hook that wraps the `useParams` hook from `react-router-dom`.
 * It memoizes the parameters returned by the `useParams` hook,
 * ensuring that the parameters are only recalculated when they change.
 *
 * @returns {Object} An object containing the current URL parameters.
 *
 * @example
 *
 * import { useParams } from 'path/to/useParams';
 *
 * const MyComponent = () => {
 *   const { id } = useParams();
 *
 *   return <div>Current ID: {id}</div>;
 * };
 */
export function useParams() {
  const params = _useParams();

  return useMemo(() => params, [params]);
}
