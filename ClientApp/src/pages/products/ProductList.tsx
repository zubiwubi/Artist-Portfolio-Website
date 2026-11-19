import type { Product } from "../../types/Product";
import { ProductCard } from "../../components/ProductCard";
import "./ProductList.css";

type ProductListProps = {
  products: Product[];
  onDelete: (id: number) => void;
};

export function ProductList({ products, onDelete }: ProductListProps) {
  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onDelete={onDelete}/>
      ))}
    </div>
  );
}