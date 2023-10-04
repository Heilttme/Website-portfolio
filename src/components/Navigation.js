import React, { useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import instagram from '../images/instagram.svg'
import telegram from '../images/telegram.svg'
import github from '../images/github.svg'
import { useTranslation } from 'react-i18next'

export default function Navigation({menuOpened, toggleMenu, language, changeLanguage}) {
    const { t, i18n } = useTranslation()
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <header className={menuOpened ? "opened" : "closed"}>
            <Link to="/" className="logo" onClick={() => toggleMenu(false)}>@Heilttme</Link>
            <nav>
                <ul className="nav">
                    <li onClick={() => toggleMenu(false)}><NavLink className={({isActive}) => isActive ? "active" : ""} to="/skills">{t("My skills")}</NavLink></li>
                    <li onClick={() => toggleMenu(false)}><NavLink className={({isActive}) => isActive ? "active" : ""} to="/projects">{t("My projects")}</NavLink></li>
                    <li onClick={() => toggleMenu(false)}><NavLink className={({isActive}) => isActive ? "active" : ""} to="/contact">{t("Contact me")}</NavLink></li>
                </ul>
                <ul className="icons">
                    <li><a target="_blank" href="https://instagram.com/nekitouss?igshid=YmMyMTA2M2Y="><img className="filter-green" src={instagram}/></a></li>
                    <li><a target="_blank" href="https://t.me/Heilttme"><img className="filter-green" src={telegram}/></a></li>
                    <li><a target="_blank" href="https://github.com/Heilttme"><img className="filter-green" src={github}/></a></li>
                    {/* <li><a href="https://www.linkedin.com/in/nikita-sorokin-b40433249/"><img className="filter-green" src={linkedin}/></a></li> */}
                    <li>
                        <div onClick={changeLanguage} className={i18n.language === "ru" ? "switch-language-wrapper toggled" : "switch-language-wrapper"}>
                            <div className="switch"><div className="ball"></div></div>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}