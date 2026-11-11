import type { Product } from "../../types/Product";
import { ProductList } from "./ProductList";
import { useState } from "react";

export function ProductPage() {
  const [products, setProducts] = useState<Product[]>([
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Headphones", price: 150 },
]);;

  return (
    <div>
      <h1> All of my Very Real Products </h1>
      <ProductList products={products} />
    </div>
  );
}