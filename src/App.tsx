import { BrowserRouter } from 'react-router-dom';
import AppProvider from './contexts';
import Routes from './routes';
import GlobalStyle from './styles/GlobalStyle';

export const App = () => (
  <BrowserRouter>
    <AppProvider>
      <Routes />
      <GlobalStyle />
    </AppProvider>
  </BrowserRouter>
);
