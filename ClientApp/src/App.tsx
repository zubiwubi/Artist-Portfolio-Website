// import { GenericSection } from './components/GenericSection';
import { GenericFooter } from './components/GenericFooter';
import { ProductPage } from './pages/products/ProductPage.tsx';
import { StartPage } from './pages/start/StartPage.tsx';
import './index.css';
import './styles/styles.css';
import { ArtworkPage } from './pages/artworks/ArtPage.tsx';


function App(): React.JSX.Element {
  
  return (
    <>
    <h1> 2026 </h1>
    <StartPage />
    <ArtworkPage />
    <ProductPage />
    <GenericFooter />
    </>
  )
}

export default App