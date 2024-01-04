import React from 'react'
import './home.css'
import HeaderImage from '../../assets/header-pattern.jpg'
import LOGO from '../../assets/logo.png'
import LOCATION1 from '../../assets/location-icon-1.jpg'
import LOCATION2 from '../../assets/location-icon-2.jpg'
import MENUIMG from '../../assets/menu-image.jpg'
import CATERIMG from '../../assets/catering-homepage.jpg'
import {Link} from 'react-router-dom'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div className="home-container">
      <div className="header-container">
          <img className="home-header-img" src={HeaderImage} alt="HeaderImage"/>
          <img className="home-header-title" src={LOGO} alt="Logo"/>
      </div>
      <div className="home-about">
          <h1 className="home-title">Temptation You Can Taste.</h1>
          <h3 className="description-text">
            Indulge in the captivating world of TEMPTING TASTES, where culinary artistry meets irresistible flavors,
            located in New Jersey. Our restaurant seamlessly blends modern innovation with time-honored traditions, 
            delivering a delectable fusion of diverse cuisines that's sure to tantalize your taste buds. Experience 
            the essence of temptation through our carefully crafted dishes, where every bite is an invitation to savor 
            and explore.
          </h3>
      </div>
      <div className="home-locations">
        <div className="location-card">
          <div className="location-icon-container">
            <img className="location-icon" src={LOCATION1}/>
          </div>
          <h2 className="location-title">Visit our New York Location</h2>
          <div className="opening-hours">
            <h3 className="day-of-week">Monday - Thursday </h3>
            <h3 className="hours">11AM - 9PM</h3>
          </div>
          <div className="opening-hours">
            <h3 className="day-of-week">Friday - Sunday </h3>
            <h3 className="hours">10AM - 8PM</h3>
          </div>
          <div className="address">
            <a className="address-link" href="https://www.google.com/maps" target="_blank">
            8071 Glenwood Street <br/> Flushing, NY 11354
            </a>
          </div>
          <Link className="hours-location-btn" to="/location">HOURS & LOCATION</Link>
        </div>

        <div className="location-card">
        <div className="location-icon-container">
            <img className="location-icon" src={LOCATION2}/>
          </div>
          <h2 className="location-title">Visit our New Jersey Location</h2>
          <div className="opening-hours">
            <h3 className="day-of-week">Monday - Friday </h3>
            <h3 className="hours">11AM - 9PM</h3>
          </div>
          <div className="opening-hours">
            <h3 className="day-of-week">Saturday - Sunday </h3>
            <h3 className="hours">11AM - 8PM</h3>
          </div>
          <div className="address">
            <a className="address-link" href="https://www.google.com/maps" target="_blank">
            1512 Palisade Ave <br/> Fort Lee, NJ 07024
            </a>
          </div>
          <Link className="hours-location-btn" to="/location">HOURS & LOCATION</Link>
        </div>
      </div>
      <div className="home-menus">
        <div className="menu-left-split">
          <h1 className="home-menu-title">MENUS</h1>
          <h3 className="menu-description-text">Don't resist your temptations!</h3>
          <Link className="home-menu-btn" to="/menu">Restaurant</Link>
        </div>
        <div className="menu-right-split">
          <img className="menu-image" src={MENUIMG} alt="menu-image"/>
        </div>
      </div>

      <div className="home-catering">
        <div className="catering-left-split">
          <img className="catering-image" src={CATERIMG} alt="catering-image"/>
        </div>
        <div className="catering-right-split">
          <h1 className="home-catering-title">Catering</h1>
          <h3 className="catering-description-text">Leave the stress to Tempting Tastes and make your event unforgettable!</h3>
          <Link className="home-catering-btn" to="/catering">Book an Event</Link>
        </div>
      </div>

      <div className="home-order">
        <h1 className="order-title">Tempted for a Taste?</h1>
        <h3 className="order-description-text">Don't resist the temptation and eat with us today!</h3>
        <Link className="home-order-btn" to="/order">Start Your Order</Link>
      </div>

      <Footer/>
    </div>
  )
}

export default Home