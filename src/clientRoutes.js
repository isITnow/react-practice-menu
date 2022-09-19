import { Route, Routes } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import ProductsPage from 'pages/ProductsPage';
import ProductsFromPartnersPage from './pages/Products_from_partners_Page/ProductsFromPartnersPage';
import ContactsPage from 'pages/ContactsPage';

const ClientRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products-partner" element={<ProductsFromPartnersPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
    </Routes>
  );
};

export default ClientRoutes;
