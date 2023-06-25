import React from "react";
import "../components/Navbar.module.css";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="navBox">
            <div>
            <h2 style={{
                fontSize:'2.25rem',
                margin:'auto'
            }}>homie</h2>
            </div>
            <div className="navlinks">
            <h3 onClick = {()=>navigate("/")}>Home</h3>
            <h3 onClick = {()=>navigate("/serviceTickets")}> Services</h3>
            <h3 onClick = {()=>navigate("/about")}>About</h3>
            <h3 onClick = {()=>navigate("/devs")}>The devs</h3>
            </div>
            
            <div className="btnBox">
                <button className="btnPrimary" onClick = {()=>navigate("/login")}>Login</button>
                <button className="btnSecondary" onClick = {()=>navigate("/signup")}>Signup</button>
            </div>
        </nav>
    )
}