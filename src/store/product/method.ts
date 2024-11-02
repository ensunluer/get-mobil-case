import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProductDetail, getProducts } from '../../services/product.ts';
import { Product, ProductResult } from '../../pages/product-list/types.ts';

interface GetListParams {
  limit: number;
  skip: number;
}

export const getList = createAsyncThunk<{ data: ProductResult }, GetListParams, { rejectValue: string }>(
  '/product/list',
  async ({ limit, skip }, { rejectWithValue }) => {
    try {
      const result = await getProducts(limit, skip);
      return { data: result };
    } catch (error: unknown) {
      console.error('Get product list error:', error);
      return rejectWithValue('Failed to fetch product list.');
    }
  },
);

export const getDetail = createAsyncThunk<{ data: Product }, { id: number }, { rejectValue: string }>(
  '/product/detail',
  async ({ id }, { rejectWithValue }) => {
    try {
      const result = await getProductDetail(id);
      return { data: result };
    } catch (error: unknown) {
      console.error('Get product list error:', error);
      return rejectWithValue('Failed to fetch product list.');
    }
  },
);