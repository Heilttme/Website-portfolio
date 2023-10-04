import React, { useEffect } from "react";
import forest from "../images/forest.png"
import lootmakers from "../images/lootmakers.jpg"
import calierre from "../images/calierre.jpg"
import { t } from "i18next";


export default function Projects({language}) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="projects main">
            <h1>{t("Here are my past projects I've worked on")}</h1>
            <div className="cards">
                <div className="card">
                    <div className="card-inner">
                        <div className="card-front">
                            <img src={lootmakers}></img>
                        </div>
                        <div className="card-back">
                            <a target="_blank" href="https://github.com/Heilttme/TOY">{t("Visit")}</a>
                        </div>
                    </div>
                </div>
                
            
                <div className="card">
                    <div className="card-inner">
                        <div className="card-front">
                            <img src={calierre}></img>
                        </div>
                        <div className="card-back">
                            <a target="_blank" href="https://calierre.ru">{t("Visit")}</a>
                        </div>
                    </div>
                </div>
                
                <div className="card">
                    <div className="card-inner">
                        <div className="card-front">
                            <img src={forest}></img>
                        </div>
                        <div className="card-back">
                            <a target="_blank" href="https://github.com/Heilttme/forest-accomodation">{t("Visit")}</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
} 