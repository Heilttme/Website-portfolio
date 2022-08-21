import React, {useContext} from "react";
import design from "../images/design.jpg"
import backend from "../images/backend.png"
import frontend from "../images/frontend.png"
import { AppContext } from "./AppContext";

export default function Skills(props) {
    const {language} = useContext(AppContext)

    if (language === 'ru-RU'){
        return (
            <div className="skills main">
                <div className="cards">
                    <div className="card">
                        <div className="image-container">
                            <img src={design}></img>
                            <h1>Web design</h1>
                        </div>
                        <div className="skills-container">
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Sass</li>
                                <li>Tailwind CSS</li>
                                <li>Figma</li>
                                
                                <li>Responsive design</li>
                                <li>UI</li>
                                <li>UX</li>
                                <li>Web</li>
                                <li>Apps</li>
    
                            </ul>
                            <div className="hidden-text-1">
                                <p>Дизайн - моя одержимость.</p>
                                <p>Я обожаю создавать и подхожу ответственно к тому, что создаю.</p>
                                <p>Мой дизайн чист и интерактивен.</p>
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
                                <li>Styled components</li>
                                <li>Redux</li>
                                <li>Git</li>
                            </ul>
                            <div className="hidden-text-2">
                                <p>Frontend - моя одержимость.</p>
                                <p>Я обожаю с нуля воссоздавать сложные структуры кода.</p>
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
                                <li>Django REST API</li>
                                <li>Flask</li>
                                <li>Flask REST API</li>
                            </ul>
                            <div className="hidden-text-3">
                                <p>Backend - моя одержимость.</p>
                                <p>Я подхожу к Backend'у с ответственностью и сохраняю его шаткую структурую</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="skills main">
                <div className="cards">
                    <div className="card">
                        <div className="image-container">
                            <img src={design}></img>
                            <h1>Web design</h1>
                        </div>
                        <div className="skills-container">
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Sass</li>
                                <li>Tailwind CSS</li>
                                <li>Figma</li>
                                
                                <li>Responsive design</li>
                                <li>UI</li>
                                <li>UX</li>
                                <li>Web</li>
                                <li>Apps</li>
    
                            </ul>
                            <div className="hidden-text-1">
                                <p>Design is my possesion.</p>
                                <p>I both enjoy and take serious care of things i create.</p>
                                <p>I keep my design clean and interactive.</p>
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
                                <li>Styled components</li>
                                <li>Redux</li>
                                <li>Git</li>
                            </ul>
                            <div className="hidden-text-2">
                                <p>Frontend is my possesion.</p>
                                <p>I enjoy bringing to life complex code structures from scratch.</p>
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
                                <li>Django REST API</li>
                                <li>Flask</li>
                                <li>Flask REST API</li>
                            </ul>
                            <div className="hidden-text-3">
                                <p>Backend is my possesion.</p>
                                <p>I take backend responsibly and keep its wobby structure carefully.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 