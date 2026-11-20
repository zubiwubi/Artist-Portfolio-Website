import { useState } from "react";
import type { Product } from "../../types/Product";
import { ProductForm } from "./ProductForm";
import { ProductList } from "./ProductList";

export function ProductPage() {
  const [products, setProducts] = useState<Product[]>([
  // useState accepts a generic type - it says the state is an array of Product, so setProducts will only accept a Product[]
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Headphones", price: 150 },
]);
// the initial value is now this list
// useState(0) -> here 0 = initial value
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  function addProduct(name: string, price: number) {
    const newProduct: Product = { id: Date.now(), name, price };
    setProducts([...products, newProduct]);
  } // ... -> unpacks not only products, but also the data within a product (like a name and price)

  function deleteProduct(id: number) {
    setProducts(products.filter((p) => p.id !== id));
  }

  function updateProduct(updated: Product) {
    setProducts(products.map((p) => (p.id === updated.id ? updated : p)));
    setEditingProduct(null);
  }

  function startEditing(product: Product) {
    setEditingProduct(product);
  }

  function cancelEdit(){
    setEditingProduct(null);
  }

  return (
    <div>
      <h1> All of my Very Real Products </h1>
      <ProductForm
        key={editingProduct?.id ?? "new"}
        editingProduct={editingProduct}
        onAdd={addProduct} 
        onUpdate={updateProduct}
        onCancel={cancelEdit}
      />
      <ProductList
        products={products}
        onEdit={startEditing}
        onDelete={deleteProduct} 
      />
      </div>
  );
}