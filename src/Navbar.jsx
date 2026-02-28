import "./Navbar.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [theme, setTheme] = useState("light");

    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Connect", path: "/connect"}
    ];

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light");
    };

    return (
        <div className="Navbar">
            <div className="nav-link">
                {links.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
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