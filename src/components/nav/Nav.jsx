import React, { useState } from 'react'
import './nav.css'
import {Link} from 'react-router-dom'

const Nav = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleToggleClick = () => {
    setMenuOpened(!menuOpened);
  };

  const handleLinkClick = () => {
    setMenuOpened(false); // Close the menu when a link is clicked
  };

  return (
    <nav>
      <div className="nav-container">
        <ul className="desktop-nav">
          <li><Link className="nav-link" to="/">HOME</Link></li>
          <li><Link className="nav-link" to="/location">HOURS & LOCATION</Link></li>
          <li><Link className="nav-link" to="/menu">MENUS</Link></li>
          <li><Link className="nav-link" to="/about">ABOUT US</Link></li>
          <li><Link className="nav-link" to="/catering">CATERING</Link></li>
          <li><Link className="nav-link-btn" to="/order">ORDER ONLINE</Link></li>
        </ul>
        
        <div className={`nav-toggle-btn ${menuOpened ? 'active' : ''}`} onClick={handleToggleClick}>
          <div className="toggle-btn-burger"></div>
        </div>

        {/* Conditionally render the mobile navbar */}
        {menuOpened && (
        <ul className="mobile-nav">
          <li><Link className="nav-link" to="/" onClick={handleLinkClick}>HOME</Link></li>
          <li><Link className="nav-link" to="/location" onClick={handleLinkClick}>HOURS & LOCATION</Link></li>
          <li><Link className="nav-link" to="/menu" onClick={handleLinkClick}>MENUS</Link></li>
          <li><Link className="nav-link" to="/about" onClick={handleLinkClick}>ABOUT US</Link></li>
          <li><Link className="nav-link" to="/catering" onClick={handleLinkClick}>CATERING</Link></li>
          <li><Link className="nav-link" to="/order" onClick={handleLinkClick}>ORDER ONLINE</Link></li>
        </ul>
        )}
      </div> 
    </nav>
  )
}

export default Nav