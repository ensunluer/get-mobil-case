import { Helmet } from 'react-helmet-async';
import { useCallback, useEffect } from 'react';

import { useParams } from '../../hooks/use-params.ts';

import { useAppDispatch } from '../../store/hooks.ts';
import { getDetail } from '../../store/product/method.ts';

import { Details } from './sections/details.tsx';

export default function ProductDetailsPage() {
  const dispatch = useAppDispatch();

  const { id } = useParams();

  const fetchProducts = useCallback(async (itemId: number) => {
    await dispatch(getDetail({ id: itemId }));
  }, [dispatch]);

  useEffect(() => {
    if (id && typeof id !== 'undefined') {
      fetchProducts(Number(id))
    } else {
      console.error('Product not found:', id);
    }
  }, [dispatch, fetchProducts, id]);

  return (
    <>
      <Helmet>
        <title>Product Details</title>
      </Helmet>

      <Details />
    </>
  );
}
