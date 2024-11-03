export const paths = {
  home: '/',
  page403: '/403',
  page404: '/404',
  page500: '/500',
  product: {
    details: (category: string, id: number) => `/product/${category}/${id}`,
  },
};
