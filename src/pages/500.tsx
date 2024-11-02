import { ErrorView } from './error/detail.tsx';

export default function Page500() {
  return (
    <ErrorView code={500} message="Server Error" description="Something went wrong on our end. Please try again later." />
  );
}