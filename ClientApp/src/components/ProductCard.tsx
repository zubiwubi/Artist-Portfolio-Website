import "./ProductCard.css"
import type { Product } from "../types/Product"

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>€{product.price}</p>
    </div>
  );
}