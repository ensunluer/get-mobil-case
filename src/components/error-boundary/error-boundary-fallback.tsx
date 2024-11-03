import React from 'react';
import styled from 'styled-components';
import { messages } from '../../constants';
import { useRouter } from '../../hooks';

const FallbackContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    width: 100% !important;
    height: 80vh;
    text-align: center
`;

const ErrorMessage = styled.h2`
    margin: 0;
    font-size: 24px;
`;

const ErrorDetail = styled.p`
    margin: 0;
    max-width: 600px;
    font-size: 20px;
`;

const Button = styled.button`
    margin: 0;
    border: revert;
    background: revert;
    font-size: 20px;
`;


/**
 * ErrorBoundaryFallback component that displays a fallback UI
 * when an error occurs in a React component tree.
 *
 * @component
 * @returns {JSX.Element} The rendered fallback UI.
 */
const ErrorBoundaryFallback: React.FC = (): JSX.Element => {
  const router = useRouter();

  const goHome = () => router.push('/');

  return (
    <FallbackContainer>
      <ErrorMessage>{messages.error.error}</ErrorMessage>
      <ErrorDetail>{messages.error.support}</ErrorDetail>
      <Button onClick={goHome}>{messages.constants.goHome}</Button>
    </FallbackContainer>
  );
};

export default ErrorBoundaryFallback;
