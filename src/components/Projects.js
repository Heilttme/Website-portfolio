import React, {useContext, useEffect} from "react";
import forest from "../images/forest.png"
import bleach from "../images/bleach.png"
import {AppContext} from "./AppContext"


export default function Projects(props) {
    const {language} = useContext(AppContext)
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    if (language === 'ru-RU'){
        return (
            <div className="projects main">
                <h1>Мои проекты</h1>
                <div className="cards">
                    <div className="card">
                        <div className="card-inner">
                            <div className="card-front">
                                <img src={forest}></img>
                            </div>
                            <div className="card-back">
                                <a href="https://github.com/Heilttme/forest-accomodation">Перейти</a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-inner">
                            <div className="card-front">
                                <img src={bleach}></img>
                            </div>
                            <div className="card-back">
                                <a href="https://github.com/Heilttme/Bleach-Forum-Django">Перейти</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="projects main">
                <h1>Here are my past projects I've worked on</h1>
                <div className="cards">
                    <div className="card">
                        <div className="card-inner">
                            <div className="card-front">
                                <img src={forest}></img>
                            </div>
                            <div className="card-back">
                                <a href="https://github.com/Heilttme/forest-accomodation">Visit</a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-inner">
                            <div className="card-front">
                                <img src={bleach}></img>
                            </div>
                            <div className="card-back">
                                <a href="https://github.com/Heilttme/Bleach-Forum-Django">Visit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 