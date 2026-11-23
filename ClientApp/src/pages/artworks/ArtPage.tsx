import { useState } from "react";
import { useEffect } from "react";
import type { Artwork } from "../../types/Artwork";
import { ArtList } from "./ArtList";

type ArtworkResponse = {
    id: number;
    "artwork-title": string;
    artist: string;
    "creation-date": string;
};

export function ArtworkPage() {
    const [artworks, setArtworks] = useState<Artwork[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadArtworks() {
            try {
                const response = await fetch("/artworks.json");
                if (!response.ok) {
                    throw new Error(`Request failed with this status: ${response.status}`);
                }
                const data: ArtworkResponse[] = await response.json();
                setArtworks(
                    data.map((item) => ({
                        id: item.id,                        // same on both sides
                        title: item["artwork-title"],       // JSON name → your name
                        artist: item.artist,
                        creationDate: item["creation-date"],    // JSON name → your name
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
        loadArtworks();
    }, []);

    if (loading) {return <p>Loading artworks...</p>; }
    if (error) {return <p>{error}</p>; }

    return (
        <div>
            <h1>Artworks</h1>
            <ArtList artworks={artworks} />
        </div>
    );
}
