import React from "react"

export default function Info() {
    return (
        <div className="info_box">
        <img src="./images/LinkedIn-Photo.png" className="info--photo"></img>
        <h1 className="dev_name">Brendan Montalvo</h1>
        <h2 className="dev_title">Front-end Developer</h2>
        <p className="dev_website" >brendanmontalvo.com</p>
        <div className="btn-group">
        <button className="email-btn"><img src="./images/email-logo.png" className="email-logo" />Email</button>
        <button className="linkedin-btn"><img src="./images/linkedin-icon.png" className="linkedin-icon"/>LinkedIn</button>
        </div>
        </div>
    )
}