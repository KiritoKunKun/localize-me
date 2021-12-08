import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/GlobalStyle';

export const App = () => (
  <BrowserRouter>
    <Routes />
    <GlobalStyle />
  </BrowserRouter>
);
