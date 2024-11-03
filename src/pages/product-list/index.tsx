import { Helmet } from 'react-helmet-async';
import { getList } from '../../store/product/method.ts';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from '../../store/hooks.ts';
import { ProductList } from './sections/list.tsx';

export default function ProductPage() {
  const [limit] = useState<number>(0);
  const [skip] = useState<number>(0);

  const dispatch = useAppDispatch();

  const fetchProducts = useCallback(async () => {
    await dispatch(getList({ limit, skip }));
  }, [dispatch, limit, skip]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <Helmet>
        <title>Product List</title>
      </Helmet>


      <ProductList />
    </>
  );
}
