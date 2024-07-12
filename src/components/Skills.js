import React, {useEffect} from "react";
import design from "../images/design.jpg"
import backend from "../images/backend.png"
import frontend from "../images/frontend.png"
import { t } from "i18next";

export default function Skills({language}) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="skills main">
            <div className="cards">
                <div className="card">
                    <div className="image-container">
                        <img src={design}></img>
                        <h1>{t("Web design")}</h1>
                    </div>
                    <div className="skills-container">
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Sass</li>
                            <li>Figma</li>
                            
                            <li>Responsive design</li>
                            <li>UI</li>
                            <li>UX</li>
                            <li>Web</li>

                        </ul>
                        <div className="hidden-text-1">
                            <p>{t("Design is my possesion.")}</p>
                            <p>{t("I both enjoy and take serious care of things i create.")}</p>
                            <p>{t("I keep my design clean and interactive.")}</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="image-container">
                        <img src={frontend}></img>
                        <h1>Frontend</h1>
                    </div>
                    <div className="skills-container">
                        <ul>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Effector</li>
                            <li>Webpack</li>
                            <li>Jest</li>
                            <li>Git</li>
                        </ul>
                        <div className="hidden-text-2">
                            <p>{t("Frontend is my possesion.")}</p>
                            <p>{t("I enjoy bringing to life complex code structures from scratch.")}</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="image-container">
                        <img src={backend}></img>
                        <h1>Backend</h1>
                    </div>
                    <div className="skills-container">
                        <ul>
                            <li>Python</li>
                            <li>Django</li>
                            <li>Django Rest Framework</li>
                            <li>Flask</li>
                            <li>Flask REST API</li>
                        </ul>
                        <div className="hidden-text-3">
                            <p>{t("Backend is my possesion.")}</p>
                            <p>{t("I take backend responsibly and keep its wobby structure carefully.")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 