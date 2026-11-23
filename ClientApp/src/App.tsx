// import { GenericSection } from './components/GenericSection';
import { HomePage } from './pages/HomePage.tsx';
import { GenericFooter } from './components/GenericFooter';
import { ProductPage } from './pages/products/ProductPage.tsx';
import { StartPage } from './pages/start/StartPage.tsx';
import './index.css';
import './styles/styles.css';
import { ArtworkPage } from './pages/artworks/ArtPage.tsx';
import { Routes, Route, Link } from "react-router";
import { Layout } from './components/Layout.tsx';
import { NotFoundPage } from './pages/NotFoundPage.tsx';
import { ProductDetailPage } from './pages/products/ProductDetailPage.tsx';
import { LoginPage } from './auth/LoginPage.tsx';
import { ProtectedRoute } from './auth/ProtectedRoute.tsx';

function App(): React.JSX.Element {
  
  return (
    <>
    <h1> 2026 </h1>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<StartPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route 
              path="products" 
              element={<ProtectedRoute> <ProductPage /> </ProtectedRoute>} />
            <Route 
              path="products/:id" 
              element={<ProtectedRoute> <ProductDetailPage /> </ProtectedRoute>} />
            <Route path="/artworks" element={<ArtworkPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
      </Routes>
      <GenericFooter />
    </>
  );
}

export default App