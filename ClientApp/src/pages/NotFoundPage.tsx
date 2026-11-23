import { Link } from "react-router"

export function NotFoundPage() {
    return (
        <div>
            <h1> 404 - PAGE NOT FOUND </h1>
            <p> This page does not exist, oops! </p>
            <Link to="/">Back to home</Link>
        </div>
    );
}