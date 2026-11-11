import type { Product } from "../../types/Product";
import { ProductCard } from "../../components/ProductCard";
import "./ProductList.css";

type ProductListProps = {
  products: Product[];
};

export function ProductList({ products }: ProductListProps) {
  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}