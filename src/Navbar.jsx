import "./Navbar.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
    const [theme, setTheme] = useState("light");
    const [isOpen, setIsOpen] = useState(false);
    const closeMenue = () => setIsOpen(false);

    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Connect", path: "/connect" }
    ];

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light");
    };

    return (
        <div className="Navbar">
            <button
                className="menue"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                {isOpen ? <CloseIcon sx={{ color: "var(--accent)" }}/> : <MenuIcon sx={{ color: "var(--accent)" }}/>}
            </button>

            <div className={`nav-link ${isOpen? "active1" : ""}`}>
                {links.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        onClick={closeMenue}
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        {item.name}
                    </NavLink>
                ))}
            </div>

            <p>Always be happy :)</p>

            <button onClick={toggleTheme} className="theme-toggle">
                {theme === "light" ? "🌙" : "☀️"}
            </button>
        </div>
    );
}