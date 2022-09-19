import React from "react"
import profilePicture from "../assets/fergal.jpg"
import "./Info.css"
import LinkedInIcon from "../assets/Vector.png"
import EmailIcon from "../assets/Icon.png"

function linkClick(url) {
    window.open(url, "_blank");
}

function Info() {
    return (
        <header className="header">
            <img src={profilePicture} className="header--picture" />
            <h1 className="header--name">Fergal Reilly</h1>
            <h2 className="header--jobTitle">Tribe Lead</h2>
            <p className="header--website">contoso.com</p>
            <div className="header--buttons">
                <button className="header--buttons-email" onClick={() => linkClick("mailto:5765633+ObsidianPhoenix@users.noreply.github.com")}>
                    <img src={EmailIcon} />
                    <span>Email</span>
                </button>
                <button className="header--buttons-LinkedIn" onClick={() => linkClick("https://www.linkedin.com/in/fergal-reilly-37004220/")}>
                    <img src={LinkedInIcon} />
                    <span>LinkedIn</span>
                </button>
            </div>
        </header>
    )
}

export default Info;