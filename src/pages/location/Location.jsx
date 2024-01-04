import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import HEADERIMG from '../../assets/location-header-img.jpg'
import './location.css'

const Location = () => {
  return (
    <div className="locations-container">
        <Header title="Hours & Locations" imgSrc={HEADERIMG}/>
        <div className="location-container">
          <h1 className="location-title">New York</h1>
          <div className="address">
            <a className="address-link" href="https://www.google.com/maps" target="_blank">
            8071 Glenwood Street <br/> Flushing, NY 11354
            </a>
          </div>
          <h2 className="hours-title">Open Daily</h2>
          <h3 className="hours-text">Monday - Thursday: 11AM - 9PM</h3>
          <h3 className="hours-text">Friday - Sunday: 10AM - 8PM</h3>
          <br/>
          <h2 className="hours-title">Call Us</h2>
          <h3 className="hours-text">(321) 654-0987</h3>
          <div className="location-map">
            <iframe className="location-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24174.48487678325!2d-73.8494429792016!3d40.766190068639055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2601b87322e31%3A0x8744aeaa8deb60a3!2sFlushing%2C%20NY%2011354!5e0!3m2!1sen!2sus!4v1692388480448!5m2!1sen!2sus" allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className="location-overlay"></div>
          </div>
        </div>
        <div className="location-container">
          <h1 className="location-title">New Jersey</h1>
          <div className="address">
            <a className="address-link" href="https://www.google.com/maps" target="_blank">
            1512 Palisade Ave <br/> Fort Lee, NJ 07024
            </a>
          </div>
          <h2 className="hours-title">Open Daily</h2>
          <h3 className="hours-text">Monday - Friday: 11AM - 9PM</h3>
          <h3 className="hours-text">Saturday - Sunday: 11AM - 8PM</h3>
          <br/>
          <h2 className="hours-title">Call Us</h2>
          <h3 className="hours-text">(123) 456-7890</h3>
          <div className="location-map">
            <iframe className="location-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24144.634782069275!2d-73.99045457893537!3d40.84818166786627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f65422df6131%3A0x8d31104c2e403a42!2sFort%20Lee%2C%20NJ%2007024!5e0!3m2!1sen!2sus!4v1692391015343!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className="location-overlay"></div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Location