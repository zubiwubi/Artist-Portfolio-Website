import { useState } from 'react';
import type { SubmitEvent } from 'react';
import type { Product } from '../../types/Product';

type ProductFormProps = {
    editingProduct: Product | null;
    onAdd: (name: string, price: number) => void;
    onUpdate: (product:Product) => void;
    onCancel: () => void;
};

// WITHOUT destructuring — what you're used to:
// function ProductForm(props: ProductFormProps) {
//     props.onAdd("chair", 49.99);   // have to write props. every time
// }

export function ProductForm(props: ProductFormProps) {
    const [name, setName] = useState(props.editingProduct?.name ?? ""); //The ?. reads .name only when editingProduct is not null.
    const [price, setPrice] = useState( props.editingProduct?.price ?? 0); // The ?? falls back to `""` or `0` when it is null.
    const [editingProduct, setEditingProduct] = useState<Product | null>(null); // if this is null, then we're not in edit mode

    function handleSubmit(event: SubmitEvent) {
        event.preventDefault(); // makes it so only the component reloads, not the whole site + lets you enter data with [Enter]
        if (name.trim() === "" || price <= 0) {
            return;
        } // if there's no name or the price is 0, the program quietly stops
        if (editingProduct){
            props.onUpdate({ id: editingProduct.id, name, price });
            return;
        } else {
            props.onAdd(name,price);
        }
        setName("");
        setPrice(0);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>{editingProduct ? "Edit product" : "Add product"}</h2>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            <input type="number" value={price} onChange={(event) => setPrice(Number(event.target.value))} /> 
            {/*Number(...) exports the given input to an int */}
            <button type="submit">{editingProduct ? "Save" : "Add"}</button>
            {editingProduct && (
                <button type="button" onClick={props.onCancel}> Cancel </button>)}
        </form>
    );
}