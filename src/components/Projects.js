import React from "react";
import forest from "../images/forest.png"
import bleach from "../images/bleach.png"

export default function Projects(props) {
    return (
        <div className="projects">
            <h1>Here are my past projects I've worked on</h1>
            <div className="cards">
                <div className="card">
                    <div className="card-inner">
                        <div className="card-front">
                            <img src={forest}></img>
                        </div>
                        <div className="card-back">
                            <a href="#">Visit</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <div className="card-front">
                            <img src={bleach}></img>
                        </div>
                        <div className="card-back">
                            <a href="#">Visit</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 