import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
            <Link to="/login">Login</Link>
        </nav>
    );
};

export default Navbar;