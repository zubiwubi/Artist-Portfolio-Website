

type ProductCardPropType = {
    title: string,
    description: string,
    price?: Number //optional price variable
}

export function ProductCard(props: ProductCardPropType) {
    return <div className="product-card">
        <h5>{props.title}</h5>
        <p>{props.description}</p>
        <span>{props.price?.toString() ?? "-1"}</span>
    </div>
}

