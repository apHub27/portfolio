import React from "react";
import "./Navbar.css";

const Navbar = () =>{
    return(
        <nav className="navbar">
            <div className="logo">My Portfolio</div>
            <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">contact</a></li>
            </ul>
        </nav>
    )
};
export default Navbar;