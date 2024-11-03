import styled from 'styled-components';
import { useAppSelector } from '../../../store/hooks.ts';
import { Images } from './corousel.tsx';
import { Rating } from '../../../components/rating';
import { Comments } from './comments.tsx';
import { Breadcrumb } from '../../../components/breadcrumb';
import { Skeleton } from './loading.tsx';
import { NotFound } from './not-found.tsx';
import { Error } from './error.tsx';

export function Details() {
  const { data: detail, loading, error } = useAppSelector(state => state.product.detail);

  const renderEmpty = <NotFound />;

  const renderSkeleton = <Skeleton />;

  const renderError = <Error error={error} />;

  if (loading) return renderSkeleton;

  if (!loading && error) return renderError;

  if (!detail) return renderEmpty;

  const originalPrice = detail?.price / (1 - detail?.discountPercentage / 100);

  return (
    <Container>
      <Breadcrumb
        separator="/"
        items={[
          { label: 'Products', href: '/' },
          { label: detail?.title },
        ]}
      />
      <Content>
        <ImagesWrapper>
          <Images images={detail?.images} />
        </ImagesWrapper>
        <Info>
          <h1>{detail?.title}</h1>
          {detail?.description}
          <PriceContainer>
            <span>
              ${detail?.price}
            </span>
            <span>
              ${originalPrice.toFixed(2)}
            </span>
          </PriceContainer>
          <Rating rating={detail?.rating || 5} />
        </Info>
      </Content>
      <Comments comments={detail?.reviews} />
    </Container>
  );
}

// Style
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

const Content = styled.div`
    display: flex;
    gap: 80px;
    align-items: flex-start;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 40px;
    }
`;

const ImagesWrapper = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    flex: 1;
    width: 100%;
`;

const Info = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 40px;
    color: #555;

    h1 {
        margin: 0;
        padding: 0;
        font-size: 2em;
        color: #14161b;
    }

    span {
        font-size: 1.5em;
        font-weight: 700;
        color: #004aad;

        &:last-child {
            font-size: 1em;
            color: #14161b;
            text-decoration: line-through;
        }
    }

    @media (max-width: 768px) {
        gap: 20px;
    }
`;

const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 4px 0;
`;