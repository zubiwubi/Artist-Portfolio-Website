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


function App(): React.JSX.Element {
  
  return (
    <>
    <h1> 2026 </h1>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<StartPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/artworks" element={<ArtworkPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
      </Routes>
      <GenericFooter />
    </>
  );
}

export default App