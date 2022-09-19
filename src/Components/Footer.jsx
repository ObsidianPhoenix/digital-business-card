import React from "react"
import "./Footer.css"

import TwitterLogo from "../assets/Twitter Icon.png"
import FacebookLogo from "../assets/Facebook Icon.png"
import InstagramLogo from "../assets/Instagram Icon.png"
import GithubLogo from "../assets/GitHub Icon.png"

function linkClick(url) {
    window.open(url, "_blank");
}

function Footer() {
    return (
        <footer className="card--footer">
            <img src={TwitterLogo} onClick={() => linkClick("https://twitter.com/obsidiandev")} />
            <img src={FacebookLogo} onClick={() => linkClick("https://www.facebook.com/fergal.reilly")} />
            <img src={InstagramLogo} onClick={() => linkClick("https://www.instagram.com/obsidiandev/")} />
            <img src={GithubLogo} onClick={() => linkClick("https://github.com/ObsidianPhoenix")} />
        </footer>
    )
}

export default Footer;