import { useFetch } from "../hooks/useFetch";
import type { Category } from "../types/Category";

type CategoryResponse = {
  id: number;
  label: string;
};

export function HomePage() {
  const { data: categories } = useFetch<CategoryResponse[], Category[]>(
    "/categories.json",
    (raw) => raw.map((item) => ({ id: item.id, name: item.label })),
  );

  return (
    <div>
      <h1>Welcome to the product catalog</h1>
      <p>Browse the products, or pick one to see its details.</p>
      <ul>
        {(categories ?? []).map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}