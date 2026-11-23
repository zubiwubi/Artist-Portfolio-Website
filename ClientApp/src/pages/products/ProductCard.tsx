//import "./ProductCard.css"

import type { Product } from "../../types/Product";
import styles from "./ProductCard.module.css";
import { Link } from "react-router";

type ProductCardProps = {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (id: number) => void;
};

export function ProductCard({ product, onEdit, onDelete }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <h3>
        <Link to={`/products/${product.id}`}>{product.name}</Link></h3>
      <p>€{product.price}</p>
      <button onClick={() => onEdit(product)}>Edit</button>
      <button onClick={() => onDelete(product.id)}>Delete</button>
    </div>
  );
}