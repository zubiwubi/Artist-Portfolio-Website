import './App.css'
import { GenericSection } from './components/GenericSection';
import { GenericFooter } from './components/GenericFooter';
import { ProductPage } from './webpages/ProductPage';

const name = "Piet";

function Greeting() {
  return <h1>Hello, {name}</h1>;
}

function HomeSection(){
  return <>
    <body>
      <h1>About Page</h1>
      <a href="https://www.theodinproject.com/about" target="_blank" rel="noreferrer">About The Odin Project</a>

    </body>
  </>
}

function Header() {
  return (
    <>
      <h1>Title</h1>
      <p>Subtitle</p>
    </>
  );
}

function App(): React.JSX.Element {

  // Here goes your TS code
  function ProductCard() {
  return (
    <div className="card">
      <h3>Laptop</h3>
      <p>€1200</p>
    </div>
  );
}
  
  return (
    <>
    <h1> Welcome to my app </h1>
    <ProductPage />
    <Header />
    <HomeSection /> 
    <ProductCard />
    <GenericSection name={"Laptop"} description={"test"} className={"Laptop"} />
    <Greeting />
    <GenericFooter />
    </>
  )
}

export default App