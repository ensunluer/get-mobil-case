import React from 'react';
import styled from 'styled-components';
import { messages } from '../../constants';
import { useRouter } from '../../hooks';

const FallbackContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100% !important;
    height: 100vh;
    background-color: #f8d7da;
    color: #721c24;
    padding: 20px;
    border: 1px solid #f5c6cb;
    border-radius: 8px;
    text-align: center;
`;

const ErrorMessage = styled.h2`
    margin: 0;
    font-size: 24px;
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
      <button onClick={goHome}>{messages.constants.goHome}</button>
    </FallbackContainer>
  );
};

export default ErrorBoundaryFallback;
