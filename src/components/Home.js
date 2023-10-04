import React, {useEffect, useRef, useState} from "react"
import pc_bg from "../images/pc_bg.png"
import emoji from "../images/emoji.png"
import monitor from "../images/monitor.png"
import smartphone from "../images/smartphone.png"
import server from "../images/server.png"
import { Link } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import { t } from "i18next"

export default function Home() {
    const nameRef = useRef(null)
    const [name, setName] = useState([t('N'), t('i'), t('k'), t('i'), t('t'), t('a'), ' ', t('S'), t('o'), t('r'), t('o'), t('k'), t('i'), t('n')])

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

    return (
        <div className="home main">
            <div className="introduction">
                <div className="speech">
                    <h2>{t("Hi, I'm")}</h2>
                    <div ref={nameRef} className="full-name">
                        {nameSpans}
                    </div>
                    <h2>{t("Web Developer")}</h2>
                    <p>{t("I design and code things simple and beautiful")}</p>
                    <Link to="/contact">{t("Contact me")}</Link>
                </div>
                <img src={emoji}></img>
            </div>
            <div className="bottom-img">
                <img src={pc_bg}/>
                <div className="scroll">{t("scroll down -")}&#62;</div>
            </div>
            <div className="about">
                <div className="left-col">
                    <h1>{t("About me")}</h1>
                    <p>{t("I'm a Web Developer located in Russia. I'm passionate about coding and creating design.")}</p>
                    <p>{t("Approachable, confident, hard-working and well-organised person.")}</p>
                    <p>{t("Keen on working out in gym, calisthenics and self-improvement.")}</p>
                </div>
                <div className="right-col">
                    <div className="cards">
                        <div className="card">
                            <img src={monitor}/>
                            <h2>{t("Web design")}</h2>
                            <p>{t("Clean and modern UI/UX design")}</p>
                        </div>
                        <div className="card">
                            <img className="smartphone" src={smartphone}/>
                            <h2>{t("Responsive design")}</h2>
                            <p>{t("Responsive web design for all platforms")}</p>
                        </div>
                        <div className="card">
                            <img src={server}/>
                            <h2>{t("Backend")}</h2>
                            <p>{t("A bit of well-optimised backend")}</p>
                        </div>
                    </div>
                <Link to="/skills">{t("Learn more")}</Link>
                </div>
            </div>
        </div>
    )
}