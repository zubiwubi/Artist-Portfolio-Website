// import { GenericSection } from './components/GenericSection';
import { GenericFooter } from './components/GenericFooter';
import { ProductPage } from './pages/products/ProductPage.tsx';
import { StartPage } from './pages/start/StartPage.tsx';
import './index.css';
import './styles/styles.css';


function App(): React.JSX.Element {
  
  return (
    <>
    <h1> 2026 </h1>
    <StartPage />
    <ProductPage />
    {/* <GenericSection name={"Laptop"} description={"Laptop's description test"} className={"Laptop"} /> */}
    <GenericFooter />
    </>
  )
}

export default App