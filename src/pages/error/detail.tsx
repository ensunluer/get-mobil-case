import styled from 'styled-components';
import { useRouter } from '../../hooks';
import { paths } from '../../routes/path.ts';

type Props = {
  code: number;
  message: 'Access Denied' | 'Page Not Found' | 'Server Error'
  description: string
}

export function ErrorView({ code, message, description }: Props) {
  const router = useRouter();

  const goHome = () => {
    return router.push(paths.home)
  }

  return (
    <ErrorPage>
      <ErrorCode>{code}</ErrorCode>
      <ErrorMessage>{message}</ErrorMessage>
      <ErrorDescription>{description}</ErrorDescription>
      <Button onClick={goHome}>Go Home</Button>
    </ErrorPage>
  );
}

// Style
const ErrorPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 120px);
    text-align: center;
    background-color: #f9f9f9;
    color: #333;
`;

const ErrorCode = styled.h1`
    font-size: 5rem;
    margin: 0;
    color: #e74c3c;
`;

const ErrorMessage = styled.p`
    font-size: 1.5rem;
    margin: 16px 0;
`;

const ErrorDescription = styled.p`
    font-size: 1rem;
    color: #555;
`;

const Button = styled.button`

`