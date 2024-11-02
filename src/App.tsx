import { useScrollToTop } from './hooks';
import Router from './routes/router.tsx';
import { Provider } from 'react-redux'
import { store } from './store';

function App() {
  useScrollToTop();

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
