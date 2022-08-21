import React, {useContext, useRef} from "react";
import { AppContext } from "./AppContext";
import { Link, NavLink } from "react-router-dom"
import instagram from '../images/instagram.svg'
import telegram from '../images/telegram.svg'
import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'

export default function Navigation(props) {
    const {language, setLanguage} = useContext(AppContext)
    const switchRef = useRef(null)

    function switchLanguage(){
        if (language === "ru-RU"){
            setLanguage("en-EN")
            switchRef.current.className = "switch-language-wrapper"
        } else {
            setLanguage("ru-RU")
            switchRef.current.className = "switch-language-wrapper toggled"
        }
    }


    if (language === 'ru-RU') {
        return (
            <header className={props.menuOpened ? "opened" : "closed"}>
                <Link onClick={props.toggleMenu} to="/" className="logo">@Heilttme</Link>
                <nav>
                    <ul className="nav">
                        <li onClick={props.toggleMenu}><NavLink className={({isActive}) => isActive ? "active" : ""} to="/skills">Мои умения</NavLink></li>
                        <li onClick={props.toggleMenu}><NavLink className={({isActive}) => isActive ? "active" : ""} to="/projects">Мои проекты</NavLink></li>
                        <li onClick={props.toggleMenu}><NavLink className={({isActive}) => isActive ? "active" : ""} to="/contact">Связь со мной</NavLink></li>
                    </ul>
                    <ul className="icons">
                        <li><a href="https://instagram.com/nekitouss?igshid=YmMyMTA2M2Y="><img className="filter-green" src={instagram}/></a></li>
                        <li><a href="https://t.me/Heilttme"><img className="filter-green" src={telegram}/></a></li>
                        <li><a href="https://github.com/Heilttme"><img className="filter-green" src={github}/></a></li>
                        <li><a href="https://www.linkedin.com/in/nikita-sorokin-b40433249/"><img className="filter-green" src={linkedin}/></a></li>
                        <li>
                            <div ref={switchRef} onClick={switchLanguage} className={language === "ru-RU" ? "switch-language-wrapper toggled" : "switch-language-wrapper"}>
                                <div className="switch"><div className="ball"></div></div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    } else {
        return (
            <header className={props.menuOpened ? "opened" : "closed"}>
                <Link onClick={props.toggleMenu} to="/" className="logo">@Heilttme</Link>
                <nav>
                    <ul className="nav">
                        <li onClick={props.toggleMenu}><NavLink className={({isActive}) => isActive ? "active" : ""} to="/skills">My skills</NavLink></li>
                        <li onClick={props.toggleMenu}><NavLink className={({isActive}) => isActive ? "active" : ""} to="/projects">My projects</NavLink></li>
                        <li onClick={props.toggleMenu}><NavLink className={({isActive}) => isActive ? "active" : ""} to="/contact">Contact me</NavLink></li>
                    </ul>
                    <ul className="icons">
                        <li><a href="https://instagram.com/nekitouss?igshid=YmMyMTA2M2Y="><img className="filter-green" src={instagram}/></a></li>
                        <li><a href="https://t.me/Heilttme"><img className="filter-green" src={telegram}/></a></li>
                        <li><a href="https://github.com/Heilttme"><img className="filter-green" src={github}/></a></li>
                        <li><a href="https://www.linkedin.com/in/nikita-sorokin-b40433249/"><img className="filter-green" src={linkedin}/></a></li>
                        <li>
                            <div ref={switchRef} onClick={switchLanguage} className={language === "ru-RU" ? "switch-language-wrapper toggled" : "switch-language-wrapper"}>
                                <div className="switch"><div className="ball"></div></div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}