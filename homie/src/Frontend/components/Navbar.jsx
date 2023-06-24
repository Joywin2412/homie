import React from "react";
import "../components/Navbar.module.css";
export const Navbar = () => {
    return (
        <nav className="navBox">
            <div>
            <h2 style={{
                fontSize:'2.25rem',
                margin:'auto'
            }}>homie</h2>
            </div>
            <div className="navlinks">
            <h3>Home</h3>
            <h3>About</h3>
            <h3>The designers</h3>
            <h3>The devs</h3>
            </div>
            
            <div className="btnBox">
                <button className="btnPrimary">Login</button>
                <button className="btnSecondary">Signup</button>
            </div>
        </nav>
    )
}