import React from 'react'
import './catering.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import HEADERIMG from '../../assets/catering-header-img.jpg'
import {Link} from 'react-router-dom'

const Catering = () => {
  return (
    <div className="catering-container">
        <Header title="Catering" imgSrc={HEADERIMG}/>
        <h1 className="catering-title">Leave your temptations with us</h1>
        <h6 className="catering-description">
        At Tempting Tastes, we bring the flavors of China and Korea to your special occasions with our exceptional catering services. Whether you're planning a corporate event, a wedding celebration, a birthday party, or any other gathering, our catering team is here to elevate your dining experience.
        </h6>
        <div className="catering-persuade">
          <h1 className="catering-list-title">What makes us irresistible</h1>
          <div className="catering-persuade-list">
            <div className="catering-list-item">
              <h2 className="catering-subheading">Exquisite Tastes</h2>
              <h6 className="catering-list-description">
              Our catering menu is a curated selection of our finest dishes, carefully prepared to tantalize your taste buds. From the rich and savory aromas of our authentic Chinese and Korean cuisines to the delicate artistry of our platters, we offer a culinary journey that celebrates the diversity of Asian flavors.
              </h6>
            </div>
            <div className="catering-list-item">
              <h2 className="catering-subheading">Culinary Craftsmanship</h2>
              <h6 className="catering-list-description">
              Our team of chefs, trained in the art of Asian cuisine, brings a wealth of experience to every dish they create. With a commitment to using only the freshest ingredients and authentic recipes, we ensure that each bite is a delightful adventure for your palate.
              </h6>
            </div>
            <div className="catering-list-item">
              <h2 className="catering-subheading">Tailored to Your Event</h2>
              <h6 className="catering-list-description">
              We understand that every event is unique, which is why we offer customizable catering packages to suit your specific needs. Whether you're planning an intimate gathering or a grand celebration, our team will work closely with you to design a catering experience that aligns perfectly with your vision.
              </h6>
            </div>
            <div className="catering-list-item">
              <h2 className="catering-subheading">Impeccable Presentation</h2>
              <h6 className="catering-list-description">
              At Tempting Tastes, we believe that the visual appeal of our dishes is just as important as their taste. Our catering team takes pride in presenting each platter with elegance and precision, creating a feast for the eyes as well as the palate.
              </h6>
            </div>
            <div className="catering-list-item">
              <h2 className="catering-subheading">Exceptional Service</h2>
              <h6 className="catering-list-description">
              Our commitment to excellence extends beyond the kitchen. Our dedicated catering staff ensures that your event runs smoothly, from setup to cleanup, allowing you to relax and savor the moment with your guests.
              </h6>
            </div>
          </div>
        </div>
        <Link className="catering-btn" to="/order">Start your Order</Link>
        <Footer/>
    </div>
  )
}

export default Catering