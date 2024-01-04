import React from 'react'
import './header.css'

const Header = ({title, imgSrc}) => {
  return (
    <header>
        <div className="header-container">
            <img className="header-img" src={imgSrc} alt="HeaderImage"/>
            <h1 className="header-title">{title}</h1>
        </div>
    </header> 
  )
}

export default Header