import { lazy, Suspense } from 'react';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';

import { SplashScreen } from '../components/splash-screen';
import Layout from '../layout/layout.tsx';

// PRODUCT
const ProductList = lazy(() => import('../pages/product-list/index.tsx'));
const ProductDetails = lazy(() => import('../pages/product-details/index.tsx'));
// COMMON
const Page403 = lazy(() => import('../pages/403.tsx'));
const Page404 = lazy(() => import('../pages/404.tsx'));
const Page500 = lazy(() => import('../pages/500.tsx'));

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: (
        <Suspense fallback={<SplashScreen />}>
          <Layout>
            <Outlet />
          </Layout>
        </Suspense>
      ),
      children: [
        { path: 'product/list', element: <ProductList /> },
        { path: 'product/:category/:id', element: <ProductDetails /> },
        { path: '500', element: <Page500 /> },
        { path: '404', element: <Page404 /> },
        { path: '403', element: <Page403 /> }
      ],
    },

    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
