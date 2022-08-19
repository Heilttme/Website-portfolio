import React from "react";
import { Link, NavLink } from "react-router-dom"
import instagram from '../images/instagram.svg'
import telegram from '../images/telegram.svg'
import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'

export default function Navigation() {
    return (
        <header>
            <Link to="/" className="logo">@Heilttme</Link>
            <nav>
                <ul className="nav">
                    <li><NavLink className={({isActive}) => isActive && "active"} to="/skills">My skills</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive && "active"} to="/projects">My projects</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive && "active"} to="/contact">Contact me</NavLink></li>
                </ul>
                <ul className="icons">
                    <li><a href="https://instagram.com/nekitouss?igshid=YmMyMTA2M2Y="><img className="filter-green" src={instagram}/></a></li>
                    <li><a href="https://t.me/Heilttme"><img className="filter-green" src={telegram}/></a></li>
                    <li><a href="https://github.com/Heilttme"><img className="filter-green" src={github}/></a></li>
                    <li><a href="https://www.linkedin.com/in/nikita-sorokin-b40433249/"><img className="filter-green" src={linkedin}/></a></li>
                </ul>
            </nav>
        </header>
    )
}