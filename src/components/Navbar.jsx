import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle("bg-dark");
        document.body.classList.toggle("text-white");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">
                    <i className="bi bi-shop"></i> E-Shop
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/app/collections">Collections</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-primary text-white ms-2" to="/signup">Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link position-relative" to="/cart">
                                <i className="bi bi-cart-fill fs-5"></i>
                                <span
                                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                    style={{ fontSize: "0.75rem" }}
                                >
                                    3
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item d-flex align-items-center ms-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="darkModeToggle"
                                onChange={toggleDarkMode}
                            />
                            <label
                                className="form-check-label text-white ms-2"
                                htmlFor="darkModeToggle"
                            >
                                Dark Mode
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
