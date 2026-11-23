import { Link, Outlet } from "react-router";
import { useAuth } from "../auth/AuthContext";

export function Layout() {
    const { user, logout } = useAuth();

    return (
        <div>
            <header>
                <nav>
                    <Link to="/">Home </Link>
                    <Link to="/products">Products </Link>
                    <Link to="/artworks">Artworks </Link>
                    { user ? ( <button onClick={logout}>LOG OUT ({user.username})</button> ) : ( <Link to="/login"><button>LOG IN</button></Link> ) }
                </nav>
            </header>
            <main>
                <Outlet />
                {/* Outlet is a placeholder, it matches with whichever child route matches */}
            </main>
        </div>
    );
}