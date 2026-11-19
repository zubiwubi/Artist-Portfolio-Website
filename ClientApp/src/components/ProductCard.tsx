import "./ProductCard.css"
import type { Product } from "../types/Product"

type ProductCardProps = {
  product: Product;
  onDelete: (id: number) => void;
};

export function ProductCard({ product, onDelete }: ProductCardProps) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>€{product.price}</p>
      <button onClick={() => onDelete(product.id)}>Delete</button>
    </div>
  );
}