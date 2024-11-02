import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import App from './App.tsx';

import { theme } from './theme';
import { GlobalStyle } from './theme';

import { SplashScreen } from './components/splash-screen';
import { ErrorBoundary, ErrorBoundaryFallback } from './components/error-boundary';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<SplashScreen />}>
      <HelmetProvider>
        <BrowserRouter>
          <ErrorBoundary fallback={<ErrorBoundaryFallback />}>
            <ThemeProvider theme={theme as DefaultTheme}>
              <GlobalStyle />
              <App />
            </ThemeProvider>
          </ErrorBoundary>
        </BrowserRouter>
      </HelmetProvider>
    </Suspense>
  </StrictMode>,
);
