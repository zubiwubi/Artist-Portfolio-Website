// ArtworkList.tsx
import type { Artwork } from "../../types/Artwork";

type Props = {
    artworks: Artwork[];
};

export function ArtList({ artworks }: Props) {
    return (
        <ul>
            {artworks.map((artwork) => (
                <li key={artwork.id}> "{artwork.title}" by {artwork.artist}</li>
            ))}
        </ul>
    );
}