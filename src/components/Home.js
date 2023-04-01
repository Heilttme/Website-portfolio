import React, {useContext, useEffect, useRef} from "react"
import pc_bg from "../images/pc_bg.png"
import emoji from "../images/emoji.png"
import monitor from "../images/monitor.png"
import smartphone from "../images/smartphone.png"
import server from "../images/server.png"
import { Link } from "react-router-dom"
import {AppContext} from "./AppContext"
import { v4 as uuidv4 } from 'uuid';

export default function Home(props) {
    const nameRef = useRef(null)
    const {language} = useContext(AppContext)
    const name = language.includes("en") ? 
        ['N', 'i', 'k', 'i', 't', 'a', ' ', 'S', 'o', 'r', 'o', 'k', 'i', 'n'] 
            :
        ['Н', 'и', 'к', 'и', 'т', 'а', ' ', 'С', 'о', 'р', 'о', 'к', 'и', 'н']

    useEffect(() => {
        window.scrollTo(0, 0)
        }, [])

    const nameSpans = name.map(el => {
        if (el !== ' '){
            return (
                <div key={uuidv4()} className="name">
                    <div>{el}</div>
                </div>
            ) 
        } else {
            return (
                <strong key={uuidv4()}> </strong>
            ) 
        }
    }) 

    useEffect(() => {
        const nameArray = Array.from(
          document.getElementsByClassName('name')
        )

        for (let i = 0; i < 1000; i++){
            setTimeout(() => {
                nameArray.map(el => {
                    el.classList.add('animated')
                })
            }, (i * 1000) + 1000)
    
            setTimeout(() => {
                nameArray.map(el => {
                    el.classList.remove('animated')
                })
                
            }, (i * 1000) + 3000)

        }
        
      }, [])

    if (language === 'ru-RU'){
        return (
            <div className="home main">
                <div className="introduction">
                    <div className="speech">
                        <h2>Привет, меня зовут</h2>
                        <div ref={nameRef} className="full-name">
                            {nameSpans}
                        </div>
                        <h2>UI/UX Designer, Web Developer</h2>
                        <p>Я создаю код и дизайн просто и красиво</p>
                        <Link to="/contact">Связь со мной</Link>
                    </div>
                    <img src={emoji}></img>
                </div>
                <div className="bottom-img">
                    <img src={pc_bg}/>
                    <div className="scroll">пролистай вниз -&#62;</div>
                </div>
                <div className="about">
                    <div className="left-col">
                        <h1>Обо мне</h1>
                        <p>Я Web-разработчик из России. Я обожаю программирование и дизайн.</p>
                        <p>Охотно идущая навстречу, уверенная, трудолюбивая и организованная личность.</p>
                        <p>Увлекаюсь занятием в зале, ворк-аутом и саморазвитием.</p>
                    </div>
                    <div className="right-col">
                        <div className="cards">
                            <div className="card">
                                <img src={monitor}/>
                                <h2>Web design</h2>
                                <p>Современный UI/UX дизайн</p>
                            </div>
                            <div className="card">
                                <img className="smartphone" src={smartphone}/>
                                <h2>Responsive design</h2>
                                <p>Отзывчивый Веб-дизайн для всех платформ</p>
                            </div>
                            <div className="card">
                                <img src={server}/>
                                <h2>Backend</h2>
                                <p>Чуточка оптимизированного Backend'а</p>
                            </div>
                        </div>
                    <Link to="/skills">Больше информации</Link>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="home main">
                <div className="introduction">
                    <div className="speech">
                        <h2>Hi, I'm</h2>
                        <div ref={nameRef} className="full-name">
                            {nameSpans}
                        </div>
                        <h2>UI/UX Designer, Web Developer</h2>
                        <p>I design and code things simple and beautiful</p>
                        <Link to="/contact">Contact me</Link>
                    </div>
                    <img src={emoji}></img>
                </div>
                <div className="bottom-img">
                    <img src={pc_bg}/>
                    <div className="scroll">scroll down -&#62;</div>
                </div>
                <div className="about">
                    <div className="left-col">
                        <h1>About me</h1>
                        <p>I'm a Web Developer located in Russia. I'm passionate about coding and creating design.</p>
                        <p>Approachable, confident, hard-working and well-organised person.</p>
                        <p>Keen on working out in gym, calisthenics and self-improvement.</p>
                    </div>
                    <div className="right-col">
                        <div className="cards">
                            <div className="card">
                                <img src={monitor}/>
                                <h2>Web design</h2>
                                <p>Clean and modern UI/UX design</p>
                            </div>
                            <div className="card">
                                <img className="smartphone" src={smartphone}/>
                                <h2>Responsive design</h2>
                                <p>Responsive web design for all platforms</p>
                            </div>
                            <div className="card">
                                <img src={server}/>
                                <h2>Backend</h2>
                                <p>A bit of well-optimised backend</p>
                            </div>
                        </div>
                    <Link to="/skills">Learn more</Link>
                    </div>
                </div>
            </div>
        )
    }
}