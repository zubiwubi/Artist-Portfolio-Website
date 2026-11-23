import { Link, Outlet } from "react-router";

export function Layout() {
    return (
        <div>
            <header>
                <nav>
                    <Link to="/">Home </Link>
                    <Link to="/products">Products </Link>
                    <Link to="/artworks">Artworks </Link>
                </nav>
            </header>
            <main>
                <Outlet />
                {/* Outlet is a placeholder, it matches with whichever child route matches */}
            </main>
        </div>
    );
}