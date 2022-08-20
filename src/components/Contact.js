import React, { useState, useRef, useContext } from "react";
import { AppContext } from "./AppContext";

export default function Contact(props) {
    const {language} = useContext(AppContext)
    const [sent, setSent] = useState(false)
    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            message: "",
            subject: ""
        }
    )

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const messageRef = useRef(null)
    

    function changeData(event) {
        let {name, value} = event.target
        setFormData(prevData => ({
                ...prevData,
                [name]: value
            }
        ))
    }

    function submitForm(){
        if (!formData.name){
            if (language === "ru-RU"){
                nameRef.current.placeholder = "Пожалуйста, введите своё имя"
            } else {
                nameRef.current.placeholder = "Please, enter your name"
            }
            nameRef.current.className = "shaking"
            setTimeout(() => {
                nameRef.current.className = ""
            }, 500)
        }
        if (!formData.email){
            if (language === "ru-RU"){
                emailRef.current.placeholder = "Пожалуйста, введите свою почту"
            } else {
                emailRef.current.placeholder = "Please, enter your email"
            }
            emailRef.current.className = "shaking"
            setTimeout(() => {
                emailRef.current.className = ""
            }, 500)
        }
        if (!formData.message){
            if (language === "ru-RU"){
                messageRef.current.placeholder = "Пожалуйста, введите сообщение"
            } else {
                messageRef.current.placeholder = "Please, enter your message"
            }
            messageRef.current.className = "shaking"
            setTimeout(() => {
                messageRef.current.className = ""
            }, 500)
        }

        if (formData.name && formData.email && formData.message) {
            fetch("https://public.herotofu.com/v1/dd856070-2058-11ed-a969-f1ede4dc5ccf",
                {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
              }
            )
            setSent(true)
        }
    }


    if (language === "ru-RU"){
        return (
            <div className="contact main">
                <div className="left-col">
                    <h1>Свяжитесь со мной</h1>
                    <div className="form">
                        <div className="name-input input">
                            <label htmlFor="name">Ваше имя</label>
                            <input
                                onChange={e => changeData(e)}
                                ref={nameRef}
                                name="name" 
                                id="name" 
                                type="text" 
                                value={formData.name}
                                required />
                        </div>
                        <div className="email-input input">
                            <label htmlFor="email">Ваша почта</label>
                            <input 
                                onChange={e => changeData(e)}
                                ref={emailRef}
                                name="email" 
                                id="email" 
                                type="email" 
                                value={formData.email}
                                required  />
                        </div>
                        <div className="subject-input input">
                            <label htmlFor="subject">Тема</label>
                            <input 
                                onChange={e => changeData(e)}
                                name="subject" 
                                id="subject" 
                                type="subject" 
                                value={formData.subject}
                                required  />
                        </div>
                        <div className="message-input input">
                            <label htmlFor="body">Сообщение</label>
                            <textarea 
                                onChange={e => changeData(e)}
                                ref={messageRef}
                                name="message" 
                                id="body" 
                                type="text"
                                value={formData.message}/>
                        </div>
                        <div className="submit-btn">
                            <button onClick={submitForm}>Отправить</button>
                        </div>
                    </div>
                </div>
                <div style={{opacity: sent ? 1 : 0}} className="right-col">
                        <div className="thank">
                            <h1>Спасибо за ваше сообщение!</h1>
                            <div>
                                <p>Я отвечу настолько быстро насколько смогу!</p>
                                <p>Также не забудьте просмотреть мой GitHub и соцсети.</p>
                            </div>
                        </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="contact main">
                <div className="left-col">
                    <h1>Get in touch with me</h1>
                    <div className="form">
                        <div className="name-input input">
                            <label htmlFor="name">Your Name</label>
                            <input
                                onChange={e => changeData(e)}
                                ref={nameRef}
                                name="name" 
                                id="name" 
                                type="text" 
                                value={formData.name}
                                required />
                        </div>
                        <div className="email-input input">
                            <label htmlFor="email">Your Email</label>
                            <input 
                                onChange={e => changeData(e)}
                                ref={emailRef}
                                name="email" 
                                id="email" 
                                type="email" 
                                value={formData.email}
                                required  />
                        </div>
                        <div className="subject-input input">
                            <label htmlFor="subject">Subject</label>
                            <input 
                                onChange={e => changeData(e)}
                                name="subject" 
                                id="subject" 
                                type="subject" 
                                value={formData.subject}
                                required  />
                        </div>
                        <div className="message-input input">
                            <label htmlFor="body">Your message</label>
                            <textarea 
                                onChange={e => changeData(e)}
                                ref={messageRef}
                                name="message" 
                                id="body" 
                                type="text"
                                value={formData.message}/>
                        </div>
                        <div className="submit-btn">
                            <button onClick={submitForm}>Submit</button>
                        </div>
                    </div>
                </div>
                <div style={{opacity: sent ? 1 : 0}} className="right-col">
                        <div className="thank">
                            <h1>Thank you for your message!</h1>
                            <div>
                                <p>I'll write you back as soon as possible!</p>
                                <p>Consider checking my github and social media :)</p>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
} 