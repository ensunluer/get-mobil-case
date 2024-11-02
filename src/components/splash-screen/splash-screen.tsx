import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SplashScreenWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.background};
    z-index: 9999;
`;

const Spinner = styled.div`
    width: 60px;
    height: 60px;
    border: 8px solid #ccc;
    border-top: 8px solid #333;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
`;

export default function SplashScreen() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <SplashScreenWrapper>
      <Spinner />
    </SplashScreenWrapper>
  );
}
