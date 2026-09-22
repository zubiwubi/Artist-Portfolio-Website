import { ProductCard } from "../components/ProductCard";


export function ProductPage() {
    return <>
    <h2> 
        Welcome to my product page.
    </h2>
    <h3> Products: </h3>
    <ProductCard title={"product1"} description={"test"} price={4} />
    </>
}