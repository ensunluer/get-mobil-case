import { ErrorView } from './error/detail.tsx';

export default function Page404() {
  return (
    <ErrorView code={404} message="Page Not Found" description="The page you're looking for doesn't exist." />
  );
}