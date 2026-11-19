import { useState } from 'react';
import type { SubmitEvent } from 'react';

type ProductFormProps = {
    onAdd: (name: string, price: number) => void;
};

export function ProductForm({ onAdd }: ProductFormProps) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);

    function handleSubmit(event: SubmitEvent) {
        event.preventDefault();
        if (name.trim() === "" || price <= 0) {
            return;
        }
        onAdd(name, price);
        setName("");
        setPrice(0);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2> Add Product </h2>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            <input type="number" value={price} onChange={(event) => setPrice(Number(event.target.value))} /> 
            {/*Number(...) exports the given input to an int */}
            <button type="submit">Add</button>
        </form>
    );
}