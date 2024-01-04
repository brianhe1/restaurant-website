import React from 'react'
import './footer.css'
import {Link} from 'react-router-dom'
import LOGO from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="first-column">
            <img className="footer-logo" src={LOGO} alt="logo"/>
            <div className='column-text'>
                <h2 className="email-text">hello@temptingtastes.cuisine</h2>
                <h3 className="copyright-text">Copyright © Tempting Tastes 2023 All Rights Reserved</h3>
            </div>      
        </div>
        <div className="second-column">
            <div className="footer-nav-links">
                <Link className="footer-nav-link" to="/">HOME</Link>
                <Link className="footer-nav-link" to="/location">LOCATIONS</Link>
                <Link className="footer-nav-link" to="/menu">MENUS</Link>
                <Link className="footer-nav-link" to="/about">ABOUT US</Link>
                <Link className="footer-nav-link" to="/catering">CATERING</Link>
                <Link className="footer-nav-link" to="/order">ORDER ONLINE</Link>
            </div>
            <div className="socials-column">
                <a className="socials-link" href="https://www.tiktok.com/en/" target="_blank">TikTok</a>
                <a className="socials-link" href="https://www.instagram.com/" target="_blank">Instagram</a>
                <a className="socials-link" href="https://www.facebook.com/" target="_blank">Facebook</a>
                <a className="socials-link" href="https://twitter.com/?lang=en" target="_blank">Twitter</a>
                <a className="socials-link" href="https://www.youtube.com/" target="_blank">YouTube</a>
            </div>
        </div>
        <div className="column-text-minimized">
                <h2 className="email-text">hello@temptingtastes.cuisine</h2>
                <h3 className="copyright-text">Copyright © Tempting Tastes 2023 All Rights Reserved</h3>
        </div>
    </div>
  )
}

export default Footer