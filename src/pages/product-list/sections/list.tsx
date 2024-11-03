import styled from 'styled-components';

import { useAppSelector } from '../../../store/hooks.ts';

import { Items } from './items.tsx';
import { Skeleton } from './loading.tsx';
import { NotFound } from './not-found.tsx';
import { Error } from './error.tsx';

export function ProductList() {

  const { data: productsbase, loading, error } = useAppSelector(state => state.product.list);

  const products = productsbase.filter(item => {
    return item.category === 'mobile-accessories' || item.category === 'laptops' || item.category === 'tablets';
  });

  const renderLoading = Array.from({ length: 12 }).map((_, index) => (
    <Skeleton key={index} />
  ));

  const renderEmpty = <NotFound />;

  const renderError = <Error error={error} />;

  const renderList = products.map((product) => <Items key={product.id} product={product} />);

  if (!loading && error) return renderError;

  if (!loading && renderList.length === 0) return renderEmpty;

  return (
    <ListContainer>
      {loading ? renderLoading : renderList}
    </ListContainer>
  );
}

// Style
const ListContainer = styled.div`
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(1, 1fr);

    @media (min-width: ${({ theme }) => theme.breakpoints.mobile || '600px'}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet || '768px'}) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop || '1024px'}) {
        grid-template-columns: repeat(4, 1fr);
    }
`;
