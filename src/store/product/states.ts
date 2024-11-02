import { Product } from '../../pages/product-list/types.ts';

type ListProps = {
  loading: boolean;
  data: Product[];
  error: undefined | string | null;
};

type DetailProps = {
  loading: boolean;
  data: Product | null;
  error: undefined | string | null;
};

export type State = {
  list: ListProps;
  detail: DetailProps;
};

export const state: State = {
  list: {
    loading: false,
    data: [],
    error: null,
  },
  detail: {
    loading: false,
    data: null,
    error: null,
  },
};