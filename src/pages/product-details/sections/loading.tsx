import styled, { keyframes } from 'styled-components';

export const Skeleton = () => {
  return (
    <Container>
      <ContentWrapper>
        <ImagesWrapper>
          <Image />
        </ImagesWrapper>
        <InfoWrapper>
          <SkeletonItem width="60%" height="40px" />
          <SkeletonItem width="80%" height="120px" />
          <PriceWrapper>
            <SkeletonItem width="10%" height="40px" />
            <SkeletonItem width="10%" height="40px" />
          </PriceWrapper>
          <SkeletonItem width="30%" height="40px" />
        </InfoWrapper>
      </ContentWrapper>
      <Comments>
        {[...Array(3)].map((_, idx) => (
          <SkeletonItem width='40%' height='40px' key={idx} />
        ))}
      </Comments>
    </Container>
  );
};

// Styles
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 1200px;
    margin: auto;

    @media (max-width: 768px) {
        padding: 15px;
    }
`;

const shimmer = keyframes`
    0% {
        background-position: -200px 0;
    }
    100% {
        background-position: 200px 0;
    }
`;

const SkeletonBase = styled.div`
    animation: ${shimmer} 3s infinite linear;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    border-radius: 4px;
`;

const Image = styled(SkeletonBase)`
    width: 100%;
    height: 400px;
    margin-bottom: 16px;
    border-radius: 8px;
`;

const ImagesWrapper = styled.div`
    flex: 1;
`;

const InfoWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

const PriceWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const ContentWrapper = styled.div`
    display: flex;
    gap: 80px;
    align-items: flex-start;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 15px;
    }
`;

const SkeletonItem = styled(SkeletonBase)<{ width: string, height: string }>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    border-radius: 4px;
`;

const Comments = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    gap: 20px;
`;