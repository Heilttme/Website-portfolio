import React from "react"
import pc_bg from "../images/pc_bg.png"
import emoji from "../images/emoji.png"
import monitor from "../images/monitor.png"
import smartphone from "../images/smartphone.png"
import server from "../images/server.png"
import { Link } from "react-router-dom"


export default function Home(props) {
    return (
        <div className="home">
            <div className="introduction">
                <div className="speech">
                    <h2>Hi, I'm</h2>
                    <span className="name">
                        <span className="scale">
                            <span className="translate">
                                <span>N</span>
                            </span>
                        </span>
                    </span>
                    <span className="name">
                        <span className="scale">
                            <span className="translate">
                                <span>i</span>
                            </span>
                        </span>
                    </span>
                    <span className="name">
                        <span className="scale">
                            <span className="translate">
                                <span>k</span>
                            </span>
                        </span>
                    </span>
                    <span className="name">
                        <span className="scale">
                            <span className="translate">
                                <span>i</span>
                            </span>
                        </span>
                    </span>
                    <span className="name">
                        <span className="scale">
                            <span className="translate">
                                <span>t</span>
                            </span>
                        </span>
                    </span>
                    <span className="name">
                        <span className="scale">
                            <span className="translate">
                                <span>a</span>
                            </span>
                        </span>
                    </span>

                        <strong> </strong>

                    <span className="name">
                        <span className="scale">
                            <span className="translate">
                                <span>S</span>
                            </span>
                        </span>
                    </span>
                    <span className="name">
                        <span className="scale">
                            <span className="translate">
                                <span>o</span>
                            </span>
                        </span>
                    </span>
                    <span className="name">
                        <span className="scale">
                            <span className="translate">
                                <span>r</span>
                            </span>
                        </span>
                    </span>
                    <span className="name">
                        <span className="scale">
                            <span className="translate">
                                <span>o</span>
                            </span>
                        </span>
                    </span>
                    <span className="name">
                        <span className="scale">
                            <span className="translate">
                                <span>k</span>
                            </span>
                        </span>
                    </span>
                    <span className="name">
                        <span className="scale">
                            <span className="translate">
                                <span>i</span>
                            </span>
                        </span>
                    </span>
                    <span className="name">
                        <span className="scale">
                            <span className="translate">
                                <span>n</span>
                            </span>
                        </span>
                    </span>
                    <h2>UI/UX Designer, Web Developer</h2>
                    <p>I design and code things simple and beautiful</p>
                    <Link to="/contact">Contact me</Link>
                </div>
                <img src={emoji}></img>
            </div>
            <div className="bottom-img">
                <img src={pc_bg}/>
            </div>
            <div className="about">
                <div className="left-col">
                    <h1>About me</h1>
                    <p>I'm a Web Developer located in Russia. I'm passionate about coding and creating design.</p>
                    <p>Approachable, confident, hard-working and well-organised person.</p>
                    <p>Keen on anime, working out in gym, calisthenics and self-improvement.</p>
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