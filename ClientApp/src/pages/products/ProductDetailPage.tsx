// useParams gives you the values from the : segments of the current URL, 
// so here you get id, like we specified in the route. 
// (It's always a string, never a number, which is fine for us because it goes straight into a URL.)

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import type { Product } from "../../types/Product";

type ProductResponse = {
    id: number;
    title: string;
    price: number;
};

export function ProductDetailPage(){
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadProducts() {
            try {
                const response = await fetch(`/products/${id}.json`);
                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`);
                }
                const data: ProductResponse = await response.json();
                setProduct({ id: data.id, name: data.title, price: data.price});
            } catch (err) {
                console.error(err);
                setError("Could not load this product.");
            } finally {
                setLoading(false);
            }
        }
        loadProducts();
    }, [id]);

    if (loading) {
        return <p>Loading products...</p>
    }

    if (error || !product) {
        return <p>{error ?? "Product not found."} </p>
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <p>€{product.price}</p>
            <Link to="/products">Back to products</Link>
        </div>
    );
}