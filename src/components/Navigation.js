import React from "react";
import { Link } from "react-router-dom"

export default function Navigation() {
    return (
        <header>
            <Link to="/" className="logo">@Heilttme</Link>
            <nav>
                <ul>
                    <li><Link to="/skills">My skills</Link></li>
                    <li><Link to="/projects">My projects</Link></li>
                    <li><Link to="/contact">Contact me</Link></li>
                </ul>
                
            </nav>
        </header>
    )
}