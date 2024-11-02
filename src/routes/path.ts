export const paths = {
  home: '/',
  page403: '/403',
  page404: '/404',
  page500: '/500',
  product: {
    list: `/product/list`,
    details: (category: string, id: number) => `/product/${category}/${id}`,
  },
};
