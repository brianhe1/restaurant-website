import React from 'react'
import './about.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import HEADERIMG from '../../assets/about-us-header-img.jpg'

const About = () => {
  return (
    <div className="about-container">
        <Header title="About Us" imgSrc={HEADERIMG}/>
        <h1 className="about-title">OUR STORY</h1>
        <div className="timeline-container">
          <div className="timeline">
            <h2 className="about-timeline">2013, A Culinary Dream Begins</h2>
            <h3 className="timeline-description">
            Tempting Tastes was born out of a culinary dream shared by a group of passionate food enthusiasts. Our vision was to create a dining experience that would blend traditional Asian flavors with a modern twist, offering something truly unique to the local food scene.
            </h3>
          </div>
          <div className="timeline">
            <h2 className="about-timeline">2013, Humble Beginnings</h2>
            <h3 className="timeline-description">
            Working from a small home kitchen, the team experimented with recipes, striving to perfect their craft. We sourced the finest ingredients, ensuring that each dish would be a masterpiece of taste and presentation.
            </h3>
          </div>
          <div className="timeline">
            <h2 className="about-timeline">2014, Our First Location</h2>
            <h3 className="timeline-description">
            With the recipes perfected, we opened the doors to our first restaurant location in New Jersey. It quickly became a local favorite, known for its warm ambiance, exceptional service, and, of course, the delectable cuisine.
            </h3>
          </div>
          <div className="timeline">
            <h2 className="about-timeline">2016, Expanding Our Horizons</h2>
            <h3 className="timeline-description">
            Encouraged by the overwhelming response from our patrons, we embarked on a journey of expansion. A new location was opened in New York, designed to reflect the unique cultural fusion that defines Tempting Tastes.
            </h3>
          </div>
          <div className="timeline">
            <h2 className="about-timeline">2018-2023, A Community of Food Lovers</h2>
            <h3 className="timeline-description">
            Over the years, Tempting Tastes has grown into more than just a restaurant. It has become a community of food lovers who appreciate the artistry and passion that goes into each dish. Our customers have become our extended family, and their feedback continues to inspire us.
            </h3>
          </div>
          <div className="timeline">
            <h2 className="about-timeline">2023 and on, Continuing the Legacy</h2>
            <h3 className="timeline-description">
            As we look ahead, Tempting Tastes remains committed to pushing culinary boundaries, exploring new tastes, and providing a dining experience that transcends the ordinary. We're excited to continue this journey with our loyal patrons and welcome new friends along the way.
            </h3>
          </div>
          <h3 className="message">
            Thanks for being a part of our story. 
            <br/>
            We can't wait to serve you and share our passion for food with each visit to Tempting Tastes.
          </h3>
        </div>
        <Footer/>
    </div>
  )
}

export default About