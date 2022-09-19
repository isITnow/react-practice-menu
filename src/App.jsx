import { BrowserRouter } from 'react-router-dom';
import Header from './modules/Header';
import ClientRoutes from './clientRoutes';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <ClientRoutes />
    </BrowserRouter>
  );
};
