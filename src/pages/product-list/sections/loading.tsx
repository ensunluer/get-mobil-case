import styled, { keyframes } from 'styled-components';

export const Skeleton = () => {
  return (
    <Container>
      <Image />
      <Text />
      <Text />
      <Text />
    </Container>
  );
};

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background-color: ${props => props.theme.colors.background};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

const SkeletonBase = styled.div`
  animation: ${shimmer} 1.5s infinite linear;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  border-radius: 4px;
`;

const Image = styled(SkeletonBase)`
  width: 100%;
  height: 200px;
  margin-bottom: 16px;
  border-radius: 8px;
`;

const Text = styled(SkeletonBase)`
  width: 80%;
  height: 16px;
  margin: 8px 0;
`;
