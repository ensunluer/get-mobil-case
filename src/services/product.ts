import request from '../utils/request.ts';

export const getProducts = async (limit: number, skip: number) => {
  try {
    const response = await request.get(`products`, {
      params: { limit, skip },
    });
    return response.data;
  } catch (err: unknown) {
    console.error('Unexpected error:', err);
    throw new Error('An unexpected error occurred.');
  }
};

export const getProductDetail = async (id: number) => {
  try {
    const response = await request.get(`products/${id}`);
    return response.data;
  } catch (err: unknown) {
    console.error('Unexpected error:', err);
    throw new Error('An unexpected error occurred.');
  }
};

