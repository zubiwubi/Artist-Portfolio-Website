// useParams gives you the values from the : segments of the current URL, 
// so here you get id, like we specified in the route. 
// (It's always a string, never a number, which is fine for us because it goes straight into a URL.)

import { useParams, Link } from "react-router";
import type { Product } from "../../types/Product";
import { useFetch } from "../../hooks/useFetch";

type ProductResponse = {
    id: number;
    title: string;
    price: number;
};

export function ProductDetailPage() {
    const { id } = useParams();
    const {
        data: product,
        loading,
        error,
    } = useFetch<ProductResponse, Product>(`/products/${id}.json`, (raw) => ({
        id: raw.id,
        name: raw.title,
        price: raw.price,
    }));

    if (loading) { return <p>Loading product...</p>;}

    if (error || !product) { return <p>{error ?? "Product not found."} </p> }

    return (
        <div>
            <h1>{product.name}</h1>
            <p>€{product.price}</p>
            <Link to="/products">Back to products</Link>
        </div>
    );
}