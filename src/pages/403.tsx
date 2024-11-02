import { ErrorView } from './error/detail.tsx';

export default function Page403() {
  return (
    <ErrorView code={403} message="Access Denied" description="You dont have permission to view this page." />
  );
}
