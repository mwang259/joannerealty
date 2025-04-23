// Service.js
import React, { useEffect, useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { Link } from 'react-router-dom';

function Services() {
  const { content } = useContext(LanguageContext);

  useEffect(() => {
    const elements = document.querySelectorAll('.animate-slide-up, .animate-fade-in');
    elements.forEach((element) => {
      element.style.opacity = '0';
      if (element.classList.contains('animate-slide-up')) {
        element.style.transform = 'translateY(50px)';
      }
    });
  }, []);

  const handleScrollToSocial = () => {
    const socialSection = document.getElementById('social')
    if(socialSection) {
      socialSection.scrollIntoView({behavior:'smooth'})
    }
  }

  return (
    <section className="services">
      <div className="services-header">
        <h2 className="animate-slide-up">{content.services_title}</h2>
        <div className="service-content">
          <div className="service-left">
            <div className="service-text selling-text animate-slide-up">
              <h3>{content.services_selling_title}</h3>
              <p>{content.services_selling_p}</p>
              <div className="service-buttons animate-fade-in">
                {/* <button className="btn">{content.services_selling_btn1}</button> */}
                <Link to={'/selling-resources'}>
                <button className="btn">{content.services_selling_btn2}</button>
                </Link>
                <Link to={'/home-evaluation'}>
                <button className="btn">{content.services_selling_btn3}</button>
                </Link>
              </div>
            </div>
            <div className="service-images selling-images animate-fade-in">
              <img src="/images/60288_richmond_19.jpg" alt="Selling 1" />
              <img src="/images/60288_richmond_25.jpg" alt="Selling 2" />
            </div>
          </div>
          <div className="service-right">
            <div className="service-images buying-images animate-fade-in">
              <img src="/images/60288_richmond_9.jpg" alt="Buying 1" />
              <img src="/images/634_expansion_road_5_38.jpg" alt="Buying 2" />
            </div>
            <div className="service-text buying-text animate-slide-up">
              <h3>{content.services_buying_title}</h3>
              <p>{content.services_buying_p}</p>
              <div className="service-buttons animate-fade-in">
                {/* <button className="btn">{content.services_buying_btn1}</button> */}
                <Link to={'/buying-resources'}>
                <button className="btn">{content.services_buying_btn2}</button>
                </Link>
                <button className="btn" onClick={handleScrollToSocial}>{content.services_buying_btn3}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
