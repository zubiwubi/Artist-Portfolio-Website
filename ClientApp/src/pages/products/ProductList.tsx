import type { Product } from "../../types/Product";
import { ProductCard } from "./ProductCard";
import "./ProductList.css";

type ProductListProps = {
  products: Product[]
  onEdit: (product: Product) => void;
  onDelete: (id: number) => void;
};

export function ProductList({ products, onDelete, onEdit }: ProductListProps) {
  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onDelete={onDelete} onEdit={onEdit}/>
      ))}
    </div>
  );
}