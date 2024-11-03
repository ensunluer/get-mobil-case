import styled, { keyframes } from 'styled-components';

import { useRouter } from '../../../hooks';
import { paths } from '../../../routes/path.ts';
import { Button } from '../../../components/button';

export function Error({ error }: { error: unknown }) {
  const router = useRouter();

  const goHome = () => {
    return router.push(paths.home);
  };
  const message = typeof error === 'string' ? error : '';

  return (
    <Page>
      <Title>Oops!</Title>
      <Message>Sth Went Wrong</Message>
      <Description>{message}</Description>
      <Button size="large" onClick={goHome}>Go Home</Button>
    </Page>
  );
}

// Style
const float = keyframes`
    0% {
        transform: translateY(-10px);
    }
    50% {
        transform: translateY(10px);
    }
    100% {
        transform: translateY(-10px);
    }
`;

const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 140px);
    text-align: center;
    color: #333;
`;

const Title = styled.h1`
    font-size: 6rem;
    margin: 0;
    color: #ff6b6b;
    animation: ${float} 3s ease-in-out infinite;
`;

const Message = styled.p`
    font-size: 1.5rem;
    margin: 16px 0;
`;

const Description = styled.p`
    font-size: 1rem;
    color: #555;
`;
