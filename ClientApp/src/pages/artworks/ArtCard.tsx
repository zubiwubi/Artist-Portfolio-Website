import type { Artwork } from "../../types/Artwork";
import styles from "./ProductCard.module.css";

type ArtworkCardProps = {
    artwork : Artwork;
}

export function ArtworkCard({ artwork }: ArtworkCardProps) {
    return (
        <div className={styles.card}>
            <h3>{artwork.title}</h3>
            <h4>Artist: {artwork.artist}</h4>
            <p>{artwork.creationDate}</p>
        </div>
    );
}