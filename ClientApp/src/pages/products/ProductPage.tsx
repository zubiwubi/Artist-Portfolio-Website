import { useState } from "react";
import { useEffect } from "react";
import type { Product } from "../../types/Product";
import { ProductForm } from "./ProductForm";
import { ProductList } from "./ProductList";

  type ProductResponse = {
    id: number;
    title: string;
    price: number;
  }; // our type that we have

export function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
// the initial value is now this list
// useState(0) -> here 0 = initial value

useEffect(() => {
  async function loadProducts() {
    try {
      const response = await fetch("/products.json");
      if (!response.ok) { //response.ok is true for the success status codes (200 to 299) and false for everything else:
        throw new Error(`Request failed with this status: ${response.status}`);
      }
      const data: ProductResponse[] = await response.json();
      setProducts(
        data.map((item) => ({
          id: item.id,
          name: item.title,
          price: item.price,
        })),
      );
    } 
      catch (err) {
      console.error(err);
      setError("Could not load products.");
    } finally {
      setLoading(false);
    }
  }
  loadProducts();
}, []);



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

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Products</h1>
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