import React, { useState, useRef, useEffect } from "react";
import { t } from 'i18next'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export default function Contact({language}) {
    const [sent, setSent] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        subject: ""
    })

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const messageRef = useRef(null)
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    function changeData(event) {
        let {name, value} = event.target
        setFormData(prevData => ({
                ...prevData,
                [name]: value
            }
        ))
    }

    useEffect(() => {
        if (sent) {
            toast.success('Thank you!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
            toast.success('I will contact you as soon as possible', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }
    }, [sent])

    function submitForm(){
        if (sent) return
        if (!formData.name){
            if (language === "ru"){
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
            if (language === "ru"){
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
            if (language === "ru"){
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
            axios.post("https://public.herotofu.com/v1/5ada5790-610a-11ee-94f4-efb6cbd494ee", formData)
            setSent(true)
        }
    }

    return (
        <div className="contact main">
            <div className="left-col">
                <h1>{t("Get in touch with me")}</h1>
                <div className="form">
                    <div className="name-input input">
                        <label htmlFor="name">{t("Your Name")}</label>
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
                        <label htmlFor="email">{("Your Email")}</label>
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
                        <label htmlFor="subject">{t("Subject")}</label>
                        <input 
                            onChange={e => changeData(e)}
                            name="subject" 
                            id="subject" 
                            type="subject" 
                            value={formData.subject}
                            required  />
                    </div>
                    <div className="message-input input">
                        <label htmlFor="body">{t("Your message")}</label>
                        <textarea 
                            onChange={e => changeData(e)}
                            ref={messageRef}
                            name="message" 
                            id="body" 
                            type="text"
                            value={formData.message}/>
                    </div>
                    <div className="submit-btn">
                        <button  onClick={submitForm}>{t("Submit")}</button>
                    </div>
                </div>
                <div className="additional">
                    <p>{t("Psst... you can always contact me via e-mail")}</p>
                    <a href="mailto:heilttme@yandex.ru">heilttme@yandex.ru</a>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
} 